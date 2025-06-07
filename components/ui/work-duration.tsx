"use client";
import { Work } from "@/.velite";
import { paragraphVariants } from "@/components/ui/typography";
import { getJobDurationString } from "@/lib/utils";

export default function WorkDuration({ work }: { work: Work }) {
  return (
    <span
      className={paragraphVariants({
        level: "small",
        className: "text-foreground/50 font-bold",
      })}
    >
      {getJobDurationString(work.startDate)}
    </span>
  );
}
