import { Graph } from "schema-dts";
import projects from "../../../_data/projects.json";
import personalData from "../../../_data/personalData.json";

export function SetSchemaProjectsPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${process.env.WEBSITE_URL}/projects/#project-listing`,
        dateCreated: "2025-01-02T23:22:12.039Z",
        dateModified: new Date().toISOString(),
        name: `Projects worked on by ${personalData.Person.FullName}`,
        headline: `Projects worked on by ${personalData.Person.FullName}`,
        about: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
          description: `${personalData.Person.Description}`,
        },
        breadcrumb: {
          "@id": `${process.env.WEBSITE_URL}/projects/#breadcrumb`,
        },
        mainEntity: {
          "@id": `${process.env.WEBSITE_URL}/projects/#projects`,
        },
      },
      // PROJECTS LIST
      {
        "@id": `${process.env.WEBSITE_URL}/projects/#projects`,
        "@type": "ItemList",
        name: "Projects",
        numberOfItems: projects.length,
        itemListElement: projects
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((project, index) => ({
            "@type": "SoftwareSourceCode",
            name: `${project.title} - ${project.subtitle}`,
            headline: `${project.title} - ${project.subtitle}`,
            description: project?.summary,
            about: project?.summary,
            datePublished: project.date,
            url: `${process.env.WEBSITE_URL}/projects/${project.id}`,
            codeRepository: `${process.env.WEBSITE_URL}/projects/${project.id}`,
            position: index + 1,
            creator: {
              "@type": "Person",
              name: personalData.Person.FullName,
            },
          })),
      },
      // BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        "@id": `${process.env.WEBSITE_URL}/projects/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${process.env.WEBSITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${process.env.WEBSITE_URL}/projects`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
