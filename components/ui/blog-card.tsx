import { Article } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import { headingVariants } from "./typography";

export function BlogCard({ article }: { article: Article }) {
  return (
    <Link href={article.link} target="_blank" rel="noopener noreferrer" className="group space-y-4">
      <div className="relative aspect-video">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={article.thumbnail}
          fill
          alt={`Thumbnail image for article titled "${article.title}"`}
          draggable={false}
          title={article.title}
          className="object-cover brightness-75 duration-300 group-hover:brightness-100"
        />
      </div>
      <h3
        className={headingVariants({
          level: "h5",
          className: "line-clamp-2 group-hover:underline",
        })}
      >
        {article.title}
      </h3>
    </Link>
  );
}
export function BlogCardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="bg-secondary relative aspect-video animate-pulse"></div>
      <div className="bg-secondary h-6 w-full animate-pulse"></div>
      <div className="bg-secondary h-6 w-1/2 animate-pulse"></div>
    </div>
  );
}
