import Image from "next/image";
import Link from "next/link";

interface CoverPhoto {
  url: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  coverPhoto: CoverPhoto;
  isWorkInProgress: boolean;
  date: string;
  tags: string[];
  summary: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      key={project.id}
      className="p-2 bg-background flex flex-col h-full rounded-lg shadow hover:shadow-secondary duration-300"
      aria-label={`Go to project: ${project.title}`}
    >
      <div
        className="aspect-video relative w-full max-h-[200px]"
        role="img"
        aria-label={`Cover photo for project ${project?.title}`}
      >
        <Image
          src={project?.coverPhoto?.url}
          alt={
            project?.coverPhoto?.alt ||
            `Cover photo for project ${project?.title}`
          }
          fill={true}
          draggable={false}
          className="rounded-md object-cover"
        />
      </div>
      <div className="p-2 flex-1 flex flex-col h-full">
        <div className="flex items-center justify-between gap-2 mt-1.5">
          <h3 className="font-heading text-text font-bold text-xs md:text-base">
            {project?.title}
          </h3>
          {project?.isWorkInProgress && (
            <span
              className="text-[9px] font-bold px-1.5 py-0.5 font-heading border border-red-500 text-red-500 rounded-full"
              aria-label="Project is a work in progress"
            >
              WIP
            </span>
          )}
        </div>
        <h4 className="text-text text-xs md:text-xs font-heading">
          {new Date(project?.date ?? "").toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h4>
        <ul className="flex flex-wrap gap-1 mt-2" role="list">
          {project?.tags.map((tag) => (
            <li
              key={tag}
              className="text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 font-heading border border-none text-secondary bg-secondary-lighter rounded-full"
              role="listitem"
              aria-label={`Tag: ${tag}`}
            >
              {tag}
            </li>
          ))}
        </ul>
        <p className="line-clamp-3 font-body mt-3 text-xs text-text">
          {project?.summary}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
