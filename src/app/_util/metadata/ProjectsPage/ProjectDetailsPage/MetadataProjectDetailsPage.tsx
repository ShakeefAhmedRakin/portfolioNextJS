import { Metadata } from "next";
import personalData from "../../../../_data/personalData.json";
import projects from "../../../../_data/projects.json";

export async function generateMetadataForProjectDetailsPage({
  id,
}: {
  id: string;
}): Promise<Metadata> {
  const project = projects.find((project) => project.id === id);

  return {
    title:
      project?.title && project?.subtitle
        ? `${project?.title} - ${project?.subtitle}`
        : "Project Not Found",
    description: project?.summary
      ? `${project?.summary.substring(0, 140) + "..."}`
      : `Project Not Found.`,
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/projects/${project?.id}`,
    },
    openGraph: {
      title: project?.title,
      type: "article",
      description:
        project?.summary.substring(0, 140) + "..." ||
        "Explore details about this project.",
      authors: personalData.Person.FullName,
      url: `${process.env.WEBSITE_URL}/projects/${project?.id}`,
      images: [
        {
          url: project?.coverPhoto?.url || "/logos/logo.png",
          alt: "Project Image",
        },
      ],
      siteName: `${personalData.Person.SiteName}`,
    },
    twitter: {
      title: project?.title || "Project Title",
      description:
        project?.summary.substring(0, 140) + "..." ||
        "Explore details about this project.",
      images: [
        {
          url: project?.coverPhoto?.url || "/logos/logo.png",
          alt: "Project Image",
        },
      ],
    },
  };
}
