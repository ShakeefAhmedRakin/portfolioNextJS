import { Graph } from "schema-dts";
import work from "../../../_data/work.json";
import education from "../../../_data/education.json";
import skills from "../../../_data/skills.json";
import { socialLinks } from "@/app/_data/socialLinks";
import personalData from "../../../_data/personalData.json";

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
        name: `${personalData.Person.FullName}`,
        alternateName: [
          ...socialLinks.map((link) => link.url),
          `${process.env.WEBSITE_URL}`,
        ],
        additionalName: `${personalData.Person.LastName}`,
        description: `${personalData.About.Description}`,
        birthDate: `${personalData.Person.BirthDate}`,
        birthPlace: `${personalData.Person.Location}`,
        email: `mailto:${personalData.Person.Email}`,
        gender: `${personalData.Person.Gender}`,
        nationality: `${personalData.Person.Nationality}`,
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
        knowsAbout: skills.map((skill) => skill.title),
        knowsLanguage: personalData.Person.KnownLanguages,
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
