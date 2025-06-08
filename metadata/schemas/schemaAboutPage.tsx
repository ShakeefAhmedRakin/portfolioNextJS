import BaseSchema from "../utils/baseSchema";
import { websiteId } from "../shared/website";
import SiteConfig from "@/content/site-config";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/content/site-metadata";
import { siteSocials } from "@/content/site-socials";

export default function SetSchemaAboutPage() {
  const graph = BaseSchema({
    pathParam: "/about",
    currentPageSchemas: [
      {
        "@type": "ProfilePage",
        "@id": `${process.env.WEBSITE_URL}/#aboutpage`,
        url: `${process.env.WEBSITE_URL}/about`,
        mainEntity: {
          "@id": personId,
        },
        isPartOf: {
          "@id": websiteId,
        },
        primaryImageOfPage: {
          "@id": `${process.env.WEBSITE_URL}/about/#about-main-image`,
        },
        image: {
          "@id": `${process.env.WEBSITE_URL}/about/#about-main-image`,
        },
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
      {
        "@type": "ImageObject",
        "@id": `${process.env.WEBSITE_URL}/about/#about-main-image`,
        contentUrl: SiteConfig.gallery.aboutHeroImage.absoluteSrc,
        caption: SiteConfig.gallery.aboutHeroImage.name,
        inLanguage: "en-US",
        creditText: SiteConfig.fullName,
        copyrightNotice: `© ${SiteConfig.fullName}`,
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
