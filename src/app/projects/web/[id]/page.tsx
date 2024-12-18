import Image from "next/image";
import projects from "../../../_data/projects/web.json";
import {
  ButtonPrimaryOutline,
  ButtonSecondaryOutline,
} from "@/app/_components/ui/Buttons";
import { BsGithub } from "react-icons/bs";
import { CgExternal } from "react-icons/cg";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function AchievementDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

  return (
    <section className="bg-backgroundDark min-h-screen">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
        <article>
          {/* PROJECT HEADER */}
          <header>
            {/* PROJECT TITLES, TAGS AND LINKS */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              {/* PROJECT TITLES AND TAGS */}
              <div>
                <span className={`text-primary font-bold font-body text-sm`}>
                  {new Date(project?.date ?? "").toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <h1 className="font-heading mt-2 text-text font-bold text-lg md:text-xl xl:text-3xl">
                  {project?.title}
                </h1>
                <h2 className="font-body text-text text-xs md:text-sm font-light mt-1 mb-2">
                  {project?.type} | {project?.technology}
                </h2>
                {project?.tags && (
                  <>
                    {project?.tags?.length > 0 && (
                      <div className="flex gap-1 md:gap-2 items-center flex-wrap">
                        {project?.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`font-body text-[8px] md:text-xs font-semibold text-white bg-primary px-2 py-1 rounded-full`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
              {/* GITHUB LINKS */}

              <div className="grid grid-cols-2 gap-2 w-full md:w-fit">
                {project?.demoLinks.map((link) => (
                  <>
                    <ButtonSecondaryOutline
                      href={link.url}
                      ariaLabel="View Live Demo"
                      openInNewTab={true}
                      className="h-[30px] md:h-[30px] lg:h-[40px] w-full col-span-2"
                      icon=<CgExternal className="text-lg lg:text-2xl"></CgExternal>
                    >
                      {link.label}
                    </ButtonSecondaryOutline>
                  </>
                ))}
                {project?.githubLinks.map((link) => (
                  <>
                    <ButtonPrimaryOutline
                      href={link.url}
                      ariaLabel="View project on GitHub"
                      openInNewTab={true}
                      className="h-[30px] md:h-[30px] lg:h-[40px] w-full"
                      icon=<BsGithub className="text-sm lg:text-base"></BsGithub>
                    >
                      {link.label}
                    </ButtonPrimaryOutline>
                  </>
                ))}
              </div>
            </div>
            <hr className="my-4" />
            {/* PROJECT SHORT OVERVIEW */}
            <h2 className="font-heading text-text mt-4 mb-2 font-bold text-base md:text-lg xl:text-2xl">
              Overview
            </h2>
            <p className="font-body font-light text-text text-xs lg:text-base max-w-4xl">
              {project?.overview}
            </p>
          </header>

          {/* PROJECT COVER PHOTO */}
          {project?.coverPhoto?.url && (
            <>
              <section>
                <hr className="my-4" />
                <div className="w-full aspect-video max-h-96 relative">
                  <Image
                    src={project?.coverPhoto.url}
                    alt={
                      project?.coverPhoto.alt ||
                      `Cover photo for ${project?.title}`
                    }
                    fill={true}
                    className="object-cover"
                  ></Image>
                </div>
                <hr className="my-4" />
              </section>
            </>
          )}

          {/* PROJECT CONTENT */}
        </article>
      </div>
    </section>
  );
}
