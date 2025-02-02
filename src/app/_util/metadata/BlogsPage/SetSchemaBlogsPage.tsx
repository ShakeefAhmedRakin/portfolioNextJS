import { Graph } from "schema-dts";
import personalData from "../../../_data/personalData.json";

export function SetSchemaBlogsPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${process.env.WEBSITE_URL}/blogs/#blogs-listing`,
        dateCreated: "2025-01-02T23:22:12.039Z",
        dateModified: new Date().toISOString(),
        name: `Latest blogs published by ${personalData.Person.FullName} on Medium`,
        headline: `Latest blogs published by ${personalData.Person.FullName} on Medium`,
        about: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
          description: `${personalData.Person.Description}`,
        },
      },
      // BREADCRUMBS
      {
        "@type": "BreadcrumbList",
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
            name: "Blogs",
            item: `${process.env.WEBSITE_URL}/blogs`,
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
