import { achievements } from "@/.velite";

import PageHeader from "@/components/ui/page-header";
import {
  headingVariants,
  paragraphVariants,
  TypographyP,
} from "@/components/ui/typography";
import { SectionWrapper } from "@/components/ui/wrappers";
import SiteMetadata from "@/content/site-metadata";
import { formatDateString, sortAchievementsByDate } from "@/lib/utils";
import SetSchemaAchievementsListingPage from "@/metadata/schemas/schemaAchievementsListingPage";
import getMetadata from "@/metadata/utils/get-metadata";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function generateMetadata() {
  return getMetadata(SiteMetadata.ACHIEVEMENTS);
}

export default function AchievementsListingPage() {
  const sortedAchievements = sortAchievementsByDate(achievements);
  return (
    <>
      <SetSchemaAchievementsListingPage />
      <PageHeader
        title="Achievements"
        subtitle="All of my most recent notable achievements"
      />
      <SectionWrapper
        wrapperClassName="relative pb-12 lg:pb-20 xl:pb-24 pt-6 xl:pt-8"
        padding={"header"}
      >
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sortedAchievements.map((achievement) => (
            <li
              key={achievement.slug}
              className="group intersect:animate-fade-up shadow-primary/5 intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once min-h-[225px] shadow"
            >
              <Link
                href={achievement.permalink}
                title={achievement.title}
                aria-label={`View ${achievement.title} blog`}
                className="relative flex h-full cursor-pointer flex-col overflow-hidden p-4"
              >
                <Image
                  src={achievement.mainCover.src}
                  alt={achievement.title}
                  blurDataURL={achievement.mainCover.blurDataURL}
                  placeholder="blur"
                  fill
                  className="absolute inset-0 bg-cover bg-center object-cover brightness-25 transition duration-300 ease-in-out group-hover:brightness-45"
                ></Image>

                <div className="relative z-10 flex h-full flex-col">
                  <span
                    className={paragraphVariants({
                      level: "small",
                      className: "text-foreground/60 font-bold",
                    })}
                  >
                    {achievement.awardTitle}
                  </span>
                  <h2
                    className={headingVariants({
                      level: "h4",
                      className: "mb-3 line-clamp-2",
                    })}
                  >
                    {achievement.title}
                  </h2>
                  <TypographyP
                    level="small"
                    className="text-foreground/80 mb-3 line-clamp-3 text-shadow-2xs text-shadow-black"
                  >
                    {achievement.excerpt}
                  </TypographyP>
                  <div className="flex flex-1 items-end">
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={paragraphVariants({
                          level: "small",
                          className: "text-foreground/60 font-bold",
                        })}
                      >
                        {formatDateString(achievement.date)}
                      </span>
                      <ChevronRight
                        size={18}
                        className="text-foreground/60 opacity-0 duration-300 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}
