import { WebPage, WithContext } from "schema-dts";
import work from "../../../_data/work.json";
import education from "../../../_data/education.json";
import { skills } from "@/app/_data/skills";

export function SetSchemaAboutPage() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Shakeef Ahmed Rakin",
    description:
      "Learn more about Shakeef Ahmed Rakin, a Full Stack Engineer from Bangladesh with expertise in web development, problem-solving, and machine learning.",
    url: `${process.env.WEBSITE_URL}/about`,
    image: `${process.env.WEBSITE_URL}/og_images/aboutpage.png`,
    headline: "About Shakeef Ahmed Rakin",
    accountablePerson: {
      "@type": "Person",
      name: "Shakeef Ahmed Rakin",
      image: `${process.env.WEBSITE_URL}/hero.png`,
      url: `${process.env.WEBSITE_URL}`,
      jobTitle: work.map((item) => item.position),
    },
    editor: {
      "@type": "Person",
      name: "Shakeef Ahmed Rakin",
      image: `${process.env.WEBSITE_URL}/hero.png`,
      url: `${process.env.WEBSITE_URL}`,
      jobTitle: work.map((item) => item.position),
    },
    mainEntity: {
      "@type": "Person",
      name: "Shakeef Ahmed Rakin",
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
        "https://www.linkedin.com/in/shakeef-ahmed-rakin/",
        "https://github.com/ShakeefAhmedRakin",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
