import Link from "next/link";
import allResearch from "../../../../_data/research.json";
import ResearchCard from "./../_components/researchCard";
import { FaArrowRight } from "react-icons/fa6";

export default function ResearchCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full mt-8">
      {allResearch
        .filter((research) => research.isFeatured)
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedDate).getTime() -
            new Date(a.lastUpdatedDate).getTime()
        )
        .slice(0, 3)
        .map((research) => (
          <ResearchCard key={research.title} research={research} />
        ))}
      <Link
        className="bg-gradient-to-br from-secondary via-secondary to-primary h-12 lg:h-full rounded-full lg:rounded-lg shadow hover:shadow-secondary duration-300 hover:cursor-pointer flex flex-row lg:flex-col items-center justify-center gap-3 font-heading text-white font-bold text-xs md:text-sm md:col-span-3 lg:col-span-1 col-span-1 lg:text-base text-center"
        href="/research"
        aria-label="View Details"
      >
        View All Research
        <FaArrowRight className="text-xs lg:text-2xl"></FaArrowRight>
      </Link>
    </div>
  );
}
