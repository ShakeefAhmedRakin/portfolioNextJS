import { headingVariants, paragraphVariants } from "@/components/ui/typography";
import { SectionWrapper } from "@/components/ui/wrappers";

import { skillSets } from "@/content/skills/skills";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <SectionWrapper wrapperClassName="relative -my-8" id="expertise">
      <h2
        className={cn(
          headingVariants({
            level: "h1",
          }),
          ANIMATE_FADE_UP,
        )}
      >
        Technical Expertise
      </h2>

      <ul
        className={cn(
          "md:border-primary/50 mt-4 grid grid-cols-1 gap-4 py-2 md:ml-6 md:grid-cols-1 md:border-l md:pl-6",
          ANIMATE_FADE_UP,
        )}
      >
        {skillSets.map((set) => (
          <li key={set.title}>
            <h3
              className={headingVariants({
                level: "h4",
                weight: "light",
              })}
            >
              {set.title}
            </h3>
            <ul className="flex flex-wrap gap-x-2 gap-y-3 py-3">
              {set.skills.map((skill) => (
                <li
                  key={`${skill.name}-img`}
                  title={skill.name}
                  className="border-primary/30 bg-primary/5 pointer-events-none flex items-center gap-1.5 rounded-full border py-1 pr-3 pl-1"
                >
                  <div className="from-primary to-primary/80 relative aspect-square h-7 w-7 shrink-0 rounded-full bg-gradient-to-br p-0.5">
                    <Image
                      src={skill.image}
                      alt={`${skill.name}-img`}
                      width={28}
                      height={28}
                      draggable={false}
                      className="rounded-full p-0.5"
                      title={skill.name}
                    />
                  </div>
                  <p
                    className={paragraphVariants({
                      level: "small",
                      className: "text-foreground/80 leading-none",
                    })}
                  >
                    {skill.name}
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
