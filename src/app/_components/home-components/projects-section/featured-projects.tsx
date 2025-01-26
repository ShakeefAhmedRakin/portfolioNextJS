import projects from "../../../_data/projects.json";
import { ButtonSecondaryFilled } from "../../ui/Buttons";

import { FaArrowRight } from "react-icons/fa6";
import ProjectCarousel from "./_components/project-carousel";
import SectionTitleLarge from "../sectionTitleLarge";
import SectionTitleMedium from "../sectionTitleMedium";

export default function FeaturedProjects() {
  const sortedProjects = projects
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((project) => project.isFeatured);

  return (
    <>
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16 lg:py-20">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-x-16 gap-y-2 text-center md:text-left">
            <div className="flex-1 whitespace-nowrap">
              <SectionTitleLarge className="text-secondary">
                Projects
              </SectionTitleLarge>
              <SectionTitleMedium>Featured Side Projects</SectionTitleMedium>
            </div>
            <ButtonSecondaryFilled
              href="/projects"
              className="w-52 max-h-8 md:max-h-none"
              ariaLabel="View All My Projects"
            >
              View All Projects <FaArrowRight></FaArrowRight>
            </ButtonSecondaryFilled>
          </div>
          <hr className="my-4" />
        </div>
        <ProjectCarousel projects={sortedProjects} />
      </section>
    </>
  );
}
