import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import { SetSchemaAboutPage } from "../_util/metadata/AboutPage/SetSchemaAboutPage";
import { Metadata } from "next";
import { MetadataAboutPage } from "../_util/metadata/AboutPage/MetadataAboutPage";
import AboutBanner from "./_components/AboutBanner";
import LeftComponent from "./_components/LeftComponent";
import RightComponent from "./_components/RightComponent";
import CopyRightBanner from "./_components/CopyRightBanner";

export function generateMetadata(): Metadata {
  return MetadataAboutPage;
}
export default function AboutPage() {
  return (
    <>
      <SetSchemaAboutPage />
      <LayoutWrapper className="bg-backgroundDark">
        {/* RESUME START */}
        <div className="shadow-primary shadow-md rounded-lg">
          <AboutBanner />
          <div className="flex flex-col md:flex-row gap-y-4 bg-background p-4 lg:p-6">
            <div className=" md:max-w-[230px] lg:max-w-xs">
              <LeftComponent />
            </div>
            <div className="divider divider-horizontal hidden md:flex -mt-6 -mb-6 after:bg-secondary before:bg-secondary before:w-[2px] after:w-[2px]"></div>
            <div className="col-span-2 flex-1">
              <RightComponent />
            </div>
          </div>
          <CopyRightBanner />
        </div>
        {/* RESUME END */}
      </LayoutWrapper>
    </>
  );
}
