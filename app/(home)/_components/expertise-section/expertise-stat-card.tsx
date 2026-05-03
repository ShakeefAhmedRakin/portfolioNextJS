import { paragraphVariants } from "@/components/ui/typography";
import { expertiseContent } from "@/content/home/expertise-section";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

export default function ExpertiseStatStrip() {
  return (
    <ul
      className={cn(
        ANIMATE_FADE_UP,
        paragraphVariants({ level: "small" }),
        "text-foreground/65 flex flex-wrap items-center gap-x-2 gap-y-1",
      )}
    >
      {expertiseContent.stats.map((stat, i) => (
        <Fragment key={`expertise-stat-${i}`}>
          {i > 0 && (
            <li aria-hidden="true" className="text-foreground/30">
              ·
            </li>
          )}
          <li>
            <Link
              href={stat.href}
              title={stat.ariaLabel}
              aria-label={stat.ariaLabel}
              className="hover:text-foreground duration-300"
            >
              {stat.label}
            </Link>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}
