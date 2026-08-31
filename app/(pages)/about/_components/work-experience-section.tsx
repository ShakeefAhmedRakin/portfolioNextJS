import { workExperiences } from "@/.velite";
import { headingVariants } from "@/components/ui/typography";
import { SectionWrapper } from "@/components/ui/wrappers";

import { ANIMATE_FADE_UP } from "@/lib/utils/animations";
import { cn, sortJobsByDate } from "@/lib/utils";
import { MDXContent } from "@/components/ui/mdx-content";
import { badgeVariants } from "@/components/ui/badge";
import { WorkExperienceListItem } from "@/components/ui/work-experience-list-item";

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
          <WorkExperienceListItem key={work.slug} work={work} id={work.slug}>
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
          </WorkExperienceListItem>
        ))}
      </ol>
    </SectionWrapper>
  );
}
