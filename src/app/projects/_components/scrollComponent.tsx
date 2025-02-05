"use client";
import { useCallback } from "react";
import { RiScrollToBottomLine } from "react-icons/ri";

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
      const offset = 150;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <div>
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
              className="rounded-lg px-4 py-2 text-white bg-gradient-to-br from-primary to-secondary flex items-center gap-2 hover:underline duration-300 active:scale-[0.99] font-heading text-xs md:text-sm font-bold"
              aria-label={`Scroll to ${type} section`}
              title={`Scroll to ${type} section`}
            >
              {type} <RiScrollToBottomLine className="text-sm md:text-lg" />
            </button>
          ))}
      </div>
    </div>
  );
}
