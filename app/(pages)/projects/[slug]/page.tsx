import { projects } from "@/.velite";
import { badgeVariants } from "@/components/ui/badge";
import { MDXContent } from "@/components/ui/mdx-content";
import {
  paragraphVariants,
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
} from "@/components/ui/typography";
import { ArticleWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/metadata/site-metadata";
import { formatDateString } from "@/lib/utils";
import SetSchemaProjectPage from "@/metadata/schemas/schemaProjectPage";
import getMetadata from "@/metadata/utils/get-metadata";
import { Dot } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXImage } from "@/components/ui/typography-mdx";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (project) {
    return getMetadata(SiteMetadata.getProjectMetadata(project));
  } else {
    return getMetadata(SiteMetadata.NOT_FOUND);
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <SetSchemaProjectPage project={project} />
      <ArticleWrapper>
        <header className="intersect:animate-fade-up shadow-primary/5 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once mb-4 space-y-4">
          <div
            className={paragraphVariants({
              className: "text-foreground/70 mb-1 flex items-center font-light",
              level: "small",
            })}
          >
            {project.isOngoing ? (
              <span className="text-success">ONGOING</span>
            ) : (
              <time>{formatDateString(project.date)} (COMPLETED)</time>
            )}
            <Dot />
            <span className="uppercase">{project.category}</span>
          </div>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag} className={badgeVariants({ variant: "outline" })}>
                {tag}
              </li>
            ))}
          </ul>

          <TypographyH1>{project.title}</TypographyH1>
          <TypographyH2 className="font-light">{project.subTitle}</TypographyH2>
          <TypographyBlockquote className="text-foreground/70 py-3">
            {project.excerpt}
          </TypographyBlockquote>
          <MDXImage
            src={project.thumbnail.src}
            priority
            placeholder="blur"
            blurDataURL={project.thumbnail.blurDataURL}
            alt={project.title}
            title={project.title}
            fill
            draggable={false}
            className="object-contain object-center"
          />
          <hr className="border-primary/50" />
        </header>

        <div className="intersect:animate-fade-up shadow-primary/5 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once">
          <MDXContent code={project.content} />
        </div>
      </ArticleWrapper>
    </>
  );
}
