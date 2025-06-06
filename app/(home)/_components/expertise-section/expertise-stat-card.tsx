import { headingVariants, TypographyP } from "@/components/ui/typography";
import { expertiseContent } from "@/content/home/expertise-section";

export default function ExpertiseStatGrid() {
  return (
    <div className="intersect:animate-fade-up intersect-once intersect:animate-delay-200 animate-ease animate-duration-[1500ms] grid max-w-4xl grid-cols-2 gap-4 whitespace-nowrap lg:grid-cols-4">
      {expertiseContent.stats.map((stat, i) => (
        <ExpertiseStatCard key={i} {...stat} />
      ))}
    </div>
  );
}

interface ExpertiseStatCardProps {
  title: string;
  subtitle: string;
}

function ExpertiseStatCard({ title, subtitle }: ExpertiseStatCardProps) {
  return (
    <ul className="from-secondary/60 to-background border-primary/20 shadow-primary/10 flex-1 border bg-gradient-to-br p-4 shadow">
      <li>
        <span className={headingVariants({ level: "h5" })}>{title}</span>
        <TypographyP className="text-foreground/50" level="small">
          {subtitle}
        </TypographyP>
      </li>
    </ul>
  );
}
