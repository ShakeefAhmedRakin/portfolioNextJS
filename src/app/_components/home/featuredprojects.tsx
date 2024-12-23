import SectionBadge from "../ui/sectionbadge";
import SectionTitle from "../ui/sectiontitle";
import projects from "../../_data/projects.json";
import { ButtonSecondaryFilled } from "../ui/Buttons";
import ProjectCard from "../ui/projectcard";

export default function FeaturedProjects() {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <section className="bg-backgroundDark pb-32 px-2">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-8 lg:py-10 bg-backgroundDark">
          {/* TITLE CONTENT */}
          <SectionBadge titleContent="PROJECTS" type="secondary" />
          <SectionTitle
            titleOne="Featured"
            titleTwo="Portfolio"
            paragraph="Built versatile projects, from AI-driven tools to full-stack applications"
            type="secondary"
          />
          {/* SECTION CONTENT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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
        </div>
      </section>
    </>
  );
}
