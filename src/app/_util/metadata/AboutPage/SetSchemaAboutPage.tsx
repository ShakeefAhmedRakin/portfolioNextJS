import { Graph } from "schema-dts";
import work from "../../../_data/work.json";
import education from "../../../_data/education.json";
import { skills } from "@/app/_data/skills";
import { socialLinks } from "@/app/_data/socialLinks";

export function SetSchemaAboutPage() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      // MAIN PAGE
      {
        "@type": "ProfilePage",
        "@id": `${process.env.WEBSITE_URL}/about/#about`,
        dateCreated: "2025-01-02T23:22:12.039Z",
        dateModified: new Date().toISOString(),
        mainEntity: {
          "@id": `${process.env.WEBSITE_URL}/about/#person`,
        },
        breadcrumb: {
          "@id": `${process.env.WEBSITE_URL}/about/#breadcrumb`,
        },
      },
      // MAIN ENTITY
      {
        "@id": `${process.env.WEBSITE_URL}/about/#person`,
        "@type": "Person",
        name: "Shakeef Ahmed Rakin",
        alternateName: [
          ...socialLinks.map((link) => link.url),
          `${process.env.WEBSITE_URL}`,
        ],
        additionalName: "Rakin",
        description: `Born and raised in Dhaka, Bangladesh, I started my coding journey during my undergraduate studies in Computer Science and Engineering. Towards the end of my university life, I actively participated in courses and competitions, where I gained hands-on experience in a wide range of fields, from full-stack web development to machine learning. These experiences helped me develop a strong foundation in both problem-solving and technical skills. Beyond work, I enjoy music, gaming, and anime.`,
        birthDate: "2002-11-07",
        birthPlace: "Dhaka, Bangladesh",
        email: "mailto:shakeef.rakin321@gmail.com",
        gender: "Male",
        nationality: "Bangladeshi",
        jobTitle: work.map((item) => item.position).join(", "),
        worksFor: work.map((item) => ({
          "@type": "Organization",
          name: item.company,
          url: item.companyLink ?? undefined,
          logo: `${process.env.WEBSITE_URL}${item.companyLogo}`,
        })),
        alumniOf: education.map((item) => ({
          "@type": "EducationalOrganization",
          name: item.institution,
          url: item.url,
        })),
        knowsAbout: skills.flatMap((item) =>
          item.skills.map((skill) => skill.name)
        ),
        knowsLanguage: ["English", "Bengali"],
        image: `${process.env.WEBSITE_URL}/og_images/aboutpage.png`,
        sameAs: [
          ...socialLinks.map((link) => link.url),
          `${process.env.WEBSITE_URL}`,
        ],
      },
      // BREAD CRUMBS
      {
        "@type": "BreadcrumbList",
        "@id": `${process.env.WEBSITE_URL}/about/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${process.env.WEBSITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${process.env.WEBSITE_URL}/about`,
          },
        ],
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
