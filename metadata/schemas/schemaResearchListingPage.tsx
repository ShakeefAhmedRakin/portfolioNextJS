import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/content/site-metadata";
import { research } from "@/.velite";
import { siteNavigationMap } from "@/content/site-navigation";
import GenerateResearchSchema from "../generators/generate-research-schema";

export default function SetSchemaResearchListingPage() {
  const researchSchemas = research.map(GenerateResearchSchema);
  const graph = BaseSchema({
    pathParam: siteNavigationMap.RESEARCH.href,
    currentPageSchemas: [
      {
        "@type": "CollectionPage",
        "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.RESEARCH.key}`,
        url: `${process.env.WEBSITE_URL}${siteNavigationMap.RESEARCH.href}`,
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
        name: SiteMetadata.RESEARCH.title,
        description: SiteMetadata.RESEARCH.description,
        headline: SiteMetadata.RESEARCH.title,
        hasPart: [...researchSchemas],
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
