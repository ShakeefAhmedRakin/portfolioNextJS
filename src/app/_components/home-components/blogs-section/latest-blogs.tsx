import LayoutWrapper from "../../wrappers/LayoutWrapper";
import Blogs from "./_components/blogs";
import SectionTitleMedium from "../sectionTitleMedium";
import SectionTitleLarge from "../sectionTitleLarge";

export default function LatestBlogs() {
  return (
    <>
      <LayoutWrapper className="bg-backgroundAlt">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-x-16 gap-y-2 text-center md:text-left">
          {/* SECTION TITLE */}
          <div className="whitespace-nowrap max-w-none md:max-w-[200px] lg:max-w-xs xl:max-w-sm w-full">
            <SectionTitleLarge className="text-primary">
              Blogs
            </SectionTitleLarge>
            <SectionTitleMedium className="text-white">
              Latest Articles
            </SectionTitleMedium>
            <hr className="my-2" />
          </div>
          {/* SECTION CONTENT */}
          <Blogs />
        </div>
      </LayoutWrapper>
    </>
  );
}
