import { SectionWrapper } from "@/components/ui/wrappers";
import { SectionHeader } from "@/components/ui/section-header";

import ResearchGrid from "./research-grid";
import { siteNavigationMap } from "@/content/site-navigation";

export default function ResearchSection() {
  return (
    <SectionWrapper
      innerClassName="space-y-4 relative"
      // wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="Some of my ongoing and published research"
        description="Discover my latest research projects that I've collaborated with esteemed colleagues and institutions"
        linkText="View All Research"
        linkHref={siteNavigationMap.RESEARCH.href}
      />

      <ResearchGrid />
    </SectionWrapper>
  );
}
