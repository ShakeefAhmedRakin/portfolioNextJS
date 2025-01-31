import { FaArrowRight } from "react-icons/fa6";
import { ButtonPrimaryOutline } from "../../ui/Buttons";
import LayoutWrapper from "../../wrappers/LayoutWrapper";
import AchievementsCards from "./_components/achievementsCards";
import SectionTitleLarge from "../sectionTitleLarge";
import SectionTitleMedium from "../sectionTitleMedium";

export default function FeaturedAchievements() {
  return (
    <>
      <LayoutWrapper className="bg-backgroundDark">
        {/* SECTION TITLE & GO TO PAGE BUTTON */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-x-16 gap-y-2 text-center md:text-left">
          <div className="flex-1 whitespace-nowrap">
            <SectionTitleLarge className="text-primary">
              Achievements
            </SectionTitleLarge>
            <SectionTitleMedium>Hackathons and Datathons</SectionTitleMedium>
            <hr className="my-2" />
            <ButtonPrimaryOutline
              href="/achievements"
              className="w-48 mt-2 max-h-10 hidden md:block"
              ariaLabel="Learn More About My Achievements"
            >
              Learn More <FaArrowRight></FaArrowRight>
            </ButtonPrimaryOutline>
          </div>
          <p className="text-xs md:text-sm lg:text-lg text-text font-body max-w-2xl w-full">
            During my undergraduate years, I actively participated in multiple
            competitive events, including hackathons and datathons, where I
            collaborated with teams to develop practical solutions to real-world
            problems.
          </p>
          <ButtonPrimaryOutline
            href="/achievements"
            className="w-48 mt-2 max-h-10 block md:hidden"
            ariaLabel="Learn More About My Achievements"
          >
            Learn More <FaArrowRight></FaArrowRight>
          </ButtonPrimaryOutline>
        </div>
        {/* SECTION CONTENT */}
        <AchievementsCards />
      </LayoutWrapper>
    </>
  );
}
