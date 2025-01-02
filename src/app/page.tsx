import Hero from "./_components/home/hero";
import FeaturedProjects from "./_components/home/featured-projects";
import SetSchemaHomePage from "./_util/metadata/HomePage/SetSchemaHomePage";
import FeaturedAchievements from "./_components/home/featured-achievements";
import FeaturedResearch from "./_components/home/featured-research";

export default function Home() {
  return (
    <>
      <SetSchemaHomePage />
      <Hero />
      <FeaturedAchievements />
      <FeaturedProjects />
      <FeaturedResearch />
    </>
  );
}
