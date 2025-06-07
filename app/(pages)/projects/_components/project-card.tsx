import { Projects } from "@/.velite";
import {
  headingVariants,
  paragraphVariants,
  TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Projects }) {
  return (
    <li className="group outline-primary/50 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once relative h-[300px] cursor-pointer overflow-hidden outline">
      <Link
        className="relative z-10 flex h-full w-full flex-col p-6"
        href={project.permalink}
      >
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
        <h2
          className={headingVariants({
            level: "h3",
            className: "truncate group-hover:underline",
          })}
        >
          {project.title}
        </h2>
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
            placeholder="blur"
            blurDataURL={project.thumbnail.blurDataURL}
            draggable={false}
            alt={project.title}
            title={project.title}
            className="bg-secondary/50 rounded-2xl object-cover object-top duration-300 md:brightness-75 md:group-hover:brightness-100"
          />
        </div>
      </Link>
    </li>
  );
}
