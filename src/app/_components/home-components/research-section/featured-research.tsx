import LayoutWrapper from "../../wrappers/LayoutWrapper";
import ResearchCards from "./_components/researchCards";
import SectionTitleLarge from "../sectionTitleLarge";
import SectionTitleMedium from "../sectionTitleMedium";
import { ButtonSecondaryOutline } from "../../ui/Buttons";
import { FaArrowRight } from "react-icons/fa";

export default function FeaturedResearch() {
  return (
    <>
      <LayoutWrapper className="bg-backgroundDark">
        {/* SECTION TITLE & GO TO PAGE BUTTON */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-x-16 gap-y-2 text-center md:text-left">
          <div className="flex-1 whitespace-nowrap">
            <SectionTitleLarge className="text-secondary">
              Research
            </SectionTitleLarge>
            <SectionTitleMedium> Completed & Ongoing</SectionTitleMedium>
            <hr className="my-2" />
            <ButtonSecondaryOutline
              href="/research"
              className="w-48 mt-2 max-h-10 hidden md:block"
              ariaLabel="Learn More About My Research"
            >
              Learn More <FaArrowRight></FaArrowRight>
            </ButtonSecondaryOutline>
          </div>
          <p className="text-xs md:text-sm lg:text-lg text-text font-body max-w-2xl w-full">
            {`Discover my latest research projects that I've collaborated with
          esteemed colleagues and institutions`}
          </p>
          <ButtonSecondaryOutline
            href="/research"
            className="w-48 mt-2 max-h-10 block md:hidden"
            ariaLabel="Learn More About My Research"
          >
            Learn More <FaArrowRight></FaArrowRight>
          </ButtonSecondaryOutline>
        </div>

        {/* SECTION CONTENT */}
        <ResearchCards />
      </LayoutWrapper>
    </>
  );
}
