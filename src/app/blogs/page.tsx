import TitleLarge from "../_components/ui/TitleLarge";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";

export default function BlogPage() {
  return (
    <>
      <LayoutWrapper>
        <TitleLarge firstTitle="My" secondTitle="Blogs" isPrimary></TitleLarge>
        <div className="py-56">
          <div className="text-center">
            <p className="text-xl text-red-500 font-heading font-bold">
              Page is under construction. Please check back later.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
