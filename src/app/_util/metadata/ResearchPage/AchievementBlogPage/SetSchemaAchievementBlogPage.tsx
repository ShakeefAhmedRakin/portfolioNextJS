import { Graph } from "schema-dts";
import personalData from "../../../../_data/personalData.json";
import achievements from "../../../../_data/achievements.json";

export function SetSchemaAchievementBlogPage({ id }: { id: string }) {
  const achievement = achievements.find((achievement) => achievement.id === id);

  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: achievement?.blog?.title,
        author: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
        },
        description:
          achievement?.blog?.summary ||
          "Explore details about this achievement.",
        url: `${process.env.WEBSITE_URL}/achievements/${achievement?.id}`,
        datePublished: achievement?.date,
        dateModified: achievement?.date,
        image: {
          "@type": "ImageObject",
          url: achievement?.mainImage?.url || achievement?.photo,
        },
        publisher: {
          "@type": "Organization",
          name: `${personalData.Person.FullName}`,
          logo: {
            "@type": "ImageObject",
            url: `${process.env.WEBSITE_URL}/logos/logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${process.env.WEBSITE_URL}/achievements/${achievement?.id}`,
        },
        creator: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
        },
        maintainer: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
        },
        keywords: achievement?.seo?.googleIndexing?.keywords?.join(", "),
        articleBody:
          achievement?.blog?.summary +
          " " +
          achievement?.blog?.content
            .map((section) => {
              if (section.type === "text") {
                return section.content;
              }
              if (section.type === "title") {
                return section.content;
              }
            })
            .join(" "),
        articleSection: achievement?.seo?.googleIndexing?.keywords,
        abstract: achievement?.blog?.summary,
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
            name: "Achievements",
            item: `${process.env.WEBSITE_URL}/achievements`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${achievement?.blog?.title}`,
            item: `${process.env.WEBSITE_URL}/achievements/${achievement?.id}`,
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
