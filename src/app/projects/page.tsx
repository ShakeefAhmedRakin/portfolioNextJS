import projects from "../_data/projects.json";

export default async function ProjectsPage() {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <section className="bg-backgroundDark min-h-screen">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
        <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl">
          My <span className="text-primary">Projects</span>
        </h1>
      </div>
    </section>
  );
}
