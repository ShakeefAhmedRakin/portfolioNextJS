import { containerVariants } from "@/components/ui/container-variants";
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
        className={cn(headingVariants({
          level: "h1",
        }), ANIMATE_FADE_UP)}
      >
        Technical Expertise
      </h2>

      <ul className={cn("md:border-primary/50 mt-4 grid grid-cols-1 gap-6 py-2 md:ml-6 md:grid-cols-2 md:border-l md:pl-6", ANIMATE_FADE_UP)}>
        {skillSets.map((set) => (
          <li
            key={set.title}
            className={cn(
              ANIMATE_FADE_UP,
              containerVariants({ variant: "clear" }),
            )}
          >
            <h3
              className={headingVariants({
                level: "h4",
                weight: "light",
                className: "mt-5 text-center",
              })}
            >
              {set.title}
            </h3>
            <ul className="flex flex-wrap justify-center gap-6 p-5">
              {set.skills.map((skill) => (
                <li
                  key={`${skill.name}-img`}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <div className="from-primary to-primary/80 relative aspect-square h-12 w-12 rounded-full bg-gradient-to-br p-1">
                    <Image
                      src={skill.image}
                      alt={`${skill.name}-img`}
                      width={48}
                      height={48}
                      draggable={false}
                      className="rounded-full p-0.5"
                      title={skill.name}
                    />
                  </div>
                  <p
                    className={paragraphVariants({
                      level: "small",
                      className: "text-foreground/70",
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
