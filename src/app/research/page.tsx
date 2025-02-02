import researches from "../_data/research.json";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import { Metadata } from "next";
import { MetadataResearchPage } from "../_util/metadata/ResearchPage/MetadataResearchPage";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SetSchemaResearchPage } from "../_util/metadata/ResearchPage/SetSchemaResearchPage";

export function generateMetadata(): Metadata {
  return MetadataResearchPage;
}
export default function ResearchPage() {
  return (
    <>
      <SetSchemaResearchPage />
      <LayoutWrapper>
        <TitleLarge firstTitle="My" secondTitle="Research" isPrimary={true} />
        <hr className="mb-4" />
        {researches
          .sort((a, b) => {
            if (a.isPublished === b.isPublished) {
              return (
                new Date(b.lastUpdatedDate).getTime() -
                new Date(a.lastUpdatedDate).getTime()
              );
            }
            return a.isPublished ? -1 : 1;
          })
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
                <h2 className="font-body group-hover:underline group-hover:text-primary font-medium text-text text-xs md:text-base">
                  {research.title}{" "}
                  <FaArrowRight className="inline mb-0.5 text-[9px]"></FaArrowRight>
                </h2>
                <p className="text-[10px] md:text-xs font-body text-text line-clamp-2 my-1">
                  {research.abstract}
                </p>

                <span className="font-body text-text font-semibold opacity-50 text-[9px] md:text-xs my-1 flex items-center gap-2">
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
              <hr className="my-4" />
            </div>
          ))}
      </LayoutWrapper>
    </>
  );
}
