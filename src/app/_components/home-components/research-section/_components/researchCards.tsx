import allResearch from "../../../../_data/research.json";
import ResearchCard from "./../_components/researchCard";

export default function ResearchCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5 w-full mt-8">
      {allResearch
        .filter((research) => research.isFeatured)
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedDate).getTime() -
            new Date(a.lastUpdatedDate).getTime()
        )
        .map((research) => (
          <ResearchCard key={research.title} research={research} />
        ))}
    </div>
  );
}
