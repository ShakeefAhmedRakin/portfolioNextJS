import { SectionWrapper } from "@/components/ui/wrappers";
import { SectionHeader } from "@/components/ui/section-header";
import BackgroundGridOverlay from "@/components/ui/background-grid-overlay";
import BlogsGrid from "./blogs-grid";
import { siteSocialMap } from "@/content/site-socials";

export default function BlogsSection() {
  return (
    <SectionWrapper
      innerClassName="space-y-4 relative"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="Read some of my latest blogs"
        description="Explore my latest blog posts on web development, AI, and research projects"
        linkText="View All Blogs"
        linkHref={siteSocialMap.MEDIUM.url}
      />

      <BlogsGrid />

      <BackgroundGridOverlay />
    </SectionWrapper>
  );
}
