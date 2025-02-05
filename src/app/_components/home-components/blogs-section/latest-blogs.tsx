import LayoutWrapper from "../../wrappers/LayoutWrapper";
import Blogs from "./_components/blogs";
import SectionTitleMedium from "../sectionTitleMedium";
import SectionTitleLarge from "../sectionTitleLarge";

export default function LatestBlogs() {
  return (
    <>
      <LayoutWrapper className="bg-backgroundAlt relative overflow-hidden">
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
        <div className="w-[100px] md:w-[200px] bg-primary blur-[80px] aspect-square rounded-full opacity-30 shadow-2xl shadow-secondary absolute top-0 left-0 z-0 pointer-events-none"></div>
        <div className="w-[100px] md:w-[200px] bg-secondary blur-[60px] aspect-square rounded-full opacity-20 shadow-2xl shadow-primary absolute right-0 bottom-0 z-0 pointer-events-none"></div>
        <div className="w-[120px] md:w-[250px] bg-secondary blur-[60px] aspect-square rounded-full opacity-20 shadow-2xl shadow-primary absolute left-[10%] bottom-20 z-0 pointer-events-none"></div>
        <div className="w-[160px] md:w-[320px] bg-primary blur-[60px] aspect-square rounded-full opacity-20 shadow-2xl shadow-secondary absolute right-[20%] top-20 z-0 pointer-events-none"></div>
      </LayoutWrapper>
    </>
  );
}
