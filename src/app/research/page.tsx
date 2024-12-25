import researches from "../_data/research.json";
import ResearchCard from "./_components/researchcard";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import TitleMedium from "../_components/ui/TitleMedium";

export default function Research() {
  return (
    <>
      <LayoutWrapper>
        <TitleLarge firstTitle="My" secondTitle="Research" isPrimary={true} />
        {/* Completed Research */}
        {researches.filter((research) => research.isPublished).length > 0 && (
          <div>
            <TitleMedium title="Completed Research" />
            <hr className="mb-2" />
            <div className="space-y-6">
              {researches
                .filter((research) => research.isPublished)
                .map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
            </div>
          </div>
        )}
        {/* Ongoing Research */}
        {researches.filter((research) => !research.isPublished).length > 0 && (
          <div className="mt-8">
            <TitleMedium title="Ongoing Research" />
            <hr className="mb-2" />
            <div className="space-y-6">
              {researches
                .filter((research) => !research.isPublished)
                .map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
            </div>
          </div>
        )}
      </LayoutWrapper>
    </>
  );
}
