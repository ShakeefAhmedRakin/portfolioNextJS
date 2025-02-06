import { Graph } from "schema-dts";
import personalData from "../../../_data/personalData.json";
import work from "../../../_data/work.json";
import { socialLinks } from "@/app/_data/socialLinks";

export function SetSchemaGetInTouchPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${process.env.WEBSITE_URL}/get-in-touch`,
        dateCreated: "2025-01-02T23:22:12.039Z",
        dateModified: new Date().toISOString(),
        name: `Contact ${personalData.Person.FullName}`,
        headline: `Connect with ${personalData.Person.FullName}`,
        description: `Reach out to ${personalData.Person.FullName} for job opportunities, research collaborations, software development, and AI projects.`,
        about: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
          description: `${personalData.Person.Description}`,
        },
        breadcrumb: {
          "@id": `${process.env.WEBSITE_URL}/get-in-touch/#breadcrumb`,
        },
        mainEntity: {
          "@type": "Person",
          name: `${personalData.Person.FullName}`,
          url: `${process.env.WEBSITE_URL}/get-in-touch`,
          sameAs: socialLinks.map((link) => link.url),
          jobTitle: personalData.Person.Title,
          worksFor: work.map((job) => ({
            "@type": "Organization",
            name: job.company,
            url: job?.companyLink || "",
          })),
        },
      },
      // BREADCRUMBS
      {
        "@type": "BreadcrumbList",
        "@id": `${process.env.WEBSITE_URL}/get-in-touch/#breadcrumb`,
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
            name: "Get In Touch",
            item: `${process.env.WEBSITE_URL}/get-in-touch`,
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
