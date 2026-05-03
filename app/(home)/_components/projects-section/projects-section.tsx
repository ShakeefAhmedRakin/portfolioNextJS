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
        title="Things I've built"
        description="A showcase of my completed and ongoing work across web, desktop, mobile, and machine learning."
        linkText="View All Projects"
        linkHref={siteNavigationMap.PROJECTS.href}
      />

      <ProjectsShowcase />
    </SectionWrapper>
  );
}
