import { SectionWrapper } from "@/components/ui/wrappers";
import { achievements } from "@/.velite";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { siteNavigationMap } from "@/content/site-navigation";
import { ANIMATE_FADE_UP } from "@/lib/utils/animations";
import { cn, sortAchievementsByDate } from "@/lib/utils";

export default function AchievementsSection() {
  const featuredAchievements = sortAchievementsByDate(
    achievements.filter((achievement) => achievement.isFeatured),
  );

  return (
    <SectionWrapper
      innerClassName="space-y-4"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="Hackathons and awards"
        description="Hackathons, datathons, and competitions from my undergrad years."
        linkText="View All Achievements"
        shortLinkText="View All"
        linkHref={siteNavigationMap.ACHIEVEMENTS.href}
      />

      <ul className={cn(ANIMATE_FADE_UP, "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6")}>
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
    </SectionWrapper>
  );
}
