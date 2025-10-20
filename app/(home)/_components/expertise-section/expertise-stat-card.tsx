import { containerVariants } from "@/components/ui/containerVariants";
import { headingVariants, TypographyP } from "@/components/ui/typography";
import { expertiseContent } from "@/content/home/expertise-section";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ExpertiseStatGrid() {
  return (
    <ul className="intersect:animate-fade-up intersect-once intersect:animate-delay-200 animate-ease animate-duration-[1500ms] grid max-w-4xl grid-cols-2 gap-4 whitespace-nowrap lg:grid-cols-4">
      {expertiseContent.stats.map((stat, i) => (
        <li key={`expertise-stat-${i}`} className="w-full">
          <ExpertiseStatCard {...stat} />
        </li>
      ))}
    </ul>
  );
}

interface ExpertiseStatCardProps {
  title: string;
  subtitle: string;
  href: string;
  ariaLabel: string;
}

function ExpertiseStatCard({
  title,
  subtitle,
  href,
  ariaLabel,
}: ExpertiseStatCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:shadow-primary/30 flex flex-1 flex-col p-4 duration-300",
        containerVariants({ variant: "gradient" }),
      )}
      title={ariaLabel}
      aria-label={ariaLabel}
    >
      <span className={headingVariants({ level: "h5" })}>{title}</span>
      <TypographyP className="text-foreground/50" level="small">
        {subtitle}
      </TypographyP>
    </Link>
  );
}
