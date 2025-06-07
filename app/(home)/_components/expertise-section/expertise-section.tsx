import { SectionWrapper } from "@/components/ui/wrappers";
import ExpertiseGrid from "./expertise-grid";
import ExpertiseStatGrid from "./expertise-stat-card";
import { expertiseContent } from "@/content/home/expertise-section";
import BackgroundGridOverlay from "../../../../components/ui/background-grid-overlay";
import { SectionHeader } from "@/components/ui/section-header";

export default function ExpertiseSection() {
  return (
    <SectionWrapper
      innerClassName="space-y-4 relative"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title={expertiseContent.title}
        description={expertiseContent.description}
        linkText="More About Me"
        linkHref="/about"
      />

      <ExpertiseStatGrid />

      <ExpertiseGrid />

      <BackgroundGridOverlay />
    </SectionWrapper>
  );
}
