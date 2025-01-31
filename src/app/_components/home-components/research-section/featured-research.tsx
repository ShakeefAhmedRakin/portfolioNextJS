import { LiaNewspaperSolid } from "react-icons/lia";
import LayoutWrapper from "../../wrappers/LayoutWrapper";
import ResearchCards from "./_components/researchCards";
import SectionTitleLarge from "../sectionTitleLarge";
import SectionTitleMedium from "../sectionTitleMedium";

export default function FeaturedResearch() {
  return (
    <>
      <LayoutWrapper className="bg-backgroundDark">
        {/* SECTION TITLE */}
        <div className="text-center">
          <LiaNewspaperSolid className="text-secondary mx-auto text-5xl" />
          <SectionTitleLarge className="text-secondary">
            Research
          </SectionTitleLarge>
          <SectionTitleMedium className="mb-4">
            Completed & Ongoing
          </SectionTitleMedium>
          <p className="text-xs md:text-sm lg:text-lg text-text font-body mx-auto max-w-xl">
            {`Discover my latest research projects that I've collaborated with
          esteemed colleagues and institutions`}
          </p>
        </div>

        {/* SECTION CONTENT */}
        <ResearchCards />
      </LayoutWrapper>
    </>
  );
}
