import TitleLarge from "../_components/ui/TitleLarge";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import Blogs from "./_components/blogs";
import MediumProfile from "./_components/mediumProfile";

export default function BlogPage() {
  return (
    <>
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
