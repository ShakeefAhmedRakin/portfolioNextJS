import researches from "../_data/research.json";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import ResearchCard from "../_components/home-components/research-section/_components/researchCard";

export default function Research() {
  return (
    <>
      <LayoutWrapper>
        <TitleLarge firstTitle="My" secondTitle="Research" isPrimary={true} />
        <hr className="mb-4" />
        {/* Completed Research */}
        {researches.filter((research) => research.isPublished).length > 0 && (
          <div>
            {/* <TitleMedium title="Completed Research" /> */}
            <h2 className="bg-gradient-to-br from-primary to-secondary text-white py-3 px-5 rounded-lg font-heading font-bold text-base md:text-lg mb-4">
              Published Research
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
              {researches
                .filter((research) => research.isPublished)
                .sort(
                  (a, b) =>
                    new Date(b.lastUpdatedDate).getTime() -
                    new Date(a.lastUpdatedDate).getTime()
                )
                .map((research) => (
                  <ResearchCard key={research.id} research={research} />
                ))}
            </div>
          </div>
        )}
        {/* Ongoing Research */}
        {researches.filter((research) => !research.isPublished).length > 0 && (
          <div className="mt-8">
            <h2 className="bg-gradient-to-br from-primary to-secondary text-white py-3 px-5 rounded-lg font-heading font-bold text-base md:text-lg mb-4">
              Ongoing Research
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
              {researches
                .filter((research) => !research.isPublished)
                .sort(
                  (a, b) =>
                    new Date(b.lastUpdatedDate).getTime() -
                    new Date(a.lastUpdatedDate).getTime()
                )
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
