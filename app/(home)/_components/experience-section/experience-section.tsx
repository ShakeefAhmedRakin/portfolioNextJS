import { workExperiences } from "@/.velite";
import { SectionWrapper } from "@/components/ui/wrappers";
import { SectionHeader } from "@/components/ui/section-header";
import { siteNavigationMap } from "@/content/site-navigation";
import { ANIMATE_FADE_UP } from "@/lib/utils/animations";
import { cn, sortJobsByDate } from "@/lib/utils";
import { TypographyUnOrderedList } from "@/components/ui/typography";
import { WorkExperienceListItem } from "@/components/ui/work-experience-list-item";

export default function ExperienceSection() {
  const sortedWork = sortJobsByDate(workExperiences);

  return (
    <SectionWrapper
      innerClassName="space-y-4"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="Where I've worked"
        description="Professional experience building production software across web, mobile, desktop, and AI."
        linkText="View Full Experience"
        shortLinkText="View Full"
        linkHref={`${siteNavigationMap.ABOUT.href}#experience`}
      />

      <ol
        className={cn(
          "md:border-primary/50 mt-4 space-y-6 py-2 md:ml-6 md:border-l",
          ANIMATE_FADE_UP,
        )}
      >
        {sortedWork.map((work) => (
          <WorkExperienceListItem key={work.slug} work={work}>
            <TypographyUnOrderedList
              level="small"
              className="text-foreground/65 mt-2 ml-4"
            >
              {work.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </TypographyUnOrderedList>
          </WorkExperienceListItem>
        ))}
      </ol>
    </SectionWrapper>
  );
}
