import { SectionWrapper } from "@/components/ui/wrappers";
import ExpertiseGrid from "./expertise-grid";
import ExpertiseStatGrid from "./expertise-stat-card";
import { expertiseContent } from "@/content/home/expertise-section";
import { SectionHeader } from "@/components/ui/section-header";
import { siteNavigationMap } from "@/content/site-navigation";

export default function ExpertiseSection() {
  return (
    <SectionWrapper
      innerClassName="space-y-4"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title={expertiseContent.title}
        description={expertiseContent.description}
        linkText="More About Me"
        linkHref={siteNavigationMap.ABOUT.href}
      />

      <ExpertiseStatGrid />

      <ExpertiseGrid />
    </SectionWrapper>
  );
}
