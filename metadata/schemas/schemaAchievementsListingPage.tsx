import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/content/site-metadata";
import { achievements } from "@/.velite";
import GenerateAchievementSchema from "../generators/generate-achievement-schema";
import { siteNavigationMap } from "@/content/site-navigation";

export default function SetSchemaAchievementsListingPage() {
  const achievementsSchemas = achievements.map(GenerateAchievementSchema);
  const graph = BaseSchema({
    pathParam: siteNavigationMap.ACHIEVEMENTS.href,
    currentPageSchemas: [
      {
        "@type": "Blog",
        "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.ACHIEVEMENTS.key}`,
        url: `${process.env.WEBSITE_URL}${siteNavigationMap.ACHIEVEMENTS.href}`,
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
        name: SiteMetadata.ACHIEVEMENTS.title,
        description: SiteMetadata.ACHIEVEMENTS.description,
        headline: SiteMetadata.ACHIEVEMENTS.title,
        hasPart: [...achievementsSchemas],
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
