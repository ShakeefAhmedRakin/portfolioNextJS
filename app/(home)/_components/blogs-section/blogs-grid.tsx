import { BlogCard, BlogCardSkeleton } from "@/components/ui/blog-card";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { siteSocialMap } from "@/content/site-socials";
import { Article } from "@/types/blogs";

const MAX_BLOGS = 8;
const GRID_CLASSES = cn(
  ANIMATE_FADE_UP,
  "mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-8",
);

const extractFirstImageSrc = (html: string): string => {
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : "";
};

async function fetchMediumArticles(): Promise<Article[]> {
  const mediumHandle = siteSocialMap.MEDIUM.url.split("@")[1];
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumHandle}`,
    { next: { revalidate: 3600 } },
  );

  if (!response.ok) {
    throw new Error(`rss2json responded with ${response.status}`);
  }

  const data = (await response.json()) as { items: Article[] };
  return data.items.slice(0, MAX_BLOGS).map((article) => ({
    ...article,
    thumbnail: article.thumbnail || extractFirstImageSrc(article.content),
  }));
}

export default async function BlogsGrid() {
  let articles: Article[] = [];
  try {
    articles = await fetchMediumArticles();
  } catch (error) {
    console.error("Error fetching articles:", error);
    return (
      <p className="text-foreground/60 mt-4 text-sm">
        Failed to load blog posts
      </p>
    );
  }

  return (
    <div className={GRID_CLASSES}>
      {articles.map((article) => (
        <BlogCard key={article.title} article={article} />
      ))}
    </div>
  );
}

export function BlogsGridSkeleton() {
  return (
    <div className={GRID_CLASSES}>
      {Array.from({ length: MAX_BLOGS }).map((_, i) => (
        <BlogCardSkeleton key={`${i}-skeleton`} />
      ))}
    </div>
  );
}
