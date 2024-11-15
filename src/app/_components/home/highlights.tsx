import Link from "next/link";
import AwardCard from "../ui/awardcard";
import SectionBadge from "../ui/sectionbadge";
import SectionTitle from "../ui/sectiontitle";
import { IoIosArrowForward } from "react-icons/io";
import awards from "../../_data/awards.json";

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
            <Link href="/achievements" className="mt-8 md:mt-16">
              <button className="btn btn-sm lg:btn-md bg-transparent px-7 md:px-9 text-[9px] lg:text-base text-primary border-primary rounded-full shadow-none hover:bg-primary-lighter hover:border-primary relative group">
                View More Information
                <IoIosArrowForward className="absolute right-2 text-lg opacity-0 group-hover:opacity-100 duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
