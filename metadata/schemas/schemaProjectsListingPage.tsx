import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/content/site-metadata";
import { projects } from "@/.velite";
import { siteNavigationMap } from "@/content/site-navigation";
import GenerateProjectSchema from "../generators/generate-project-schema";

export default function SetSchemaProjectsListingPage() {
  const projectSchemas = projects.map(GenerateProjectSchema);
  const graph = BaseSchema({
    pathParam: siteNavigationMap.PROJECTS.href,
    currentPageSchemas: [
      {
        "@type": "CollectionPage",
        "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.PROJECTS.key}`,
        url: `${process.env.WEBSITE_URL}${siteNavigationMap.PROJECTS.href}`,
        isPartOf: {
          "@id": websiteId,
        },
        author: {
          "@id": personId,
        },
        inLanguage: "en-US",
        publisher: {
          "@id": organizationId,
        },
        name: SiteMetadata.PROJECTS.title,
        description: SiteMetadata.PROJECTS.description,
        headline: SiteMetadata.PROJECTS.title,
        hasPart: [...projectSchemas],
      },
    ],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
