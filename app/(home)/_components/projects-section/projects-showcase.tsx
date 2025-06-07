import {
  paragraphVariants,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";
import { projects } from "@/.velite";

export default function ProjectsShowcase() {
  const item = projects[0];
  const items = Array.from({ length: 5 }).map((_, i) => ({
    ...item,
    slug: `${item.slug}-${i + 1}`,
  }));

  const chunks = [];
  let i = 0;
  let toggle = true;

  while (i < items.length) {
    const size = toggle ? 3 : 2;
    chunks.push(items.slice(i, i + size));
    i += size;
    toggle = !toggle;
  }

  return (
    <div className="space-y-4">
      {chunks.map((chunk, idx) => (
        <div
          key={idx}
          className={`intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once grid gap-4 ${chunk.length === 3 ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"}`}
        >
          {chunk.map((project, i) => (
            <div
              key={i}
              className="group outline-primary/50 relative h-[300px] cursor-pointer overflow-hidden p-6 outline"
            >
              <div className="relative z-10 flex h-full w-full flex-col">
                <div className="flex justify-between gap-2">
                  <span
                    className={paragraphVariants({
                      className: "text-foreground/60 truncate",
                      level: "small",
                    })}
                  >
                    {project.category}
                  </span>
                  <span
                    className={paragraphVariants({
                      className: "text-foreground/60 truncate",
                      level: "small",
                    })}
                  >
                    {project.isOngoing ? (
                      <span>ONGOING</span>
                    ) : (
                      <span>{project.date}</span>
                    )}
                  </span>
                </div>
                <TypographyH3 className="truncate group-hover:underline">
                  {project.title}
                </TypographyH3>
                <TypographyP
                  className="text-foreground/65 truncate group-hover:underline"
                  level="small"
                >
                  {project.subTitle}
                </TypographyP>
                <div className="relative mt-2 flex-1 rounded-2xl duration-300 md:-bottom-10 md:mt-0 md:group-hover:-bottom-0 md:group-hover:mt-4">
                  <Image
                    src={project.thumbnail.src}
                    fill
                    priority
                    draggable={false}
                    alt="test"
                    className="bg-secondary/50 rounded-2xl object-cover object-top duration-300 md:brightness-75 md:group-hover:brightness-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
