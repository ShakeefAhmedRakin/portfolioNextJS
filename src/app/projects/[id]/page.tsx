import Image from "next/image";
import projects from "../../_data/projects/web.json";
import {
  ButtonPrimaryOutline,
  ButtonSecondaryOutline,
} from "@/app/_components/ui/Buttons";
import { BsGithub } from "react-icons/bs";
import { CgExternal } from "react-icons/cg";
import ProjectNotFound from "@/app/_components/errors/projectnotfound";
import { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params; //
  const project = projects.find((project) => project.id === id);

  return {
    metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
    // GOOGLE INDEXING SEO TAGS
    title: project?.seo?.googleIndexing?.title || "Achievement Details",
    description:
      project?.seo?.googleIndexing?.description ||
      "Explore details about this achievement.",
    keywords: project?.seo?.googleIndexing?.keywords || "Achievement, Details",
    publisher: "Shakeef Ahmed Rakin",
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/projects/${project?.id}`,
    },
    robots: "index, follow",

    // PREVIEW TAGS FOR SOCIAL MEDIA
    openGraph: {
      title: project?.seo?.openGraphCard?.title || project?.title,
      type: "article",
      description: project?.seo?.openGraphCard?.description || project?.summary,
      authors: "Shakeef Ahmed Rakin",
      url: `${process.env.WEBSITE_URL}/projects/${project?.id}`,
      images: [
        {
          url:
            project?.seo?.openGraphCard?.image ||
            project?.coverPhoto?.url ||
            "/logos/logo.png",
          alt:
            project?.seo?.openGraphCard?.imgAlt ||
            project?.coverPhoto?.alt ||
            "Project Image",
        },
      ],
      siteName: "Shakeef Ahmed Rakin - Portfolio",
    },
    twitter: {
      title: project?.seo?.twitterCard?.title || project?.title,
      description: project?.seo?.twitterCard?.description || project?.summary,
      images: [
        {
          url:
            project?.seo?.openGraphCard?.image ||
            project?.coverPhoto?.url ||
            "/logos/logo.png",
          alt:
            project?.seo?.openGraphCard?.imgAlt ||
            project?.coverPhoto?.alt ||
            "Project Image",
        },
      ],
    },
  };
}

export default async function AchievementDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return ProjectNotFound();
  }

  return (
    <section className="bg-backgroundDark min-h-screen">
      <div className="container mx-auto px-4 md:px-20 lg:px-32 xl:px-64 py-16">
        <article>
          {/* PROJECT HEADER */}
          <header>
            {/* PROJECT TITLES, TAGS AND LINKS */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              {/* PROJECT TITLES AND TAGS */}
              <div>
                <span
                  className={`text-primary font-bold font-body text-xs md:text-sm`}
                >
                  {new Date(project?.date ?? "").toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <div className="flex items-center gap-2 mt-1.5">
                  <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl">
                    {project?.title}{" "}
                  </h1>
                  {project?.isWorkInProgress && (
                    <span className="text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] font-bold px-1.5 py-0.5 md:py-1.5 font-heading border border-red-500 text-red-500 rounded-full">
                      Work-In-Progress
                    </span>
                  )}
                </div>
                <h2 className="font-body text-text text-xs md:text-sm font-light mt-1 mb-2">
                  {project?.subtitle}
                </h2>
                {project?.tags && (
                  <>
                    {project?.tags?.length > 0 && (
                      <ul className="flex gap-1 md:gap-2 items-center flex-wrap">
                        {project?.tags.map((tag) => (
                          <li
                            key={tag}
                            className={`font-body text-[8px] md:text-xs font-semibold text-white bg-primary px-2 py-1 rounded-full`}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
              {/* GITHUB LINKS */}

              <div className="grid grid-cols-2 gap-x-2 gap-y-2 w-full md:w-fit">
                <ButtonSecondaryOutline
                  href={project?.demoLinks?.url || ""}
                  ariaLabel="View Live Demo"
                  openInNewTab={true}
                  className="w-full col-span-2 max-h-[30px] lg:max-h-[40px]"
                  icon=<CgExternal className="text-lg lg:text-2xl"></CgExternal>
                >
                  {project?.demoLinks?.label}
                </ButtonSecondaryOutline>

                {project?.githubLinks.map((link) => (
                  <ButtonPrimaryOutline
                    href={link.url}
                    key={link.url}
                    ariaLabel="View project on GitHub"
                    openInNewTab={true}
                    className="w-full max-h-[30px] lg:max-h-[40px]"
                    icon=<BsGithub className="text-sm lg:text-base"></BsGithub>
                  >
                    {link.label}
                  </ButtonPrimaryOutline>
                ))}
              </div>
            </div>
            <hr className="my-4 md:my-6 lg:my-8" />
            {/* PROJECT SHORT Summary */}
            <h2 className="font-heading text-text mt-4 mb-2 font-bold text-base md:text-lg xl:text-2xl">
              Project Summary
            </h2>
            <p className="font-body font-light text-text text-xs lg:text-base max-w-4xl text-justify">
              {project?.summary}
            </p>
          </header>

          {/* PROJECT COVER PHOTO */}
          {project?.coverPhoto?.url && (
            <>
              <section>
                <hr className="my-4 md:my-6 lg:my-8" />
                <div className="w-full aspect-video max-h-96 relative">
                  <Image
                    src={project?.coverPhoto.url}
                    alt={
                      project?.coverPhoto.alt ||
                      `Cover photo for ${project?.title}`
                    }
                    fill={true}
                    draggable={false}
                    className="object-cover"
                  ></Image>
                  <span className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 font-heading rounded bg-black text-white bg-opacity-80 text-[9px] md:text-[10px] lg:text-xs px-1 py-0.5 whitespace-nowrap">
                    {project?.coverPhoto.caption || "Cover Photo"}
                  </span>
                </div>
                <hr className="my-4 md:my-6 lg:my-8" />
              </section>
            </>
          )}

          {/* CORE FEATURES */}
          {project?.coreFeatures && (
            <>
              <section>
                <h2 className="font-heading text-text mt-4 mb-2 font-bold text-base md:text-lg xl:text-2xl">
                  Core Features
                </h2>
                {/* PROJECT FEATURE LIST */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                  {project?.coreFeatures?.featureList.map((feature, index) => (
                    <li key={index}>
                      <h3 className="font-heading font-bold text-xs text-secondary md:text-sm lg:text-base">
                        {feature.title}
                      </h3>
                      <ul className="mt-2">
                        {feature.points.length > 0 && (
                          <>
                            {feature.points.map((point, index) => (
                              <li
                                key={`${index}-${point.substring(0, 10)}`}
                                className="font-body font-light text-text text-[9px] md:text-xs lg:text-sm mb-1 list-inside list-disc"
                              >
                                {point}
                              </li>
                            ))}
                          </>
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
                <hr className="my-4 md:my-6 lg:my-8" />
              </section>
            </>
          )}

          {/* TECHNOLOGY STACK */}
          {project?.techStack && (
            <>
              <section>
                <h2 className="font-heading text-text mt-4 mb-2 font-bold text-base md:text-lg xl:text-2xl">
                  Technology Stack
                </h2>
                {project?.techStack?.length > 0 && (
                  <ul className="space-y-3">
                    {project.techStack.map((tech, index) => (
                      <li key={index}>
                        <h3 className="font-heading font-bold text-xs text-primary md:text-sm lg:text-base mb-1">
                          {tech.title}
                        </h3>
                        {tech.techList?.length > 0 && (
                          <ul className="flex gap-1 md:gap-2 items-center flex-wrap">
                            {tech.techList.map((detail, detailIndex) => (
                              <li
                                key={`${detailIndex}-${detail.substring(0, 3)}`}
                                className={`font-body text-[8px] md:text-xs font-medium text-text bg-primary-lighter px-2 py-1 rounded-full`}
                              >
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                <hr className="my-4 md:my-6 lg:my-8" />
              </section>
            </>
          )}

          {/* PROJECT OVERVIEW */}
          {project?.overviewSections &&
            project?.overviewSections.length > 0 && (
              <>
                <section className="space-y-5">
                  <h2 className="font-heading text-text mt-4 mb-2 font-bold text-base md:text-lg xl:text-2xl">
                    Project Overview
                  </h2>

                  {project.overviewSections.map((section, index) => {
                    switch (section.type) {
                      case "text":
                        return (
                          <section key={index}>
                            {section?.hasTitle && (
                              <h3 className="font-heading font-bold text-sm text-secondary md:text-base lg:text-lg mb-3">
                                {section?.title}
                              </h3>
                            )}
                            <p className="leading-normal md:leading-5 lg:leading-7 font-body font-light text-text text-xs lg:text-base text-justify">
                              {typeof section?.content === "string" &&
                                section?.content}
                            </p>
                          </section>
                        );

                      case "text-image":
                        return (
                          <section key={index}>
                            {typeof section?.content === "object" && (
                              <div
                                className={`grid grid-cols-1 gap-y-4 gap-x-8 md:grid-cols-2`}
                              >
                                <div
                                  className={`${
                                    section?.imageOnLeft ? "md:order-last" : ""
                                  }`}
                                >
                                  {section?.hasTitle && (
                                    <h3 className="font-heading font-bold text-sm text-secondary md:text-base lg:text-lg mb-3">
                                      {section?.title}
                                    </h3>
                                  )}
                                  {"text" in section?.content && (
                                    <p className="leading-normal md:leading-5 lg:leading-7 font-body font-light text-text text-xs lg:text-base text-justify">
                                      {section?.content?.text}
                                    </p>
                                  )}
                                </div>
                                <div
                                  className={`relative bg-gray-100 dark:bg-background rounded aspect-video md:aspect-auto`}
                                >
                                  <Image
                                    src={
                                      "image" in section.content &&
                                      section?.content?.image?.url
                                        ? section?.content?.image?.url
                                        : ""
                                    }
                                    alt={
                                      "image" in section.content &&
                                      section?.content?.image?.alt
                                        ? section?.content?.image?.alt
                                        : `Image for ${project?.title}`
                                    }
                                    fill={true}
                                    draggable={false}
                                    className="object-contain"
                                  ></Image>
                                  <span className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 font-heading rounded bg-black text-white bg-opacity-80 text-[9px] md:text-[10px] lg:text-xs px-1 py-0.5 whitespace-nowrap">
                                    {(typeof section?.content === "object" &&
                                      "image" in section?.content &&
                                      section?.content?.image?.caption) ||
                                      "Missing Caption"}
                                  </span>
                                </div>
                              </div>
                            )}
                          </section>
                        );

                      case "list":
                        return (
                          <section key={index}>
                            {section?.hasTitle && (
                              <h3 className="font-heading font-bold text-sm text-secondary md:text-base lg:text-lg mb-3">
                                {section?.title}
                              </h3>
                            )}
                            <ul className="">
                              {Array.isArray(section?.content) &&
                                section?.content?.map((point, index) => (
                                  <li
                                    key={`${index}-${point.substring(0, 10)}`}
                                    className="leading-normal md:leading-5 lg:leading-7 font-body font-light text-text text-xs lg:text-base text-justify list-disc list-inside"
                                  >
                                    {point}
                                  </li>
                                ))}
                            </ul>
                          </section>
                        );

                      case "image":
                        return (
                          <section key={index}>
                            {section?.hasTitle && (
                              <h3 className="font-heading font-bold text-sm text-secondary md:text-base lg:text-lg mb-3">
                                {section?.title}
                              </h3>
                            )}
                            <div
                              className={`bg-gray-100 dark:bg-background rounded w-full aspect-video max-h-80 relative`}
                            >
                              {typeof section?.content === "object" && (
                                <Image
                                  src={
                                    "image" in section?.content &&
                                    section?.content?.image?.url
                                      ? section?.content?.image?.url
                                      : ""
                                  }
                                  alt={
                                    "image" in section?.content &&
                                    section?.content?.image?.alt
                                      ? section?.content?.image?.alt
                                      : `Image for ${project?.title}`
                                  }
                                  fill={true}
                                  draggable={false}
                                  className="object-scale-down"
                                ></Image>
                              )}
                              <span className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 font-heading rounded bg-black text-white bg-opacity-80 text-[9px] md:text-[10px] lg:text-xs px-1 py-0.5 whitespace-nowrap">
                                {(typeof section?.content === "object" &&
                                  "image" in section?.content &&
                                  section?.content?.image?.caption) ||
                                  "Missing Caption"}
                              </span>
                            </div>
                          </section>
                        );
                      default:
                        return null;
                    }
                  })}
                </section>
              </>
            )}
        </article>
      </div>
    </section>
  );
}
