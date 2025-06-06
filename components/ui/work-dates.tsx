import { Work } from "@/.velite";
import { paragraphVariants } from "@/components/ui/typography";
import { getJobStartEndDateString } from "@/lib/utils";

export default function WorkDate({ work }: { work: Work }) {
  return (
    <span
      className={paragraphVariants({
        level: "small",
        className: "text-foreground/50 font-bold",
      })}
    >
      {getJobStartEndDateString(work.startDate, work.endDate)}
    </span>
  );
}
