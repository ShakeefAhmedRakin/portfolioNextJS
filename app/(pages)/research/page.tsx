import { research } from "@/.velite";

import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import { headingVariants, TypographyP } from "@/components/ui/typography";

import { SectionWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/content/site-metadata";
import { formatDateString, sortResearchByDate } from "@/lib/utils";

import SetSchemaResearchListingPage from "@/metadata/schemas/schemaResearchListingPage";
import getMetadata from "@/metadata/utils/get-metadata";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function generateMetadata() {
  return getMetadata(SiteMetadata.RESEARCH);
}

export default function ResearchListingPage() {
  return (
    <>
      <SetSchemaResearchListingPage />
      <PageHeader
        title="Research"
        subtitle="Discover my latest research projects that I've collaborated with esteemed colleagues and institutions"
      />
      <SectionWrapper
        wrapperClassName="pb-12 lg:pb-20 xl:pb-24 pt-6 xl:pt-8"
        padding={"header"}
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sortResearchByDate(research).map((paper) => (
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
              <h2
                className={headingVariants({
                  level: "h4",
                  className: "line-clamp-2",
                })}
              >
                {paper.title}
              </h2>
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
      </SectionWrapper>
    </>
  );
}
