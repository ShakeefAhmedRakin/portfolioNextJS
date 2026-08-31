import { projects as allProjects } from "@/.velite";
import { chunkAlternating, sortProjectsByDate } from "@/lib/utils";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsShowcase() {
  const projects = sortProjectsByDate(
    allProjects.filter((project) => project.isFeatured),
  );

  const chunks = chunkAlternating(projects, [3, 2]);

  return (
    <ul className="list-none space-y-4">
      {chunks.map((chunk, idx) => (
        <li key={idx}>
          <ul
            className={`grid gap-4 ${
              chunk.length === 3
                ? "grid-cols-1 lg:grid-cols-3"
                : "grid-cols-1 lg:grid-cols-2"
            }`}
          >
            {chunk.map((project) => (
              <ProjectCard project={project} key={project.slug} isHomePage />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
