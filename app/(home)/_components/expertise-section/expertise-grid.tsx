import { containerVariants } from "@/components/ui/container-variants";
import {
  headingVariants,
  TypographyUnOrderedList,
} from "@/components/ui/typography";
import { expertiseContent } from "@/content/home/expertise-section";
import { cn } from "@/lib/utils";
import { ANIMATE_FADE_UP } from "@/lib/animations";

export default function ExpertiseGrid() {
  return (
    <div
      className={cn(ANIMATE_FADE_UP, "grid grid-cols-1 gap-4 md:grid-cols-3")}
    >
      {expertiseContent.expertise.map((feature, i) => (
        <ExpertiseCard key={i} {...feature} />
      ))}
    </div>
  );
}

interface ExpertiseCardProps {
  title: string;
  points: string[];
  icon: React.ReactNode;
}

function ExpertiseCard({ title, points, icon }: ExpertiseCardProps) {
  return (
    <div
      className={cn(
        "relative space-y-2 overflow-hidden p-6",
        containerVariants({ variant: "outlined" }),
      )}
    >
      <h3 className={headingVariants({ level: "h4" })}>{title}</h3>
      <TypographyUnOrderedList className="text-foreground/65">
        {points.map((point, i) => (
          <li key={i} className="!text-xs">
            {point}
          </li>
        ))}
      </TypographyUnOrderedList>
      <div className="pointer-events-none absolute -bottom-20 left-0 flex h-full w-full justify-end text-[300px] opacity-10">
        {icon}
      </div>
    </div>
  );
}
