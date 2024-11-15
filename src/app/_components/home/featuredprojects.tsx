import Link from "next/link";
import ProjectCards from "../ui/projectcard";
import SectionBadge from "../ui/sectionbadge";
import SectionTitle from "../ui/sectiontitle";
import { IoIosArrowForward } from "react-icons/io";
import projects from "../../_data/projectIDs.json";

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

          <div className="flex justify-center">
            <Link href="/projects" className="mt-8 md:mt-8">
              <button className="btn btn-sm lg:btn-md bg-transparent px-7 md:px-9 text-[9px] lg:text-base text-secondary border-secondary rounded-full shadow-none hover:bg-secondary-lighter hover:border-secondary relative group">
                View All Projects
                <IoIosArrowForward className="absolute right-2 text-lg opacity-0 group-hover:opacity-100 duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
