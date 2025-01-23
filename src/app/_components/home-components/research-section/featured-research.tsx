import { ButtonPrimaryFilled } from "../../ui/Buttons";
import { LiaNewspaperSolid } from "react-icons/lia";
import LayoutWrapper from "../../wrappers/LayoutWrapper";
import research from "../../../_data/research.json";
import ResearchCard from "./_components/researchCard";

export default function FeaturedResearch() {
  return (
    <>
      <LayoutWrapper className="bg-backgroundDark">
        {/* TITLE CONTENT */}
        <LiaNewspaperSolid className="text-secondary mx-auto text-6xl" />
        <h2 className="font-heading font-bold text-secondary text-center text-xl lg:text-4xl">
          Research
        </h2>
        <h3 className="font-heading font-bold text-base text-center lg:text-xl text-text mt-2">
          Completed & Ongoing
        </h3>
        <hr className="my-2" />
        <p className="text-xs md:text-sm lg:text-lg text-text font-body text-center mx-auto max-w-xl">
          {`Discover my latest research projects that I've collaborated with
          esteemed colleagues and institutions`}
        </p>
        {/* SECTION CONTENT */}
        <div className="flex justify-center w-full items-center flex-col mt-8">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 w-full">
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
