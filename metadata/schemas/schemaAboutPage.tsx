import BaseSchema from "../utils/baseSchema";
import { websiteId } from "../shared/website";
import SiteConfig from "@/content/site-config";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/content/site-metadata";
import { siteSocials } from "@/content/site-socials";
import generateImageObjectSchema from "../utils/generateImageObjectSchema";

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
        image: [
          generateImageObjectSchema({
            id: `${process.env.WEBSITE_URL}/about/#about-main-image`,
            title: SiteConfig.gallery.aboutHeroImage.name,
            src: SiteConfig.gallery.aboutHeroImage.src,
            pageUrl: "/about",
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
