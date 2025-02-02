import { Metadata } from "next";
import TitleLarge from "../_components/ui/TitleLarge";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import Blogs from "./_components/blogs";
import MediumProfile from "./_components/mediumProfile";
import { MetadataBlogsPage } from "../_util/metadata/BlogsPage/MetadataBlogsPage";
import { SetSchemaBlogsPage } from "../_util/metadata/BlogsPage/SetSchemaBlogsPage";

export function generateMetadata(): Metadata {
  return MetadataBlogsPage;
}

export default function BlogPage() {
  return (
    <>
      <SetSchemaBlogsPage />
      <LayoutWrapper>
        <TitleLarge firstTitle="My" secondTitle="Blogs" isPrimary></TitleLarge>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="col-span-2 order-2 md:order-1">
            <Blogs />
          </div>
          <div className="order-1 h-full">
            <MediumProfile />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
