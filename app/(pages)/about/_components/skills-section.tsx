import { headingVariants, paragraphVariants } from "@/components/ui/typography";
import { SectionWrapper } from "@/components/ui/wrappers";

import BackgroundGridOverlay from "@/components/ui/background-grid-overlay";
import { skillSets } from "@/content/skills/skills";
import Image from "next/image";

export default function SkillsSection() {
  return (
    <SectionWrapper wrapperClassName="relative -my-8" id="expertise">
      <h2
        className={headingVariants({
          level: "h1",
          className:
            "intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once",
        })}
      >
        Technical Expertise
      </h2>

      <div className="from-primary intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once my-4 h-[1px] bg-gradient-to-r to-transparent"></div>

      <ul className="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillSets.map((set) => (
          <li key={set.title} className="flex h-full flex-col">
            <h3
              className={headingVariants({
                level: "h2",
                weight: "light",
                className:
                  "intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once text-foreground/70 text-center",
              })}
            >
              {set.title}
            </h3>
            <ul className="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once from-secondary/60 to-background border-primary/20 shadow-primary/10 mt-4 flex h-full flex-wrap items-center justify-center gap-3 border bg-gradient-to-br p-5 shadow">
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
                  <h4
                    className={paragraphVariants({
                      level: "small",
                      className: "text-foreground/70",
                    })}
                  >
                    {skill.name}
                  </h4>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <BackgroundGridOverlay />
    </SectionWrapper>
  );
}
