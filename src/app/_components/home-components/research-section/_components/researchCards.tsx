import Link from "next/link";
import allResearch from "../../../../_data/research.json";
import { FaArrowRight } from "react-icons/fa6";

export default function ResearchCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full mt-8">
      {allResearch
        .filter((research) => research.isFeatured)
        .sort(
          (a, b) =>
            new Date(b.lastUpdatedDate).getTime() -
            new Date(a.lastUpdatedDate).getTime()
        )
        .map((research) => (
          <div key={research.id}>
            <Link
              href={`/research/${research.id}`}
              aria-label={`View ${research.title}`}
              title={`View ${research.title}`}
              className="group"
            >
              <span
                className={`text-[10px] font-heading font-bold uppercase py-0.5 px-1.5 bg-backgroundDark rounded-full w-fit -ml-1.5`}
                style={{ color: research.status.color }}
              >
                {research.status.label}
              </span>
              <h4 className="font-body group-hover:underline group-hover:text-primary line-clamp-2 font-medium text-text text-xs md:text-base">
                {research.title}{" "}
                <FaArrowRight className="inline mb-0.5 text-[9px]"></FaArrowRight>
              </h4>
              <p className="text-[10px] md:text-xs font-body text-text line-clamp-4 my-1">
                {research.abstract}
              </p>

              <span className="font-body text-text font-semibold opacity-50 text-[9px] my-1 flex items-center gap-2">
                {research.journalOrOrg && (
                  <span>
                    • {`  `}
                    {research.journalOrOrg.name}
                  </span>
                )}
                <span>
                  • {`  `}
                  {new Date(research?.lastUpdatedDate).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </span>
              </span>
            </Link>
          </div>
        ))}
      {/* <Link
        className="bg-gradient-to-br from-secondary via-secondary to-primary h-12 lg:h-full rounded-full lg:rounded-lg shadow hover:shadow-secondary duration-300 hover:cursor-pointer flex flex-row lg:flex-col items-center justify-center gap-3 font-heading text-white font-bold text-xs md:text-sm md:col-span-3 lg:col-span-1 col-span-1 lg:text-base text-center"
        href="/research"
        aria-label="View Details"
      >
        View All Research
        <FaArrowRight className="text-xs lg:text-2xl"></FaArrowRight>
      </Link> */}
    </div>
  );
}
