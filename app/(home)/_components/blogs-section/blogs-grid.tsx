"use client";

import { BlogCard, BlogCardSkeleton } from "@/components/ui/blog-card";
import useBlogs from "@/hooks/useGetBlogs";

export default function BlogsGrid() {
  const maxBlogs = 4;
  const { articles, loading } = useBlogs({ maxBlogs: maxBlogs });

  return (
    <div className="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once mt-4 grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
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
