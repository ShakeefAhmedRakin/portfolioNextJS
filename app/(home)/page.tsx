import ProjectsSection from "./_components/projects-section/projects-section";
import ExpertiseSection from "./_components/expertise-section/expertise-section";
import HeroSection from "./_components/hero-section/hero-section";
import AchievementsSection from "./_components/achievements-section/achievements-section";
import ResearchSection from "./_components/research-section/research-section";
import BlogsSection from "./_components/blogs-section/blogs-section";
import SetSchemaHomePage from "@/metadata/schemas/schemaHomePage";
import getMetadata from "@/metadata/utils/get-metadata";
import SiteMetadata from "@/metadata/site-metadata";

export function generateMetadata() {
  return getMetadata(SiteMetadata.HOME);
}

export default function HomePage() {
  return (
    <>
      <SetSchemaHomePage />
      <HeroSection />
      <ExpertiseSection />
      <AchievementsSection />
      <ProjectsSection />
      <ResearchSection />
      <BlogsSection />
    </>
  );
}
