import { Research } from "@/.velite";
import { badgeVariants } from "./badge";
import { cn } from "@/lib/utils";
import { headingVariants, TypographyP } from "./typography";
import { buttonVariants } from "./button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { containerVariants } from "./containerVariants";

export default function ResearchCard({ paper }: { paper: Research }) {
  return (
    <li
      key={paper.slug}
      className={cn(
        "intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once flex flex-col space-y-3 p-4",
        containerVariants({ variant: "clear" }),
      )}
    >
      <ul className="flex flex-wrap items-center">
        <li
          className={badgeVariants({
            className: `text-[10px] ${paper.isPublished ? "text-success" : "text-red-500"}`,
            variant: "outline",
          })}
        >
          {paper.isPublished ? "PUBLISHED" : "ONGOING PUBLICATION"}
        </li>
        {paper.publisher && (
          <li
            className={badgeVariants({
              className: `text-[10px]`,
              variant: "outline",
            })}
          >
            {paper.publisher.name}
          </li>
        )}
      </ul>
      <h3
        className={headingVariants({
          level: "h4",
          className: "line-clamp-2",
        })}
      >
        {paper.title}
      </h3>
      <TypographyP level="small" className="text-foreground/70 line-clamp-3">
        {paper.excerpt}
      </TypographyP>
      <div className="flex flex-1 items-end">
        <Link
          href={paper.permalink}
          className={buttonVariants({
            size: "sm",
            variant: "outline",
            className: "bg-transparent text-xs",
          })}
        >
          View Details <ChevronRight />
        </Link>
      </div>
    </li>
  );
}
