import { research } from "@/.velite";

import PageHeader from "@/components/ui/page-header";
import ResearchCard from "@/components/ui/research-card";

import { SectionWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/metadata/site-metadata";
import { sortResearchByDate } from "@/lib/utils";

import SetSchemaResearchListingPage from "@/metadata/schemas/schemaResearchListingPage";
import getMetadata from "@/metadata/utils/get-metadata";

export function generateMetadata() {
  return getMetadata(SiteMetadata.RESEARCH);
}

export default function ResearchListingPage() {
  return (
    <>
      <SetSchemaResearchListingPage />
      <PageHeader
        title="Research"
        subtitle="Discover my latest research projects that I've collaborated with esteemed colleagues and institutions"
      />
      <SectionWrapper
        wrapperClassName="pb-12 lg:pb-20 xl:pb-24 pt-6 xl:pt-8"
        padding={"header"}
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sortResearchByDate(research).map((paper) => (
            <ResearchCard paper={paper} key={paper.slug} />
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}
