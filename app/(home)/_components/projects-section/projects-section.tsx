import { SectionWrapper } from "@/components/ui/wrappers";
import { SectionHeader } from "@/components/ui/section-header";
import ProjectsShowcase from "./projects-showcase";
import { siteNavigationMap } from "@/content/site-navigation";

export default function ProjectsSection() {
  return (
    <SectionWrapper
      innerClassName="space-y-4"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="I've been building a lot of things"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
        voluptas ipsam placeat delectus exercitationem tenetur magnam saepe qui
        quibusdam."
        linkText="View All Projects"
        linkHref={siteNavigationMap.PROJECTS.href}
      />

      <ProjectsShowcase />
    </SectionWrapper>
  );
}
