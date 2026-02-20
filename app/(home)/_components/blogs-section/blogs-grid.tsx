"use client";

import { BlogCard, BlogCardSkeleton } from "@/components/ui/blog-card";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";
import useBlogs from "@/hooks/useGetBlogs";

export default function BlogsGrid() {
  const maxBlogs = 8;
  const { articles, loading, error } = useBlogs({ maxBlogs: maxBlogs });

  if (error) {
    return (
      <p className="text-foreground/60 mt-4 text-sm">{error}</p>
    );
  }

  return (
    <div className={cn(ANIMATE_FADE_UP, "mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-8")}>
      {loading ? (
        <>
          {Array.from({ length: maxBlogs }).map((_, i) => (
            <BlogCardSkeleton key={`${i}-skeleton`} />
          ))}
        </>
      ) : (
        <>
          {articles.map((article) => (
            <BlogCard key={article.title} article={article} />
          ))}
        </>
      )}
    </div>
  );
}
