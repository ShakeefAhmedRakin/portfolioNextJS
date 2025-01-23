import { FaArrowRight } from "react-icons/fa6";
import awards from "../../_data/awards.json";
import { ButtonPrimaryOutline } from "../ui/Buttons";
import LayoutWrapper from "../wrappers/LayoutWrapper";
import Image from "next/image";

export default function FeaturedAchievements() {
  return (
    <>
      <LayoutWrapper className="bg-bg-backgroundDark">
        {/* TITLE CONTENT */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-x-16 gap-y-2 text-center md:text-left">
          <div className="flex-1 whitespace-nowrap">
            <h2 className="font-heading font-bold text-primary text-xl lg:text-4xl">
              Achievements
            </h2>
            <h3 className="font-heading font-bold text-base lg:text-xl text-text mt-2">
              Hackathons and Datathons
            </h3>
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-12 xl:gap-x-20 mt-10 px-10 md:px-0">
          {awards
            .filter((award) => award.isFeatured)
            .map((award, index) => (
              <div className="aspect-square relative" key={index}>
                <Image
                  key={index}
                  src={award.photo}
                  fill
                  draggable={false}
                  alt={award.title}
                ></Image>
              </div>
            ))}
        </div>
      </LayoutWrapper>
    </>
  );
}
