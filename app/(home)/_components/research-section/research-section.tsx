import { SectionWrapper } from "@/components/ui/wrappers";
import { SectionHeader } from "@/components/ui/section-header";

import ResearchGrid from "./research-grid";
import { siteNavigationMap } from "@/content/site-navigation";

export default function ResearchSection() {
  return (
    <SectionWrapper
      innerClassName="space-y-4"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="Papers I've co-authored"
        description="Papers I've co-authored with collaborators across multiple institutions."
        linkText="View All Research"
        linkHref={siteNavigationMap.RESEARCH.href}
      />

      <ResearchGrid />
    </SectionWrapper>
  );
}
