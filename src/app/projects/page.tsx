import projects from "../_data/projects.json";
import ScrollToViewComponent from "./_components/scrollComponent";
import { Metadata } from "next";
import ProjectCard from "./_components/projectcard";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import { SetSchemaProjectsPage } from "../_util/metadata/ProjectsPage/SetSchemaProjectsPage";
import { MetadataProjectsPage } from "../_util/metadata/ProjectsPage/MetadataProjectsPage";

export function generateMetadata(): Metadata {
  return MetadataProjectsPage;
}

export default function ProjectsPage() {
  const sortedAndGroupedProjects = ReadSortAndGroupProjectsByType();

  return (
    <>
      <SetSchemaProjectsPage />
      <LayoutWrapper>
        <TitleLarge
          firstTitle="My"
          secondTitle="Projects"
          isPrimary={true}
        ></TitleLarge>
        <hr className="mb-4" />

        <ScrollToViewComponent projectsByType={sortedAndGroupedProjects} />

        <div className="space-y-4 mt-4">
          {Object.keys(sortedAndGroupedProjects).map((type) => (
            <section key={type} id={type} aria-labelledby={`${type}-heading`}>
              <h3
                id={`${type}-heading`}
                title={type}
                className="font-heading font-bold text-base md:text-xl lg:text-2xl text-primary"
              >
                {type}
              </h3>
              <div className="bg-gradient-to-br from-primary to-secondary py-0.5 w-full  rounded-lg shadow shadow-primary mt-3 mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {sortedAndGroupedProjects[type]
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  )
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </section>
          ))}
        </div>
      </LayoutWrapper>
    </>
  );
}

const ReadSortAndGroupProjectsByType = () => {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Group projects by type
  const sortedAndGroupedProjects = sortedProjects.reduce(
    (acc: { [key: string]: typeof projects }, project) => {
      if (!acc[project?.type]) {
        acc[project.type] = [];
      }
      acc[project.type].push(project);
      return acc;
    },
    {}
  );
  return sortedAndGroupedProjects;
};
