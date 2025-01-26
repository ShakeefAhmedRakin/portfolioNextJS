import { ButtonSecondaryFilled } from "../../ui/Buttons";
import { LiaNewspaperSolid } from "react-icons/lia";
import LayoutWrapper from "../../wrappers/LayoutWrapper";

import { FaArrowRight } from "react-icons/fa6";
import ResearchCards from "./_components/researchCards";
import SectionTitleLarge from "../sectionTitleLarge";
import SectionTitleMedium from "../sectionTitleMedium";

export default function FeaturedResearch() {
  return (
    <>
      <LayoutWrapper className="bg-backgroundDark">
        {/* SECTION TITLE */}
        <div className="text-center">
          <LiaNewspaperSolid className="text-secondary mx-auto text-6xl" />
          <SectionTitleLarge className="text-secondary">
            Research
          </SectionTitleLarge>
          <SectionTitleMedium>Completed & Ongoing</SectionTitleMedium>
          <hr className="my-2" />
          <p className="text-xs md:text-sm lg:text-lg text-text font-body mx-auto max-w-xl">
            {`Discover my latest research projects that I've collaborated with
          esteemed colleagues and institutions`}
          </p>
        </div>

        {/* SECTION CONTENT */}
        <ResearchCards />

        {/* GO TO PAGE BUTTON */}
        <div className="mt-5 flex gap-2 justify-center md:justify-between items-center">
          <div className="w-full flex-1 border-t h-fit hidden md:block"></div>
          <ButtonSecondaryFilled
            href="/research"
            ariaLabel="View Details"
            className="w-56"
          >
            View All Research
            <FaArrowRight></FaArrowRight>
          </ButtonSecondaryFilled>
        </div>
      </LayoutWrapper>
    </>
  );
}
