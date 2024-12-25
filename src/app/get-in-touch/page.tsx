import TitleLarge from "../_components/ui/TitleLarge";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import ContactSection from "./_components/ContactSection";
import LinksSection from "./_components/LinksSection";

export default function GetInTouchPage() {
  return (
    <>
      <LayoutWrapper>
        <TitleLarge firstTitle="Get in" secondTitle="Touch" isPrimary={true} />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <ContactSection />
          </div>
          <div className="flex-1">
            <LinksSection />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
