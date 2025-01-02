import SectionBadge from "./sectionbadge";
import SectionTitle from "./sectiontitle";
import projects from "../../_data/projects.json";
import { ButtonSecondaryFilled } from "../ui/Buttons";
import ProjectCard from "../../projects/_components/projectcard";
import LayoutWrapper from "../wrappers/LayoutWrapper";

export default function FeaturedProjects() {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <LayoutWrapper className="bg-backgroundDark">
        {/* TITLE CONTENT */}
        <SectionBadge titleContent="PROJECTS" type="secondary" />
        <SectionTitle
          titleOne="Featured"
          titleTwo="Portfolio"
          paragraph="Built versatile projects, from AI-driven tools to full-stack applications"
          type="secondary"
        />
        {/* SECTION CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedProjects
            .filter((project) => project.isFeatured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>

        <div className="flex justify-center mt-8">
          <ButtonSecondaryFilled
            href="/projects"
            ariaLabel="View All Projects"
            className="w-56"
          >
            View All Projects
          </ButtonSecondaryFilled>
        </div>
      </LayoutWrapper>
    </>
  );
}
