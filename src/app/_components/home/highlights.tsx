import AwardCard from "../ui/awardcard";
import SectionBadge from "../ui/sectionbadge";
import SectionTitle from "../ui/sectiontitle";
import awards from "../../_data/awards.json";
import { ButtonPrimaryFilled } from "../ui/Buttons";

export default function Highlights() {
  return (
    <>
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-8 lg:py-14">
          {/* TITLE CONTENT */}
          <SectionBadge titleContent="AWARDS" type="primary" />
          <SectionTitle
            titleOne="Tech Solutions"
            titleTwo="Hackathons and Datathons"
            paragraph="Engaged in creating practical solutions across numerous competitive events"
            type="primary"
          />

          {/* SECTION CONTENT */}
          <div className="flex justify-center w-full items-center flex-col">
            <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2 w-full">
              {awards
                .filter((award) => award.isFeatured)
                .map((award) => (
                  <AwardCard
                    key={award.title}
                    awardPhoto={award.photo}
                    awardDescription={award.position}
                    awardTitle={award.title}
                  />
                ))}
            </div>
            <div className="mt-10">
              <ButtonPrimaryFilled
                href="/achievements"
                ariaLabel="View My Achievements"
                className="w-56"
              >
                View All Achievements
              </ButtonPrimaryFilled>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
