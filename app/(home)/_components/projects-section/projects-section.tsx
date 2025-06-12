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
        description="A showcase of my completed and ongoing projects across web, desktop, mobile, and machine learning. Built with modern tools to solve real-world problems."
        linkText="View All Projects"
        linkHref={siteNavigationMap.PROJECTS.href}
      />

      <ProjectsShowcase />
    </SectionWrapper>
  );
}
