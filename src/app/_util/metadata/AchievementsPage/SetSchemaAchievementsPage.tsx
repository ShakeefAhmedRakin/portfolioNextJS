import { Graph } from "schema-dts";
import personalData from "../../../_data/personalData.json";
import achievements from "../../../_data/achievements.json";

export function SetSchemaAchievementsPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${process.env.WEBSITE_URL}/achievements/#achievements-listing`,
        dateCreated: "2025-01-02T23:22:12.039Z",
        dateModified: new Date().toISOString(),
        name: `Achievements by ${personalData.Person.FullName}`,
        headline: `Achievements by ${personalData.Person.FullName}`,
        about: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
          description: `${personalData.Person.Description}`,
        },
        breadcrumb: {
          "@id": `${process.env.WEBSITE_URL}/achievements/#breadcrumb`,
        },
        mainEntity: {
          "@id": `${process.env.WEBSITE_URL}/achievements/#achievements-posts`,
        },
      },
      // BLOG LIST
      {
        "@id": `${process.env.WEBSITE_URL}/achievements/#achievements-posts`,
        "@type": "ItemList",
        name: "Achievement Articles",
        numberOfItems: achievements.length,
        itemListElement: achievements
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((achievement, index) => ({
            "@type": "BlogPosting",
            name: achievement.blog.title,
            headline: achievement.blog.title,
            description: achievement.blog.summary,
            datePublished: achievement.date,
            url: `${process.env.WEBSITE_URL}/achievements/${achievement.id}`,
            position: index + 1,
            author: {
              "@type": "Person",
              name: `${personalData.Person.FullName}`,
            },
          })),
      },
      // BREADCRUMBS
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
