import Image from "next/image";
import projects from "../../../_data/projects.json";
import {
  ButtonTertiaryFilled,
  ButtonTertiaryOutline,
} from "@/app/_components/ui/Buttons";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectBanner({ projectId }: { projectId: string }) {
  const project = projects.find((project) => project.id === projectId);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-5 lg:gap-x-10">
      {/* PROJECT IMAGE CONTAINER*/}
      <div className="relative aspect-video md:aspect-auto">
        {/* PROJECT IMAGE */}
        <Image
          src={project?.coverPhoto?.url || ""}
          fill={true}
          alt={project?.coverPhoto?.alt || ""}
          title={project?.coverPhoto?.alt}
          className="rounded-xl object-cover"
          draggable={false}
          sizes="1000"
          priority
        ></Image>
        {project?.isWorkInProgress && (
          <span className="absolute top-4 left-0 bg-error rounded-r-lg text-white text-[10px] md:text-xs font-bold font-body px-2 py-2">
            WORK-IN-PROGRESS
          </span>
        )}
      </div>
      {/* PROJECT DETAILS CONTAINER */}
      <div className="py-2">
        {/* PROJECT TYPE */}
        <span className="font-body text-[9px] md:text-[10px] text-white font-medium uppercase">
          {project?.type}
        </span>
        <span className="font-body text-[9px] md:text-[10px] text-white font-medium uppercase">
          {" "}
          -{" "}
          {new Date(project?.date || "").toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        {/* PROJECT TITLE */}
        <h1 className="font-heading text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary font-bold my-1">
          {project?.title}
        </h1>
        {/* PROJECT SUBTITLE */}
        <h2 className="font-body text-sm md:text-base lg:text-lg text-white font-light">
          {project?.subtitle}
        </h2>
        <hr className="mb-1 mt-2" />
        {/* PROJECT TAGS */}
        <span className="font-body text-xs text-white font-medium">
          {project?.tags?.join(", ")}
        </span>
        {/* PROJECT SUMMARY */}
        <p className="font-body text-[11px] xl:text-sm text-white my-4">
          {project?.summary}
        </p>
        {/* GITHUB LINKS */}
        <div className="flex flex-col md:flex-row gap-2 ">
          {project?.githubLinks &&
            project?.githubLinks.map((link) => (
              <ButtonTertiaryOutline
                href={link.url}
                ariaLabel={`View Code For ${link.label}`}
                key={link.url}
                className="w-full flex-1"
                openInNewTab
                variant="white"
              >
                {link.label} <FaGithub />
              </ButtonTertiaryOutline>
            ))}
          {/* DEMO LINKS */}
          {project?.demoLinks &&
            project?.demoLinks.map((link) => (
              <ButtonTertiaryFilled
                href={link.url}
                ariaLabel={`View Code For ${link.label}`}
                key={link.url}
                className="w-full flex-1"
                openInNewTab
                variant="white"
              >
                {link.label} <FaExternalLinkAlt />
              </ButtonTertiaryFilled>
            ))}
        </div>
      </div>
    </div>
  );
}
