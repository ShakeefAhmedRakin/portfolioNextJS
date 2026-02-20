import { workExperiences } from "@/.velite";
import { headingVariants } from "@/components/ui/typography";
import { SectionWrapper } from "@/components/ui/wrappers";

import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn, sortJobsByDate } from "@/lib/utils";
import Link from "next/link";
import WorkDuration from "../../../../components/ui/work-duration";
import { MDXContent } from "@/components/ui/mdx-content";
import WorkDate from "@/components/ui/work-dates";
import { badgeVariants } from "@/components/ui/badge";
import { containerVariants } from "@/components/ui/container-variants";

export default function WorkExperienceSection() {
  const sortedWork = sortJobsByDate(workExperiences);

  return (
    <SectionWrapper wrapperClassName="relative -my-8" id="experience">
      <h2
        className={cn(headingVariants({
          level: "h1",
        }), ANIMATE_FADE_UP)}
      >
        Work Experience
      </h2>
      <ol className={cn("md:border-primary/50 mt-4 space-y-6 py-2 md:ml-6 md:border-l", ANIMATE_FADE_UP)}>
        {sortedWork.map((work) => (
          <li
            key={work.slug}
            id={work.slug}
            className={cn(
              "relative px-4 pt-3 pb-4 md:ml-6",
              ANIMATE_FADE_UP,
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
            <div className="mt-2 ml-4">
              <MDXContent code={work.content} isSmall />
              <ul className="mt-4 flex flex-wrap">
                {work.tags.map((tag) => (
                  <li
                    key={`${work.company}-${tag}`}
                    className={badgeVariants({
                      variant: "outline",
                      className: "rounded-2xl",
                    })}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
