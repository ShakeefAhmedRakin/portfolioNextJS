import Hero from "./_components/home-components/hero";
import FeaturedProjects from "./_components/home-components/featured-projects";
import SetSchemaHomePage from "./_util/metadata/HomePage/SetSchemaHomePage";
import FeaturedAchievements from "./_components/home-components/featured-achievements";
import FeaturedResearch from "./_components/home-components/featured-research";
import { Metadata } from "next";
import { MetadataHomePage } from "./_util/metadata/HomePage/MetadataHomePage";
import Expertise from "./_components/home-components/expertise";

export function generateMetadata(): Metadata {
  return MetadataHomePage;
}
export default function Home() {
  return (
    <>
      <SetSchemaHomePage />
      <Hero />
      <Expertise />
      <FeaturedAchievements />
      <FeaturedProjects />
      <FeaturedResearch />
    </>
  );
}
