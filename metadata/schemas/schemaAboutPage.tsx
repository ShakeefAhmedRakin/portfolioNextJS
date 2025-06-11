import BaseSchema from "../shared/base-schema";
import { websiteId } from "../shared/website";
import SiteConfig from "@/content/site-config";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/metadata/site-metadata";
import { siteSocials } from "@/content/site-socials";
import generateImageObjectSchema from "../generators/generate-image-object-schema";
import { siteNavigationMap } from "@/content/site-navigation";

export default function SetSchemaAboutPage() {
  const graph = BaseSchema({
    pathParam: siteNavigationMap.ABOUT.href,
    currentPageSchemas: [
      {
        "@type": "ProfilePage",
        "@id": `${process.env.WEBSITE_URL}/#${siteNavigationMap.ABOUT.key}`,
        url: `${process.env.WEBSITE_URL}${siteNavigationMap.ABOUT.href}`,
        mainEntity: {
          "@id": personId,
        },
        isPartOf: {
          "@id": websiteId,
        },
        primaryImageOfPage: {
          "@id": `${process.env.WEBSITE_URL}${siteNavigationMap.ABOUT.href}/#about-main-image`,
        },
        image: [
          generateImageObjectSchema({
            id: `${process.env.WEBSITE_URL}${siteNavigationMap.ABOUT.href}/#about-main-image`,
            title: SiteConfig.gallery.aboutHeroImage.name,
            src: SiteConfig.gallery.aboutHeroImage.src,
            pageUrl: siteNavigationMap.ABOUT.href,
          }),
        ],
        about: {
          "@id": personId,
        },
        sameAs: [
          ...[process.env.WEBSITE_URL].filter(
            (url): url is string => typeof url === "string",
          ),
          ...siteSocials.map((social) => social.url),
        ],
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
