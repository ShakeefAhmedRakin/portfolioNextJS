import { Graph } from "schema-dts";
import personalData from "../../../_data/personalData.json";
import research from "../../../_data/research.json";

export function SetSchemaResearchPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${process.env.WEBSITE_URL}/research/#research-listing`,
        dateCreated: "2025-01-02T23:22:12.039Z",
        dateModified: new Date().toISOString(),
        name: `Research Articles by ${personalData.Person.FullName}`,
        headline: `Research Articles by ${personalData.Person.FullName}`,
        about: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
          description: `${personalData.Person.Description}`,
        },
        breadcrumb: {
          "@id": `${process.env.WEBSITE_URL}/research/#breadcrumb`,
        },
        mainEntity: {
          "@id": `${process.env.WEBSITE_URL}/research/#research-posts`,
        },
      },
      // RESEARCH ARTICLES LIST
      {
        "@id": `${process.env.WEBSITE_URL}/research/#research-posts`,
        "@type": "ItemList",
        name: "Research Articles",
        numberOfItems: research.length,
        itemListElement: research
          .sort(
            (a, b) =>
              new Date(b.lastUpdatedDate).getTime() -
              new Date(a.lastUpdatedDate).getTime()
          )
          .map((research, index) => ({
            "@type": "ScholarlyArticle",
            name: research.title,
            headline: research.title,
            description: research.abstract,
            datePublished: research.lastUpdatedDate,
            url: `${process.env.WEBSITE_URL}/research/${research.id}`,
            position: index + 1,
            author: research.authors.map((author) => ({
              "@type": "Person",
              name: author.name,
            })),
            ...(research.journalOrOrg && {
              publisher: {
                "@type": "Organization",
                name: research?.journalOrOrg?.name,
                url: research?.journalOrOrg?.link,
                department: research?.journalOrOrg?.department,
              },
            }),
          })),
      },
      // BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        "@id": `${process.env.WEBSITE_URL}/research/#breadcrumb`,
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
            name: "Research",
            item: `${process.env.WEBSITE_URL}/research`,
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
