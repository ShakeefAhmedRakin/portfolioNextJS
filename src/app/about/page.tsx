import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import { SetSchemaAboutPage } from "../_util/metadata/AboutPage/SetSchemaAboutPage";
import { Metadata } from "next";
import { MetadataAboutPage } from "../_util/metadata/AboutPage/MetadataAboutPage";
import AboutBanner from "./_components/AboutBanner";
import LeftComponent from "./_components/LeftComponent";
import RightComponent from "./_components/RightComponent";
import ViewResumeButton from "./_components/ViewResumeButton";

export function generateMetadata(): Metadata {
  return MetadataAboutPage;
}
export default function AboutPage() {
  return (
    <>
      <SetSchemaAboutPage />
      <LayoutWrapper className="bg-backgroundDark">
        {/* <TitleLarge firstTitle="About" secondTitle="Me" isPrimary={true} /> */}
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
          <div className="bg-gradient-to-t from-primary to-secondary p-8 rounded-b-lg flex flex-col justify-center items-center gap-y-4">
            <ViewResumeButton />
            <p className="text-white font-body text-center text-xs whitespace-nowrap md:text-sm">
              &copy; {new Date().getFullYear()} Shakeef Ahmed Rakin. All rights
              reserved.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
