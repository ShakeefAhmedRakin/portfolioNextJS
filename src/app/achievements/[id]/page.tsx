import achievements from "../../_data/achievements.json";
import { Metadata } from "next";
import { generateMetadataForAchievementBlogPage } from "@/app/_util/metadata/AchievementsPage/AchievementBlogPage/MetadataAchievementBlogPage";
import { SetSchemaAchievementBlogPage } from "@/app/_util/metadata/AchievementsPage/AchievementBlogPage/SetSchemaAchievementBlogPage";
import LayoutWrapper from "@/app/_components/wrappers/LayoutWrapper";
import OtherAchievements from "./_components/otherAchievements";
import Collaboration from "./_components/collaboration";
import InfoCard from "./_components/infoCard";
import ArticleComponent from "./_components/articleComponent";
import MediumButton from "@/app/blogs/_components/mediumButton";
import { GrAchievement } from "react-icons/gr";
import { notFound } from "next/navigation";
import { MetadataNotFoundPage } from "@/app/_util/metadata/NotFoundPage/MetaDataNotFoundPage";

export async function generateStaticParams() {
  return achievements.map((achievement) => ({
    id: achievement.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const achievement = achievements.find((achievement) => achievement.id === id);

  if (achievement) {
    return generateMetadataForAchievementBlogPage({ id });
  } else {
    return MetadataNotFoundPage;
  }
}

export default async function AchievementDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const achievement = achievements.find((achievement) => achievement.id === id);

  if (!achievement) {
    return notFound();
  }

  return (
    <>
      <SetSchemaAchievementBlogPage id={id} />
      <LayoutWrapper>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full flex-1">
            <ArticleComponent idOfCurrentAchievement={id} />
          </div>
          <div className="md:max-w-[220px] w-full lg:max-w-xs flex flex-col gap-y-4">
            <div className="bg-background p-3 rounded-lg shadow-md space-y-4">
              <InfoCard idOfCurrentAchievement={id} />
              <Collaboration idOfCurrentAchievement={id} />
              <OtherAchievements idOfCurrentAchievement={id} />
              <MediumButton />
            </div>
            {/* FILLER SPACE IN DESKTOP SCREEN */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg flex-1 shadow-md shadow-primary relative flex items-center justify-center overflow-hidden">
              <GrAchievement className="absolute text-white opacity-10 text-[500px] pointer-events-none" />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
