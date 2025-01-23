import Hero from "./_components/home-components/sections/hero";
import FeaturedProjects from "./_components/home-components/sections/featured-projects";
import SetSchemaHomePage from "./_util/metadata/HomePage/SetSchemaHomePage";
import FeaturedAchievements from "./_components/home-components/sections/featured-achievements";
import FeaturedResearch from "./_components/home-components/sections/featured-research";
import { Metadata } from "next";
import { MetadataHomePage } from "./_util/metadata/HomePage/MetadataHomePage";
import Expertise from "./_components/home-components/sections/expertise";
import LatestBlogs from "./_components/home-components/sections/latest-blogs";

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
      <LatestBlogs />
      <FeaturedResearch />
    </>
  );
}
