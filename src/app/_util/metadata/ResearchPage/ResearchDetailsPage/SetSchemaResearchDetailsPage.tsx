import { Graph } from "schema-dts";
import personalData from "../../../../_data/personalData.json";
import allResearch from "../../../../_data/research.json";

export function SetSchemaResearchDetailsPage({ id }: { id: string }) {
  const research = allResearch.find((research) => research.id === id);

  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ScholarlyArticle",
        headline: research?.title,
        name: research?.title,
        author: research?.authors.map((author) => ({
          "@type": "Person",
          name: author.name,
        })),
        description: research?.abstract,
        abstract: research?.abstract,
        url: `${process.env.WEBSITE_URL}/research/${research?.id}`,
        datePublished: research?.lastUpdatedDate,
        dateModified: research?.lastUpdatedDate,
        image: {
          "@type": "ImageObject",
          url: `${process.env.WEBSITE_URL}${research?.thumbnail}`,
        },
        ...(research?.journalOrOrg && {
          publisher: {
            "@type": "Organization",
            name: research?.journalOrOrg?.name,
            url: research?.journalOrOrg?.link,
            department: research?.journalOrOrg?.department,
          },
        }),
        creator: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
        },
        maintainer: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
        },
        keywords: research?.keywords.join(", "),
        articleBody: research?.abstract,
        articleSection: research?.keywords,
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
            name: "Research",
            item: `${process.env.WEBSITE_URL}/research`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${research?.title}`,
            item: `${process.env.WEBSITE_URL}/research/${research?.id}`,
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
