import BaseSchema from "../utils/baseSchema";
import { websiteId } from "../shared/website";
import SiteConfig from "@/content/site-config";
import { personId } from "../shared/person";
import { organizationId } from "../shared/organization";
import SiteMetadata from "@/content/site-metadata";

export default function SetSchemaAboutPage() {
  const graph = BaseSchema({
    pathParam: "/about",
    currentPageSchemas: [
      {
        "@type": "ProfilePage",
        "@id": `${process.env.WEBSITE_URL}/#aboutpage`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${process.env.WEBSITE_URL}/#aboutpage`,
        },
        url: `${process.env.WEBSITE_URL}/about`,
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
        contentUrl: `${process.env.WEBSITE_URL}/images/branding/about-1.png`,
        url: `${process.env.WEBSITE_URL}/images/branding/about-1.png`,
        caption: `${SiteConfig.fullName} | ${SiteConfig.title}`,
        inLanguage: "en-US",
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
