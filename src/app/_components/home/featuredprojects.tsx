import Link from "next/link";
import ProjectCards from "../ui/projectcard";
import SectionBadge from "../ui/sectionbadge";
import SectionTitle from "../ui/sectiontitle";
import { IoIosArrowForward } from "react-icons/io";
import projects from "../../_data/projectIDs.json";
import { ButtonSecondaryFilled } from "../ui/Buttons";

export default function FeaturedProjects() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {projects.map((projects) => (
              <ProjectCards
                key={projects.id}
                projectTitle={projects.projectTitle}
                projectDescription={projects.projectDescription}
                projectTags={projects.projectTags}
                projectHref={projects.link}
              ></ProjectCards>
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
