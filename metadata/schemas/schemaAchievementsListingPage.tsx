import BaseSchema from "../utils/baseSchema";
import { websiteId } from "../shared/website";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/content/site-metadata";
import { achievements } from "@/.velite";
import GenerateAchievementSchema from "../utils/generate-achievement-schema";

export default function SetSchemaAchievementsListingPage() {
  const achievementsSchemas = achievements.map(GenerateAchievementSchema);
  const graph = BaseSchema({
    pathParam: "/achievements",
    currentPageSchemas: [
      {
        "@type": "Blog",
        "@id": `${process.env.WEBSITE_URL}/#achievementspage`,
        url: `${process.env.WEBSITE_URL}/achievements`,
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
        blogPost: [
          ...achievements.map((achievement) => {
            return {
              "@type": "BlogPosting",
              "@id": `${process.env.WEBSITE_URL}${achievement.permalink}`,
              name: achievement.title,
            };
          }),
        ],
      },
      ...achievementsSchemas,
    ],
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
