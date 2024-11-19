import Hero from "./_components/home/hero";
import Highlights from "./_components/home/highlights";
import FeaturedProjects from "./_components/home/featuredprojects";
import { Person, WithContext } from "schema-dts";
import awards from "./_data/awards.json";
import work from "./_data/work.json";

export default function Home() {
  // Prepare JSON-LD
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shakeef Ahmed Rakin",
    additionalName: "Rakin",
    affiliation: work.map((item) => {
      return { "@type": "Organization", name: item.company };
    }),
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Cambridge International School",
        url: "https://www.cambridgeinternational.org",
      },
      {
        "@type": "EducationalOrganization",
        name: "BRAC University",
        url: "https://www.bracu.ac.bd",
      },
    ],
    award: awards.map((award) => award.title),
    birthDate: "2002-11-07",
    birthPlace: "Dhaka, Bangladesh",
    email: "mailto:shakeef.rakin321@gmail.com",
    gender: "Male",
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      skills: [
        "Full-Stack Development",
        "Machine Learning",
        ".NET Development",
        "UI/UX Design",
      ],
    },
    jobTitle: [
      "Full Stack Developer",
      "Full Stack Engineer",
      ".NET Software Developer",
      "Machine Learning Engineer",
    ],
    nationality: "Bangladeshi",
    worksFor: work.map((item) => {
      return { "@type": "Organization", name: item.company };
    }),
    image: "/hero.jpg",
    url: process.env.WEBSITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/shakeef-ahmed-rakin/",
      "https://github.com/ShakeefAhmedRakin",
    ],
    knowsAbout: [
      "Web Development",
      "Machine Learning",
      "MERN Stack",
      ".NET",
      "Software Engineering",
    ],
    knowsLanguage: ["English", "Bengali"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Highlights />
      <FeaturedProjects />
    </>
  );
}
