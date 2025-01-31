import { Graph } from "schema-dts";
import personalData from "../../../_data/personalData.json";
import achievements from "../../../_data/awards.json";

export function SetSchemaAchievementsPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      // MAIN PAGE (CollectionPage for Achievements)
      {
        "@type": "CollectionPage",
        "@id": `${process.env.WEBSITE_URL}/achievements/#achievements`,
        dateCreated: "2025-01-02T23:22:12.039Z",
        dateModified: new Date().toISOString(),
        mainEntity: {
          "@id": `${process.env.WEBSITE_URL}/achievements/#achievement-list`,
        },
        breadcrumb: {
          "@id": `${process.env.WEBSITE_URL}/achievements/#breadcrumb`,
        },
      },
      // ACHIEVEMENTS LIST
      {
        "@id": `${process.env.WEBSITE_URL}/achievements/#achievement-list`,
        "@type": "ItemList",
        name: "Achievements",
        numberOfItems: achievements.length,
        itemListElement: achievements.map((achievement, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: achievement.blog.title,
            url: `${process.env.WEBSITE_URL}/achievements/${achievement.id}`,
            datePublished: achievement.date,
            author: {
              "@type": "Person",
              name: `${personalData.Person.FullName}`,
            },
          },
        })),
      },
      // BREAD CRUMBS
      {
        "@type": "BreadcrumbList",
        "@id": `${process.env.WEBSITE_URL}/achievements/#breadcrumb`,
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
            name: "Achievements",
            item: `${process.env.WEBSITE_URL}/achievements`,
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
