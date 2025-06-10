import { research } from "@/.velite";
import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { headingVariants, TypographyP } from "@/components/ui/typography";
import { formatDateString, sortResearchByDate } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ResearchGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {sortResearchByDate(research)
        .filter((paper) => paper.isFeatured)
        .map((paper) => (
          <li
            key={paper.slug}
            className="bg-secondary/20 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once flex flex-col space-y-3 p-4"
          >
            <ul className="flex flex-wrap items-center">
              <li
                className={badgeVariants({
                  className: `text-[10px] ${paper.isPublished ? "text-green-500" : "text-red-500"}`,
                  variant: "outline",
                })}
              >
                {paper.isPublished ? "PUBLISHED" : "ONGOING PUBLICATION"}
              </li>
              {paper.isPublished && paper.publisher && (
                <li
                  className={badgeVariants({
                    className: `text-[10px]`,
                    variant: "outline",
                  })}
                >
                  {paper.publisher.name}
                </li>
              )}
              <li
                className={badgeVariants({
                  className: `text-[10px]`,
                  variant: "outline",
                })}
              >
                <time>{formatDateString(paper.date)}</time>
              </li>
            </ul>
            <h3
              className={headingVariants({
                level: "h4",
                className: "line-clamp-2",
              })}
            >
              {paper.title}
            </h3>
            <TypographyP
              level="small"
              className="text-foreground/70 line-clamp-3"
            >
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
        ))}
    </ul>
  );
}
