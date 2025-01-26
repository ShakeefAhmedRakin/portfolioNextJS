import LayoutWrapper from "@/app/_components/wrappers/LayoutWrapper";
import allResearch from "../../_data/research.json";
import TitleLarge from "@/app/_components/ui/TitleLarge";
import TitleMedium from "@/app/_components/ui/TitleMedium";
import AuthorList from "./_components/authorList";
import JournalStatus from "./_components/journalStatus";
import PaperDetails from "./_components/paperDetails";

export async function generateStaticParams() {
  return allResearch.map((research) => ({
    id: research.id,
  }));
}
export default async function ResearchDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const research = allResearch.find((research) => research.id === id);

  if (!research) {
    return (
      <LayoutWrapper>
        <h1>NOT FOUND</h1>
      </LayoutWrapper>
    );
  }

  return (
    <>
      <LayoutWrapper>
        <TitleLarge
          firstTitle="My"
          secondTitle="Research"
          isPrimary={true}
        ></TitleLarge>
        <TitleMedium title={research.title}></TitleMedium>

        <hr className="my-2" />

        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex-1">
            <AuthorList authors={research.authors} />
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
