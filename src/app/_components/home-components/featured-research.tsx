import { ButtonPrimaryFilled } from "../ui/Buttons";
import SectionBadge from "./sectionbadge";
import SectionTitle from "./sectiontitle";
import LayoutWrapper from "../wrappers/LayoutWrapper";
import research from "../../_data/research.json";
import ResearchCard from "./researchCard";

export default function FeaturedResearch() {
  return (
    <>
      <LayoutWrapper className="bg-background">
        {/* TITLE CONTENT */}
        <SectionBadge titleContent="Research" type="primary" />
        <SectionTitle
          titleOne="Academic"
          titleTwo="Contributions"
          paragraph="A collection of some of my ongoing and finalized research efforts"
          type="primary"
        />

        {/* SECTION CONTENT */}
        <div className="flex justify-center w-full items-center flex-col">
          <div className="grid grid-cols-2 gap-1 md:grid-cols-2 md:gap-2 w-full">
            {research
              .filter((research) => research.isFeatured)
              .map((research) => (
                <ResearchCard key={research.title} research={research} />
              ))}
          </div>
          <div className="mt-10">
            <ButtonPrimaryFilled
              href="/research"
              ariaLabel="View Details"
              className="w-56"
            >
              Learn More
            </ButtonPrimaryFilled>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
