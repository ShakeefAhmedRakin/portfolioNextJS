import { research } from "@/.velite";

import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { headingVariants, TypographyP } from "@/components/ui/typography";
import { PiNewspaperLight } from "react-icons/pi";

import SiteMetadata from "@/metadata/site-metadata";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn, formatDateString } from "@/lib/utils";

import SetSchemaResearchPage from "@/metadata/schemas/schemaResearchPage";

import getMetadata from "@/metadata/utils/get-metadata";
import Link from "next/link";

import { notFound } from "next/navigation";
import { containerVariants } from "@/components/ui/container-variants";
import { ArticleWrapper } from "@/components/ui/wrappers";

export async function generateStaticParams() {
  return research.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentResearch = research.find((r) => r.slug === slug);

  if (currentResearch) {
    return getMetadata(SiteMetadata.getResearchMetadata(currentResearch));
  } else {
    return getMetadata(SiteMetadata.NOT_FOUND);
  }
}

export default async function ResearchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentResearch = research.find((r) => r.slug === slug);

  if (!currentResearch) {
    return notFound();
  }

  return (
    <>
      <SetSchemaResearchPage research={currentResearch} />
      <ArticleWrapper>
        <div
          className={cn(
            "space-y-4 p-4",
            ANIMATE_FADE_UP,
            containerVariants({ variant: "clear" }),
          )}
        >
          <header>
            <div className="flex flex-col justify-between gap-2 xl:flex-row">
              <div className="flex-1">
                <ul className="flex flex-wrap items-center">
                  <li
                    className={badgeVariants({
                      className: `text-[10px] ${currentResearch.isPublished ? "text-success" : "text-red-500"}`,
                      variant: "outline",
                    })}
                  >
                    {currentResearch.isPublished
                      ? "PUBLISHED"
                      : "ONGOING PUBLICATION"}
                  </li>
                  {currentResearch.isPublished && currentResearch.publisher && (
                    <li
                      className={badgeVariants({
                        className: `text-[10px]`,
                        variant: "outline",
                      })}
                    >
                      {currentResearch.publisher.name}
                    </li>
                  )}
                </ul>
                <h1
                  className={headingVariants({
                    level: "h3",
                    weight: "light",
                    className: "mt-4 mb-2",
                  })}
                >
                  {currentResearch.title}
                </h1>
                <time
                  dateTime={currentResearch.date}
                  className="text-foreground/70 text-sm font-semibold"
                >
                  {formatDateString(currentResearch.date)}
                </time>
              </div>
              <div className="border-primary/20 h-fit w-full space-y-2 border p-4 xl:max-w-[280px]">
                {currentResearch.publisher && (
                  <>
                    {currentResearch.publisher.link ? (
                      <Link
                        href={currentResearch.publisher.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/90 hover:text-primary/100 mx-auto flex min-h-11 w-fit touch-manipulation items-center justify-center px-3 py-2 text-center text-sm font-light underline underline-offset-4 duration-300"
                      >
                        <span className="block max-w-full">
                          {currentResearch.publisher.name}
                        </span>
                      </Link>
                    ) : (
                      <p className="text-center text-sm font-light">
                        {currentResearch.publisher.name}
                      </p>
                    )}
                    <h2 className="text-center text-xs font-light">
                      {currentResearch.publisher.department}
                    </h2>
                  </>
                )}
                {currentResearch.isPublished ? (
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                    {currentResearch.paperLinks?.link && (
                      <Link
                        href={currentResearch.paperLinks?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                          variant: "secondary",
                          className: "touch-manipulation bg-transparent",
                        })}
                      >
                        <PiNewspaperLight />
                        View Paper
                      </Link>
                    )}
                    {currentResearch.paperLinks?.linkToPDF && (
                      <Link
                        href={currentResearch.paperLinks?.linkToPDF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                          variant: "secondary",
                          className: "touch-manipulation bg-transparent",
                        })}
                      >
                        <PiNewspaperLight />
                        View PDF
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="py-1 text-center text-sm text-red-500">
                    <span>ONGOING PUBLICATION</span>
                  </div>
                )}
              </div>
            </div>
          </header>

          <section className="space-y-2">
            <h2 className={headingVariants({ level: "h4", weight: "light" })}>
              AUTHORS
            </h2>
            <ol className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {currentResearch.authors.map((author) => (
                <li key={`${currentResearch.slug}-${author.name}`}>
                  <h3 className="text-primary/95">
                    {author.link ? (
                      <Link
                        href={author.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary/100 inline-flex min-h-11 touch-manipulation items-center underline underline-offset-4 duration-300"
                      >
                        {author.name}
                      </Link>
                    ) : (
                      author.name
                    )}
                  </h3>
                  {author.title && (
                    <h4 className="mt-1 text-xs font-light">{author.title}</h4>
                  )}
                </li>
              ))}
            </ol>
          </section>
          <section className="space-y-2">
            <h2 className={headingVariants({ level: "h4", weight: "light" })}>
              ABSTRACT
            </h2>
            <TypographyP className="text-foreground/70">
              {currentResearch.abstract}
            </TypographyP>
          </section>
        </div>
      </ArticleWrapper>
    </>
  );
}
