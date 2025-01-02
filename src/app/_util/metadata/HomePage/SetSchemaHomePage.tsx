import { Graph } from "schema-dts";
import { socialLinks } from "../../../_data/socialLinks";
import awards from "../../../_data/awards.json";

export default function SetSchemaHomePage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${process.env.WEBSITE_URL}/`,
        url: `${process.env.WEBSITE_URL}/`,
        name: "Shakeef Ahmed Rakin | Full Stack Engineer",
        isPartOf: {
          "@id": `${process.env.WEBSITE_URL}/#website`,
        },
        about: {
          "@id": `${process.env.WEBSITE_URL}/#person`,
        },
        primaryImageOfPage: {
          "@id": `${process.env.WEBSITE_URL}/#primaryImage`,
        },
        image: {
          "@id": `${process.env.WEBSITE_URL}/#primaryImage`,
        },
        award: awards.map((award) => `${award.title}-${award.position}`),
        thumbnailUrl: `${process.env.WEBSITE_URL}/og_images/homepage.png`,
        dateModified: new Date().toISOString(),
        description:
          "Full Stack Engineer from Dhaka, Bangladesh with a strong background in developing web applications and integrating AI solutions.",
        breadcrumb: {
          "@id": `${process.env.WEBSITE_URL}/#breadcrumb`,
        },
        sourceOrganization: {
          "@id": `${process.env.WEBSITE_URL}/#organization`,
        },
        inLanguage: "en-US",
        potentialAction: socialLinks.map((link) => {
          return {
            "@type": "ViewAction",
            name: `Follow ${link.name}`,
            target: link.url,
          };
        }),
      },
      {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": `${process.env.WEBSITE_URL}/#primaryImage`,
        url: `${process.env.WEBSITE_URL}/hero.png`,
        contentUrl: `${process.env.WEBSITE_URL}/hero.png`,
        caption: "Shakeef Ahmed Rakin - Full Stack Engineer",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${process.env.WEBSITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${process.env.WEBSITE_URL}`,
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${process.env.WEBSITE_URL}/#website`,
        url: `${process.env.WEBSITE_URL}/`,
        name: "Shakeef Ahmed Rakin",
        description: "Software Developer &amp; Full Stack Engineer",
        publisher: {
          "@id": `${process.env.WEBSITE_URL}/#person`,
        },
        potentialAction: [],
        inLanguage: "en-US",
      },
      {
        "@type": "Person",
        "@id": `${process.env.WEBSITE_URL}/#person`,
        name: "Shakeef Ahmed Rakin",
        image: {
          "@type": "ImageObject",
          inLanguage: "en-US",
          url: `${process.env.WEBSITE_URL}/hero.png`,
          contentUrl: `${process.env.WEBSITE_URL}/hero.png`,
          caption: "Shakeef Ahmed Rakin - Full Stack Engineer",
        },
        sameAs: socialLinks.map((link) => link.url),
      },
      {
        "@type": "Organization",
        "@id": `${process.env.WEBSITE_URL}/#organization`,
        image: {
          "@id": `${process.env.WEBSITE_URL}/#primaryImage`,
        },
        url: `${process.env.WEBSITE_URL}`,
        sameAs: socialLinks.map((link) => link.url),
        logo: `${process.env.WEBSITE_URL}/logos/logo.png`,
        name: "Shakeef Ahmed Rakin",
        description:
          "Full Stack Engineer from Dhaka, Bangladesh with a strong background in developing web applications and integrating AI solutions.",
        email: "shakeef.rakin321@gmail.com",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
