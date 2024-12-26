import { WebPage, WithContext } from "schema-dts";
import navigationLinks from "../../../_data/navigationLinks.json";
import { socialLinks } from "../../../_data/socialLinks";
import awards from "../../../_data/awards.json";

export default function SetSchemaHomePage() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    // =======================================================
    // PAGE SPECIFIC INITIAL DETAILS
    // =======================================================
    name: "Shakeef Ahmed Rakin | Full Stack Engineer",
    description:
      "Full Stack Engineer from Dhaka, Bangladesh, skilled in developing web applications and integrating AI solutions. Experienced in machine learning projects, including natural language processing and computer vision.",
    image: `${process.env.WEBSITE_URL}/hero.png`,
    author: {
      "@type": "Person",
      name: "Shakeef Ahmed Rakin",
    },
    // =======================================================
    // NAVIGATION BREADCRUMBS ( FOOTER INCLUDED )
    // =======================================================
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: navigationLinks.map((link, index) => {
        return {
          "@type": "ListItem",
          position: index + 1,
          name: link.label,
          item: `${process.env.WEBSITE_URL}${link.route}`,
          url: `${process.env.WEBSITE_URL}${link.route}`,
        };
      }),
    },
    // =======================================================
    // PAGE SPECIFIC DETAILS BELOW
    // =======================================================
    potentialAction: socialLinks.map((link) => ({
      "@type": "ViewAction",
      name: link.ariaLabel,
      target: link.url,
    })),
    // =================
    // FEATURED AWARDS
    // =================
    award: awards
      .filter((award) => award.isFeatured)
      .map((award) => award.title),
  };

  console.log(jsonLd);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
