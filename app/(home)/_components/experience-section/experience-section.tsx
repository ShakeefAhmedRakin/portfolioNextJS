import { workExperiences } from "@/.velite";
import { SectionWrapper } from "@/components/ui/wrappers";
import { SectionHeader } from "@/components/ui/section-header";
import { siteNavigationMap } from "@/content/site-navigation";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn, sortJobsByDate } from "@/lib/utils";
import { containerVariants } from "@/components/ui/container-variants";
import {
  headingVariants,
  paragraphVariants,
  TypographyUnOrderedList,
} from "@/components/ui/typography";
import Link from "next/link";
import WorkDuration from "@/components/ui/work-duration";
import WorkDate from "@/components/ui/work-dates";

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

      <ul
        className={cn(
          ANIMATE_FADE_UP,
          "grid grid-cols-1 gap-4 lg:grid-cols-2",
        )}
      >
        {sortedWork.map((work) => (
          <li
            key={work.slug}
            className={cn(
              "space-y-1 px-4 pt-3 pb-4",
              containerVariants({ variant: "outlined" }),
            )}
          >
            <div className="flex justify-between">
              <WorkDuration work={work} />
              <WorkDate work={work} />
            </div>
            <h3
              className={headingVariants({
                level: "h4",
              })}
            >
              {work.position}
            </h3>
            {work.companyLink ? (
              <Link
                href={work.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${work.company} website`}
                aria-label={`View ${work.company} website`}
                className={headingVariants({
                  level: "h5",
                  weight: "light",
                  className: "underline underline-offset-2",
                })}
              >
                <h4 className="inline">{work.company}</h4>
              </Link>
            ) : (
              <h4
                className={headingVariants({
                  level: "h5",
                  weight: "light",
                })}
              >
                {work.company}
              </h4>
            )}
            <TypographyUnOrderedList
              level="small"
              className="text-foreground/65 mt-2"
            >
              {work.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </TypographyUnOrderedList>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
