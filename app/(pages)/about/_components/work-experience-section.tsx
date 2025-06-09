import { workExperiences } from "@/.velite";
import { headingVariants } from "@/components/ui/typography";
import { SectionWrapper } from "@/components/ui/wrappers";

import { getSortedJobs } from "@/lib/utils";
import Link from "next/link";
import WorkDuration from "../../../../components/ui/work-duration";
import { MDXContent } from "@/components/ui/mdx-content";
import WorkDate from "@/components/ui/work-dates";
import { badgeVariants } from "@/components/ui/badge";
import BackgroundGridOverlay from "@/components/ui/background-grid-overlay";

export default function WorkExperienceSection() {
  const sortedWork = getSortedJobs(workExperiences);

  return (
    <SectionWrapper wrapperClassName="relative -my-8" id="experience">
      <h2
        className={headingVariants({
          level: "h1",
          className:
            "intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once",
        })}
      >
        Work Experience
      </h2>
      <ol className="md:border-primary/50 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once mt-4 space-y-5 py-2 md:ml-6 md:border-l">
        {sortedWork.map((work) => (
          <li
            key={work.slug}
            id={work.slug}
            className="border-primary/50 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once relative border px-4 pt-3 pb-4 md:ml-6"
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
                  className: "hover:underline",
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
              <ul className="mt-4 flex">
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
      <BackgroundGridOverlay />
    </SectionWrapper>
  );
}
