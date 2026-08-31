import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/metadata/site-metadata";
import { research } from "@/.velite";
import { siteNavigationMap } from "@/content/site-navigation";
import GenerateResearchSchema from "../generators/generate-research-schema";
import { getWebsiteUrl } from "@/lib/utils";

export default function SetSchemaResearchListingPage() {
  const researchSchemas = research.map(GenerateResearchSchema);
  const graph = BaseSchema({
    pathParam: siteNavigationMap.RESEARCH.href,
    currentPageSchemas: [
      {
        "@type": "CollectionPage",
        "@id": `${getWebsiteUrl()}/#${siteNavigationMap.RESEARCH.key}`,
        url: `${getWebsiteUrl()}${siteNavigationMap.RESEARCH.href}`,
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
