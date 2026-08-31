import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import SiteConfig from "@/content/site-config";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/metadata/site-metadata";
import generateImageObjectSchema from "../generators/generate-image-object-schema";
import { siteNavigationMap } from "@/content/site-navigation";
import { getSiteSameAs } from "../shared/site-links";
import { getWebsiteUrl } from "@/lib/utils";

export default function SetSchemaAboutPage() {
  const graph = BaseSchema({
    pathParam: siteNavigationMap.ABOUT.href,
    currentPageSchemas: [
      {
        "@type": "ProfilePage",
        "@id": `${getWebsiteUrl()}/#${siteNavigationMap.ABOUT.key}`,
        url: `${getWebsiteUrl()}${siteNavigationMap.ABOUT.href}`,
        mainEntity: {
          "@id": personId,
        },
        isPartOf: {
          "@id": websiteId,
        },
        primaryImageOfPage: {
          "@id": `${getWebsiteUrl()}${siteNavigationMap.ABOUT.href}/#about-main-image`,
        },
        image: [
          generateImageObjectSchema({
            id: `${getWebsiteUrl()}${siteNavigationMap.ABOUT.href}/#about-main-image`,
            title: SiteConfig.gallery.aboutHeroImage.name,
            src: SiteConfig.gallery.aboutHeroImage.src,
            pageUrl: siteNavigationMap.ABOUT.href,
          }),
        ],
        about: {
          "@id": personId,
        },
        sameAs: getSiteSameAs(),
        author: {
          "@id": personId,
        },
        inLanguage: "en-US",
        publisher: {
          "@id": organizationId,
        },
        name: SiteMetadata.ABOUT.title,
        description: SiteMetadata.ABOUT.description,
        headline: SiteMetadata.ABOUT.title,
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
