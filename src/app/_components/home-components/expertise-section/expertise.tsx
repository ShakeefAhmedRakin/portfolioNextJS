import LayoutWrapper from "../../wrappers/LayoutWrapper";
import SectionTitleLarge from "../sectionTitleLarge";
import SectionTitleMedium from "../sectionTitleMedium";
import ServiceCards from "./_components/service-cards";
import { LiaBuromobelexperte } from "react-icons/lia";

export default function Expertise() {
  return (
    <>
      <LayoutWrapper className="bg-background">
        {/* TITLE CONTENT */}
        <div className="text-center">
          <LiaBuromobelexperte className="text-secondary mx-auto text-5xl" />
          <SectionTitleLarge className="text-secondary">
            My Expertise
          </SectionTitleLarge>
          <SectionTitleMedium>
            Code that solves problems <br></br> one at a time.
          </SectionTitleMedium>
        </div>
        <hr className="my-3 md:my-5" />
        <ServiceCards />
      </LayoutWrapper>
    </>
  );
}
