import BaseSchema from "../utils/baseSchema";
import { websiteId } from "../shared/website";
import SiteConfig from "@/content/site-config";
import { mainHeroImageId } from "../shared/main-hero-image";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";

export default function SetSchemaHomePage() {
  const graph = BaseSchema({
    pathParam: "/",
    currentPageSchemas: [
      {
        "@type": "WebPage",
        "@id": `${process.env.WEBSITE_URL}/#homepage`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${process.env.WEBSITE_URL}/#homepage`,
        },
        url: process.env.WEBSITE_URL,
        isPartOf: {
          "@id": websiteId,
        },
        primaryImageOfPage: {
          "@id": mainHeroImageId,
        },
        image: {
          "@id": mainHeroImageId,
        },
        about: {
          "@id": personId,
        },
        author: {
          "@id": personId,
        },
        inLanguage: "en-US",
        publisher: {
          "@id": organizationId,
        },
        name: `${SiteConfig.fullName} | ${SiteConfig.title}`,
        description: SiteConfig.heroDescription,
        headline: SiteConfig.fullName,
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
