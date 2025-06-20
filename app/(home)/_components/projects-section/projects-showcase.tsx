import { projects as allProjects } from "@/.velite";
import { sortProjectsByDate } from "@/lib/utils";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsShowcase() {
  const projects = sortProjectsByDate(
    allProjects.filter((project) => project.isFeatured),
  );

  const chunks = [];
  let i = 0;
  let toggle = true;

  while (i < projects.length) {
    const size = toggle ? 3 : 2;
    chunks.push(projects.slice(i, i + size));
    i += size;
    toggle = !toggle;
  }

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
