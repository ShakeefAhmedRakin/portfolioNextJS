import { Metadata } from "next";
import personalData from "../../../../_data/personalData.json";
import achievements from "../../../../_data/achievements.json";

export async function generateMetadataForAchievementBlogPage({
  id,
}: {
  id: string;
}): Promise<Metadata> {
  const achievement = achievements.find((achievement) => achievement.id === id);

  return {
    title: achievement?.seo?.googleIndexing?.title || "Achievement Details",
    description:
      achievement?.seo?.googleIndexing?.description ||
      "Explore details about this achievement.",
    alternates: {
      canonical: `${process.env.WEBSITE_URL}/achievements/${achievement?.id}`,
    },
    openGraph: {
      title: achievement?.seo?.openGraphCard?.title || achievement?.blog?.title,
      type: "article",
      description:
        achievement?.seo?.openGraphCard?.description ||
        achievement?.blog?.summary,
      authors: achievement?.people?.map((person) => person.name) || [],
      url: `${process.env.WEBSITE_URL}/achievements/${achievement?.id}`,
      images: [
        {
          url:
            achievement?.seo?.openGraphCard?.image ||
            achievement?.mainImage?.url ||
            achievement?.photo ||
            "/logos/logo.png",
          alt:
            achievement?.seo?.openGraphCard?.imgAlt ||
            achievement?.mainImage?.alt ||
            "Achievement Image",
        },
      ],
      siteName: `${personalData.Person.SiteName}`,
    },
    twitter: {
      title: achievement?.seo?.twitterCard?.title || achievement?.blog?.title,
      description:
        achievement?.seo?.twitterCard?.description ||
        achievement?.blog?.summary,
      images: [
        {
          url:
            achievement?.seo?.twitterCard?.image ||
            achievement?.mainImage?.url ||
            achievement?.photo ||
            "/logos/logo.png",
          alt:
            achievement?.seo?.twitterCard?.imgAlt ||
            achievement?.mainImage?.alt ||
            "Achievement Image",
        },
      ],
    },
  };
}
