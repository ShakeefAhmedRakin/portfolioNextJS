import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface CoverPhoto {
  url: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  coverPhoto: CoverPhoto;
  isWorkInProgress: boolean;
  date: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${project.id}`}
      key={project.id}
      className="bg-black rounded-lg shadow-md hover:shadow-secondary duration-300 group aspect-[16/12] relative"
      aria-label={`Go to project: ${project.title}`}
      title={`Go to project: ${project.title}`}
    >
      <div className="relative h-full w-full">
        {/* PROJECT IMAGE */}
        <Image
          src={project?.coverPhoto?.url}
          alt={
            project?.coverPhoto?.alt ||
            `Cover photo for project ${project?.title}`
          }
          fill={true}
          priority
          sizes="500"
          draggable={false}
          className="rounded-lg object-cover opacity-80 group-hover:opacity-100 duration-300"
        />
      </div>
      {/* CARD BLACK OVERLAY */}
      <div className="absolute bg-gradient-to-b from-transparent to-black bg-opacity-60 bottom-0 rounded-lg w-full h-full"></div>
      {/* PROJECT TITLE BANNER */}
      <span className="absolute top-4 bg-gradient-to-br from-primary to-secondary rounded-r-lg text-white text-xs font-bold font-body px-4 py-2">
        {project?.title}
      </span>
      {/* PROJECT WIP BANNER */}
      {project?.isWorkInProgress && (
        <span className="absolute top-4 right-0 bg-error rounded-l-lg text-white text-xs font-bold font-body px-4 py-2">
          WIP
        </span>
      )}
      {/* PROJECT DETAILS */}
      <div className="absolute w-full bottom-0 h-fit rounded-b-lg flex flex-col justify-end px-4 py-6">
        <span className="font-body font-semibold text-white text-[9px] mb-1">
          {new Date(project?.date || "").toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <h5 className="font-body font-semibold line-clamp-1 text-white group-hover:underline text-xs md:text-sm">
          {project.subtitle} <FaArrowRight className="inline text-xs" />
        </h5>
        <p className="font-body mt-2 flex-1 text-white text-[11px] capitalize line-clamp-2 max-h-[29px] min-h-[29px]">
          {project.tags.join(", ")}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
