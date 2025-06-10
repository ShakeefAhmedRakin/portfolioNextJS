import { research } from "@/.velite";

import { badgeVariants } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { headingVariants, TypographyP } from "@/components/ui/typography";
import { PiNewspaperLight } from "react-icons/pi";

import SiteMetadata from "@/content/site-metadata";
import { cn, formatDateString } from "@/lib/utils";

import SetSchemaResearchPage from "@/metadata/schemas/schemaResearchPage";

import getMetadata from "@/metadata/utils/get-metadata";
import Link from "next/link";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return research.map((research) => ({
    slug: research.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentResearch = research.find((project) => project.slug === slug);

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
  const currentResearch = research.find((research) => research.slug === slug);

  if (!currentResearch) {
    return notFound();
  }

  return (
    <>
      <SetSchemaResearchPage research={currentResearch} />
      <article className="relative container mx-auto mb-8 px-4 pt-10 md:px-10 lg:px-56 xl:px-64">
        <header className="intersect:animate-fade-up shadow-primary/5 bg-secondary/20 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once p-4">
          <div className="flex flex-col justify-between gap-2 xl:flex-row">
            <div className="flex-1">
              <ul className="flex flex-wrap items-center">
                <li
                  className={badgeVariants({
                    className: `text-[10px] ${currentResearch.isPublished ? "text-green-500" : "text-red-500"}`,
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
              <time className="text-foreground/70 text-sm font-semibold">
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
                      title={`View Publisher`}
                      aria-label={`View Publisher`}
                      className="text-primary/90 hover:text-primary/100 flex justify-center text-sm font-light underline underline-offset-4 duration-300"
                    >
                      {currentResearch.publisher.name}
                    </Link>
                  ) : (
                    <h2 className="text-center text-sm font-light">
                      {currentResearch.publisher.name}
                    </h2>
                  )}
                  <h2 className="text-center text-xs font-light">
                    {currentResearch.publisher.department}
                  </h2>
                </>
              )}
              {currentResearch.isPublished ? (
                <div className="flex items-center justify-center gap-2">
                  {currentResearch.paperLinks?.link && (
                    <Link
                      href={currentResearch.paperLinks?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`View Paper`}
                      aria-label={`View Paper`}
                      className={buttonVariants({
                        variant: "secondary",
                        className: "bg-transparent",
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
                      title={`View PDF`}
                      aria-label={`View PDF`}
                      className={buttonVariants({
                        variant: "secondary",
                        className: "bg-transparent",
                      })}
                    >
                      <PiNewspaperLight />
                      View PDF
                    </Link>
                  )}
                </div>
              ) : (
                <div className="py-5 text-center text-sm text-red-500">
                  <span>ONGOING PUBLICATION</span>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="intersect:animate-fade-up shadow-primary/5 bg-secondary/20 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once space-y-6 p-4">
          <section className="space-y-2">
            <h2 className={headingVariants({ level: "h4", weight: "light" })}>
              AUTHORS
            </h2>
            <ol className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {currentResearch.authors.map((author) => (
                <li key={`${currentResearch.slug}-${author.name}`}>
                  <h3
                    className={cn(
                      "text-primary/95",
                      author.link &&
                        "text-primary/95 hover:text-primary/100 underline underline-offset-4 duration-300",
                    )}
                  >
                    {author.link ? (
                      <Link
                        href={author.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={author.name}
                        aria-label={`View ${author.name} profile`}
                      >
                        {author.name}
                      </Link>
                    ) : (
                      author.name
                    )}
                  </h3>
                  <h4 className="mt-1 text-xs font-light">{author.title}</h4>
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
      </article>
    </>
  );
}
