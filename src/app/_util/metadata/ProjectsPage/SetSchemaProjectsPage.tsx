import { WebPage, WithContext } from "schema-dts";
import projects from "../../../_data/projects.json";

export function SetSchemaProjectsPage() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Projects By Shakeef Ahmed Rakin",
    description:
      "Learn about Shakeef Ahmed Rakin's projects, ranging from full-stack development to machine learning.",
    url: `${process.env.WEBSITE_URL}/projects`,
    image: `${process.env.WEBSITE_URL}/og_images/projectspage.png`,
    headline: "Projects By Shakeef Ahmed Rakin",
    author: {
      "@type": "Person",
      name: "Shakeef Ahmed Rakin",
      image: `${process.env.WEBSITE_URL}/hero.png`,
      url: `${process.env.WEBSITE_URL}`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Shakeef Ahmed Rakin Portfolio",
      url: `${process.env.WEBSITE_URL}`,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Projects",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          url: `${process.env.WEBSITE_URL}/projects/${project.id}`,
          description: project.summary,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
