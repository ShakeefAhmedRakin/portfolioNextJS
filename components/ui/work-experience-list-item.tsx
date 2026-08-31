import { ReactNode } from "react";
import { Work } from "@/.velite";
import { cn } from "@/lib/utils";
import { ANIMATE_FADE_UP } from "@/lib/utils/animations";
import { containerVariants } from "@/components/ui/container-variants";
import { headingVariants } from "@/components/ui/typography";
import Link from "next/link";
import WorkDuration from "@/components/ui/work-duration";
import WorkDate from "@/components/ui/work-dates";

export function WorkExperienceListItem({
  work,
  id,
  children,
}: {
  work: Work;
  id?: string;
  children: ReactNode;
}) {
  return (
    <li
      id={id}
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
      {children}
    </li>
  );
}
