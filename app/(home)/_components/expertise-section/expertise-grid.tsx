import { containerVariants } from "@/components/ui/containerVariants";
import {
  TypographyH3,
  TypographyUnOrderedList,
  TypographyP,
} from "@/components/ui/typography";
import { expertiseContent } from "@/content/home/expertise-section";
import { cn } from "@/lib/utils";

export default function ExpertiseGrid() {
  return (
    <>
      <div className="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once flex flex-col gap-4 lg:flex-row">
        {expertiseContent.expertiseGroupOne.map((feature, i) => (
          <ExpertiseCard key={i} {...feature} />
        ))}
      </div>
      <div className="intersect:animate-fade-up animate-ease intersect:animate-delay-200 animate-duration-[1500ms] intersect-once mt-4 flex flex-col gap-4 lg:flex-row">
        {expertiseContent.expertiseGroupTwo.map((feature, i) => (
          <ExpertiseCard key={i} {...feature} />
        ))}
      </div>
    </>
  );
}

interface ExpertiseCardProps {
  title: string;
  description: string;
  points: string[];
  className?: string;
  icon: React.ReactNode;
}

function ExpertiseCard({
  title,
  description,
  points,
  className = "",
  icon,
}: ExpertiseCardProps) {
  return (
    <div
      className={cn(
        `relative min-h-[300px] space-y-1.5 overflow-hidden p-8 xl:min-h-[400px] ${className}`,
        containerVariants({ variant: "outlined" }),
      )}
    >
      <TypographyH3>{title}</TypographyH3>
      <TypographyP className="text-foreground/65">{description}</TypographyP>
      <TypographyUnOrderedList className="text-foreground/65">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </TypographyUnOrderedList>
      <div className="absolute -bottom-30 left-0 flex h-full w-full justify-end text-[400px] opacity-10 md:-bottom-20 lg:-bottom-20 xl:-bottom-40">
        {icon}
      </div>
    </div>
  );
}
