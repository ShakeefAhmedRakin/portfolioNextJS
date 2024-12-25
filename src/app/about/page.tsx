import { Person, WithContext } from "schema-dts";
import education from "../_data/education.json";
import { skills } from "../_data/skills";
import work from "./../_data/work.json";

export default function About() {
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
      <section className="bg-backgroundDark">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
          <h1 className="font-heading text-text font-bold text-lg md:text-xl xl:text-3xl mb-4">
            About <span className="text-primary">Me</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="col-span-2">
              <p className="font-body font-light text-text text-xs lg:text-base">
                Born and raised in Dhaka, Bangladesh, I started my coding
                journey during my undergraduate studies in Computer Science and
                Engineering. Towards the end of my university life, I have
                actively participated in courses and competitions, where I
                gained hands-on experience in a wide range of fields, from
                full-stack web development to machine learning. These
                experiences helped me develop a strong foundation in both
                problem-solving and technical skills.
              </p>
              <p className="mt-4 font-body font-light text-text text-xs lg:text-base">
                Beyond work, I enjoy music, gaming, and anime. These hobbies of
                mine tend to keep me inspired and bring fresh perspectives to my
                problem-solving approach.
              </p>
            </div>
            {/* Education */}
            <div className="w-full max-w-full md:max-w-xs xl:max-w-md">
              <div className="border-l space-y-5 h-full">
                {education.map((item, index) => (
                  <div className="relative" key={index}>
                    <div className="absolute h-5 w-5 bg-primary rounded-full -left-2.5 border-4 border-backgroundDark"></div>
                    <div className="ml-4">
                      <p className="font-body font-medium italic text-primary text-xs">
                        {item.duration}
                      </p>
                      <h2 className="text-xs lg:text-sm font-semibold font-heading text-text mt-1 whitespace-nowrap">
                        {item.degree}
                      </h2>
                      <p className="font-body font-light text-text italic text-xs lg:text-sm">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16">
          <h1 className="font-heading text-text font-bold text-lg mb-4 md:text-xl xl:text-3xl">
            Technical <span className="text-secondary">Expertise</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category) => (
              <div
                key={category.category}
                className="bg-backgroundDark p-5 rounded-md text-text shadow-sm shadow-secondary"
              >
                <h1 className="font-heading text-lg font-bold mb-1">
                  {category.category}
                </h1>
                <p className="font-body mb-5 text-xs">{category.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="bg-background shadow rounded-lg p-4 flex gap-4 items-center"
                    >
                      <span className="text-xl min-w-[16px] max-w-[16px]">
                        {skill.icon}
                      </span>
                      <span className="flex-1 text-[10px] lg:text-xs font-medium font-heading">
                        {skill.name}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
