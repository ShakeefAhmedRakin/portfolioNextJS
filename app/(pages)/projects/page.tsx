import PageHeader from "@/components/ui/page-header";
import { SectionWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/metadata/site-metadata";
import getMetadata from "@/metadata/utils/get-metadata";
import FilterControls from "./_components/filter-control";
import { projectCategoriesEnum } from "@/types/enums";
import { notFound } from "next/navigation";
import { projects } from "@/.velite";
import ProjectCard from "../../../components/ui/project-card";
import { paragraphVariants } from "@/components/ui/typography";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn, sortProjectsByDate } from "@/lib/utils";
import SetSchemaProjectsListingPage from "@/metadata/schemas/schemaProjectsListingPage";

export function generateMetadata() {
  return getMetadata(SiteMetadata.PROJECTS);
}

export default async function ProjectsListingPage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const { category } = await searchParams;

  if (category) {
    if (
      !projectCategoriesEnum.includes(
        category as (typeof projectCategoriesEnum)[number],
      )
    ) {
      return notFound();
    }
  }

  const filteredProjects = category
    ? sortProjectsByDate(
        projects.filter((project) => project.category === category),
      )
    : sortProjectsByDate(projects);

  return (
    <>
      <SetSchemaProjectsListingPage />
      <PageHeader
        title="Projects"
        subtitle="All of my completed and ongoing projects"
      />
      <SectionWrapper
        wrapperClassName="pb-12 lg:pb-20 xl:pb-24 pt-6 xl:pt-8"
        padding={"header"}
      >
        <FilterControls activeCategory={category} />
        <p
          className={cn(paragraphVariants({
            level: "small",
            className: "text-foreground/60 my-2",
          }), ANIMATE_FADE_UP)}
        >
          {filteredProjects.length} project
          {filteredProjects.length > 1 && "s"} found
        </p>
        {filteredProjects.length === 0 ? (
          <div className={cn(ANIMATE_FADE_UP, "mt-6 flex min-h-[300px] items-center justify-center")}>
            <p
              className={cn(paragraphVariants({
                level: "small",
                className: "text-foreground/60 my-2",
              }), ANIMATE_FADE_UP)}
            >
              No projects found
            </p>
          </div>
        ) : (
          <>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </ul>
          </>
        )}
      </SectionWrapper>
    </>
  );
}
