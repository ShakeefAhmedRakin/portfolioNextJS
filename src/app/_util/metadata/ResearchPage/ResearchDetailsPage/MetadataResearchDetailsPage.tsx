import { Metadata } from "next";
import personalData from "../../../../_data/personalData.json";
import allResearch from "../../../../_data/research.json";

export async function generateMetadataForResearchDetailsPage({
  id,
}: {
  id: string;
}): Promise<Metadata> {
  const research = allResearch.find((research) => research.id === id);

  return {
    title: research?.title || "Research Title",
    description:
      research?.abstract.substring(0, 140) + "..." ||
      "Explore details about this research.",
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/research/${research?.id}`,
    },
    openGraph: {
      title: research?.title,
      type: "article",
      description:
        research?.abstract.substring(0, 140) + "..." ||
        "Explore details about this research.",
      authors: research?.authors?.map((person) => person.name) || [],
      url: `${process.env.WEBSITE_URL}/research/${research?.id}`,
      images: [
        {
          url: research?.thumbnail || "/logos/logo.png",
          alt: "Achievement Image",
        },
      ],
      siteName: `${personalData.Person.SiteName}`,
    },
    twitter: {
      title: research?.title || "Research Title",
      description:
        research?.abstract.substring(0, 140) + "..." ||
        "Explore details about this research.",
      images: [
        {
          url: research?.thumbnail || "/logos/logo.png",
          alt: "Research Image",
        },
      ],
    },
  };
}
