import LayoutWrapper from "@/app/_components/wrappers/LayoutWrapper";
import allResearch from "../../_data/research.json";
import TitleLarge from "@/app/_components/ui/TitleLarge";
import AuthorList from "./_components/authorList";
import JournalStatus from "./_components/journalStatus";
import PaperDetails from "./_components/paperDetails";
import { Metadata } from "next";
import { generateMetadataForResearchDetailsPage } from "@/app/_util/metadata/ResearchPage/ResearchDetailsPage/MetadataResearchDetailsPage";
import { SetSchemaResearchDetailsPage } from "@/app/_util/metadata/ResearchPage/ResearchDetailsPage/SetSchemaResearchDetailsPage";
import { notFound } from "next/navigation";
import { MetadataNotFoundPage } from "@/app/_util/metadata/NotFoundPage/MetaDataNotFoundPage";

export async function generateStaticParams() {
  return allResearch.map((research) => ({
    id: research.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const research = allResearch.find((research) => research.id === id);

  if (research) {
    return generateMetadataForResearchDetailsPage({ id });
  } else {
    return MetadataNotFoundPage;
  }
}

export default async function ResearchDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const research = allResearch.find((research) => research.id === id);

  if (!research) {
    return notFound();
  }

  return (
    <>
      <SetSchemaResearchDetailsPage id={research?.id} />
      <LayoutWrapper>
        <TitleLarge
          firstTitle={research.title}
          secondTitle=""
          isPrimary={true}
        ></TitleLarge>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex-1">
            <AuthorList
              authors={research.authors}
              journalOrOrgName={research?.journalOrOrg?.name}
            />
          </div>
          <div className="flex-1 flex flex-col">
            <JournalStatus
              journalOrOrg={research.journalOrOrg}
              status={research.status}
            />
            <PaperDetails
              keywords={research.keywords}
              researchLink={research.link}
              linkToPDF={research.linkToPDF}
              abstract={research.abstract}
            />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
