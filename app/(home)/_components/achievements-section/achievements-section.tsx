import { SectionWrapper } from "@/components/ui/wrappers";
// import BackgroundGridOverlay from "../../../../components/ui/background-grid-overlay";
import { achievements } from "@/.velite";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

export default function AchievementsSection() {
  const featuredAchievements = achievements
    .filter((achievement) => achievement.isFeatured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <SectionWrapper
      innerClassName="space-y-4 relative"
      // wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="Some of my titles"
        description="During my undergraduate years, I actively participated in multiple
        competitive events, including hackathons and datathons, where I
        collaborated with teams to develop practical solutions to real-world
        problems."
        linkText="Learn More"
        linkHref="/achievements"
      />

      <ul className="intersect:animate-delay-200 intersect-once intersect:animate-fade-up animate-ease animate-duration-[1500ms] grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {featuredAchievements.map((achievement) => (
          <li
            key={achievement.slug}
            className="flex items-center justify-center"
          >
            <Image
              src={achievement.awardCover.src}
              width={110}
              draggable={false}
              height={110}
              placeholder="blur"
              blurDataURL={achievement.awardCover.blurDataURL}
              alt={achievement.awardTitle}
              title={achievement.awardTitle}
            />
          </li>
        ))}
      </ul>

      {/* <BackgroundGridOverlay /> */}
    </SectionWrapper>
  );
}
