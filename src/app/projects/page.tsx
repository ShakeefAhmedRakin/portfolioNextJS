import projects from "../_data/projects.json";
import ScrollToViewComponent from "../_components/animations/scrollComponent";
import { Metadata } from "next";
import { CreativeWorkSeries, WithContext } from "schema-dts";
import ProjectCard from "../_components/ui/projectcard";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import TitleLarge from "../_components/ui/TitleLarge";
import TitleMedium from "../_components/ui/TitleMedium";

export function generateMetadata(): Metadata {
  return {
    metadataBase: new URL(process.env.WEBSITE_URL || "http://localhost:3000"),
    title: "Shakeef Ahmed Rakin - Projects",
    description:
      "Explore the projects of Shakeef Ahmed Rakin, including full-stack development, machine learning, and more.",
    keywords: [
      "Shakeef Ahmed Rakin",
      "Projects",
      "Portfolio",
      "Machine Learning",
      "Full-Stack Development",
    ],
    publisher: "Shakeef Ahmed Rakin",
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/projects`,
    },
    robots: "index, follow",
    openGraph: {
      title: "Projects | Shakeef Ahmed Rakin",
      type: "website",
      description:
        "Explore the projects of Shakeef Ahmed Rakin, showcasing various competition experiences in full-stack development, machine learning, and more.",
      url: `${process.env.WEBSITE_URL}/projects`,
      images: [
        {
          url: "/og_images/projectspage.png",
          alt: "Shakeef Ahmed Rakin - Projects",
        },
      ],
      siteName: "Shakeef Ahmed Rakin - Portfolio",
    },
    twitter: {
      title: "Projects | Shakeef Ahmed Rakin",
      description:
        "Explore the projects of Shakeef Ahmed Rakin, including full-stack development, machine learning, and more.",
      images: [
        {
          url: "/og_images/projectspage.png",
          alt: "Shakeef Ahmed Rakin - Projects",
        },
      ],
    },
  };
}

export default function ProjectsPage() {
  const sortedAndGroupedProjects = ReadSortAndGroupProjectsByType();
  const jsonLd: WithContext<CreativeWorkSeries> = {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: "Shakeef Ahmed Rakin's Projects",
    description:
      "A collection of projects showcasing skills in Full-Stack Development, Machine Learning, and Software Engineering.",
    creator: {
      "@type": "Person",
      name: "Shakeef Ahmed Rakin",
      url: process.env.WEBSITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Shakeef Ahmed Rakin",
      logo: {
        "@type": "ImageObject",
        url: "/logos/logo.png",
      },
    },
    workExample: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      datePublished: project.date,
      url: `${process.env.WEBSITE_URL}/projects/${project.id}`,
      image: {
        "@type": "ImageObject",
        url: project.coverPhoto?.url || "/default-image.jpg",
        alt: project.coverPhoto?.alt || `Cover photo for ${project.title}`,
      },
      keywords: project.tags.join(", "),
      author: {
        "@type": "Person",
        name: "Shakeef Ahmed Rakin",
      },
    })),
    sameAs: [
      "https://www.linkedin.com/in/shakeef-ahmed-rakin/",
      "https://github.com/ShakeefAhmedRakin",
    ],
    additionalType: "https://schema.org/CreativeWorkSeries",
    genre: [
      "Full-Stack Development",
      "Machine Learning",
      "Software Engineering",
      "Web Development",
      "UI/UX Design",
      ".NET Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LayoutWrapper>
        <TitleLarge
          firstTitle="My"
          secondTitle="Projects"
          isPrimary={true}
        ></TitleLarge>

        <ScrollToViewComponent projectsByType={sortedAndGroupedProjects} />
        {Object.keys(sortedAndGroupedProjects).map((type) => (
          <section key={type} id={type} aria-labelledby={`${type}-heading`}>
            <hr className="my-4" />
            <TitleMedium id={`${type}-heading`} title={type} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedAndGroupedProjects[type].map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <hr className="my-4" />
          </section>
        ))}
      </LayoutWrapper>
    </>
  );
}

const ReadSortAndGroupProjectsByType = () => {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Group projects by type
  const sortedAndGroupedProjects = sortedProjects.reduce(
    (acc: { [key: string]: typeof projects }, project) => {
      if (!acc[project?.type]) {
        acc[project.type] = [];
      }
      acc[project.type].push(project);
      return acc;
    },
    {}
  );
  return sortedAndGroupedProjects;
};
