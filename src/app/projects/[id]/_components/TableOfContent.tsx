"use client";
import projects from "../../../_data/projects.json";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { useCallback } from "react";

export default function TableOfContent({ projectId }: { projectId: string }) {
  const project = projects.find((project) => project.id === projectId);

  const scrollTo = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 150;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);
  return (
    <div className="bg-backgroundAlt px-3 pt-3 pb-6 rounded-lg shadow-md space-y-4 h-full">
      <h3 className="flex items-center justify-center gap-2 text-white py-3 px-5 font-heading font-bold text-sm lg:text-lg mb-4 border-b">
        <MdOutlineContentPasteSearch /> Table of Content
      </h3>
      <ul className="list-decimal list-inside space-y-4 text-white font-body">
        {project?.coreFeatures &&
          project?.coreFeatures?.featureList &&
          project?.coreFeatures?.featureList.length > 0 && (
            <li className="ml-2">
              <span
                className="font-semibold text-base  hover:underline hover:cursor-pointer w-fit"
                onClick={() => scrollTo("Core Features")}
              >
                Core Features
              </span>
              <ul className="list-inside ml-5 mt-2 space-y-1 text-xs lg:text-sm">
                {project?.coreFeatures?.featureList.map((feature) => (
                  <li
                    key={feature.title}
                    className="line-clamp-1 hover:underline hover:cursor-pointer w-fit"
                    onClick={() => scrollTo(feature.title)}
                  >
                    {feature.title}
                  </li>
                ))}
              </ul>
            </li>
          )}
        {project?.techStack && project?.techStack?.length > 0 && (
          <li className="ml-2">
            <span
              className="font-semibold text-base  hover:underline hover:cursor-pointer w-fit"
              onClick={() => scrollTo("Technology Stack")}
            >
              Technology Stack
            </span>
            <ul className="list-inside ml-5 mt-2 space-y-1 text-xs lg:text-sm">
              {project?.techStack.map((stack) => (
                <li
                  key={stack.title}
                  className="line-clamp-1 hover:underline hover:cursor-pointer w-fit"
                  onClick={() => scrollTo(stack.title)}
                >
                  {stack.title}
                </li>
              ))}
            </ul>
          </li>
        )}
        {project?.overviewSections && project?.overviewSections?.length > 0 && (
          <li className="ml-2">
            <span
              className="font-semibold text-base  hover:underline hover:cursor-pointer w-fit"
              onClick={() => scrollTo("Project Overview")}
            >
              Project Overview
            </span>
            <ul className="list-inside ml-5 mt-2 space-y-1 text-xs lg:text-sm">
              {project?.overviewSections.map((section) => {
                if (section.hasTitle && section.title) {
                  return (
                    <li
                      key={section.title}
                      onClick={() => scrollTo(section.title)}
                      className="line-clamp-1 hover:underline hover:cursor-pointer w-fit"
                    >
                      {section.title}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </li>
        )}
      </ul>
    </div>
  );
}
