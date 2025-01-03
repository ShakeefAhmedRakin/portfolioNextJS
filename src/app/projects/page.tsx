import projects from "../_data/projects.json";
import ScrollToViewComponent from "./_components/scrollComponent";
import { Metadata } from "next";
import ProjectCard from "./_components/projectcard";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import TitleMedium from "../_components/ui/TitleMedium";
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

        <ScrollToViewComponent projectsByType={sortedAndGroupedProjects} />
        {Object.keys(sortedAndGroupedProjects).map((type) => (
          <section key={type} id={type} aria-labelledby={`${type}-heading`}>
            <hr className="my-4" />
            <TitleMedium id={`${type}-heading`} title={type} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedAndGroupedProjects[type].map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <hr className="my-4" />
          </section>
        ))}
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
