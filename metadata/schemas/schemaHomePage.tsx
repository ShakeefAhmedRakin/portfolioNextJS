import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import SiteConfig from "@/content/site-config";
import { mainHeroImageId } from "../shared/main-hero-image";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import { siteNavigationMap } from "@/content/site-navigation";
import { getWebsiteUrl } from "@/lib/utils";

export default function SetSchemaHomePage() {
  const graph = BaseSchema({
    pathParam: siteNavigationMap.HOME.href,
    currentPageSchemas: [
      {
        "@type": "WebPage",
        "@id": `${getWebsiteUrl()}/#${siteNavigationMap.HOME.key}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${getWebsiteUrl()}/#${siteNavigationMap.HOME.key}`,
        },
        url: getWebsiteUrl(),
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
        description: SiteConfig.seoDescription,
        headline: `${SiteConfig.fullName} | ${SiteConfig.title}`,
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
