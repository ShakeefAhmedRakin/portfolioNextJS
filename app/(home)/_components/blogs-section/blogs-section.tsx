import { SectionWrapper } from "@/components/ui/wrappers";
import { SectionHeader } from "@/components/ui/section-header";
import BlogsGrid, { BlogsGridSkeleton } from "./blogs-grid";
import { siteSocialMap } from "@/content/site-socials";
import { Suspense } from "react";

export default function BlogsSection() {
  return (
    <SectionWrapper
      innerClassName="space-y-4"
      wrapperClassName="bg-gradient-to-b from-transparent via-secondary/25 to-transparent"
    >
      <SectionHeader
        title="Recent writing"
        description="Explore my latest blog posts on web development, AI, and research projects"
        linkText="View All Blogs"
        linkHref={siteSocialMap.MEDIUM.url}
      />

      <Suspense fallback={<BlogsGridSkeleton />}>
        <BlogsGrid />
      </Suspense>
    </SectionWrapper>
  );
}
