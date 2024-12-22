"use client";
import { useCallback } from "react";

interface ProjectsByType {
  [key: string]: unknown;
}

export default function ScrollToViewComponent({
  projectsByType,
}: {
  projectsByType: ProjectsByType;
}) {
  const scrollTo = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="mb-8">
      <h2 className="font-heading text-base md:text-base font-semibold text-text mb-4">
        Explore Projects By Type
      </h2>
      <p className="font-body text-xs md:text-sm text-text mb-4">
        Select a project type below to quickly navigate to that section.
      </p>
      <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto gap-4">
        {Object.keys(projectsByType)
          .sort()
          .map((type) => (
            <button
              key={type}
              onClick={() => scrollTo(type)}
              className="font-heading text-xs lg:text-sm font-semibold text-primary border-b-2 border-gray-300 dark:border-gray-700 dark:hover:border-primary hover:border-primary transition duration-300"
              aria-label={`Scroll to ${type} section`}
            >
              {type}
            </button>
          ))}
      </div>
    </div>
  );
}
