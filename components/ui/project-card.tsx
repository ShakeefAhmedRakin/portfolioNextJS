import { Projects } from "@/.velite";
import {
  headingVariants,
  paragraphVariants,
  TypographyP,
} from "@/components/ui/typography";
import { cn, formatDateString } from "@/lib/utils";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";
import { badgeVariants } from "./badge";
import { containerVariants } from "./container-variants";

export default function ProjectCard({
  project,
  isHomePage = false,
}: {
  project: Projects;
  isHomePage?: boolean;
}) {
  return (
    <li
      className={cn(
        "group relative h-[300px] cursor-pointer overflow-hidden",
        ANIMATE_FADE_UP,
        containerVariants({ variant: "outlined" }),
      )}
    >
      <Link
        className="relative z-10 flex h-full w-full flex-col p-6"
        href={project.permalink}
        aria-label={`View project ${project.title}`}
        title={`View project ${project.title}`}
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
              <span
                className={badgeVariants({
                  className: `text-success text-[10px]`,
                  variant: "outline",
                })}
              >
                ONGOING
              </span>
            ) : (
              <time
                dateTime={project.date}
                className={badgeVariants({
                  className: `text-[10px]`,
                  variant: "outline",
                })}
              >
                {formatDateString(project.date)}
              </time>
            )}
          </span>
        </div>
        {isHomePage ? (
          <h3
            className={headingVariants({
              level: "h3",
              className: "truncate group-hover:underline",
            })}
          >
            {project.title}
          </h3>
        ) : (
          <h2
            className={headingVariants({
              level: "h3",
              className: "truncate group-hover:underline",
            })}
          >
            {project.title}
          </h2>
        )}
        <TypographyP
          className="my-1 truncate font-light group-hover:underline"
          level="small"
        >
          {project.subTitle}
        </TypographyP>
        <p className="text-foreground/70 max-w-[90%] truncate text-[11px] font-light md:max-w-[70%]">
          {project.tags.join(", ")}
        </p>
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
            sizes="(max-width: 768px) 100vw, (min-width: 769px) 40vw"
          />
        </div>
      </Link>
    </li>
  );
}
