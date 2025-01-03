import { Graph } from "schema-dts";
import projects from "../../../_data/projects.json";

export function SetSchemaProjectsPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      // ITEM LISTS
      {
        "@type": "ItemList",
        "@id": `${process.env.WEBSITE_URL}/projects/#projects`,
        itemListElement: projects
          .filter((project) => project.isFeatured)
          .map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: project.title,
              url: `${process.env.WEBSITE_URL}/projects/${project.id}`,
              image: `${process.env.WEBSITE_URL}${project.coverPhoto}`,
              dateCreated: project.date,
              creator: "Shakeef Ahmed Rakin",
              author: "Shakeef Ahmed Rakin",
              description: project.summary,
            },
          })),
      },
      // BREAD CRUMBS
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
