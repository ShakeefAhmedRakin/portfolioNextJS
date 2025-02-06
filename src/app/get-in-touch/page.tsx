import { Metadata } from "next";
import TitleLarge from "../_components/ui/TitleLarge";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import { MetadataGetInTouchPage } from "../_util/metadata/GetInTouchPage/MetadataGetInTouchPage";
import ContactForm from "./_components/ContactForm";
import LinksSection from "./_components/LinksSection";
import { SetSchemaGetInTouchPage } from "../_util/metadata/GetInTouchPage/SetSchemaGetInTouchPage";

export function generateMetadata(): Metadata {
  return MetadataGetInTouchPage;
}

export default function GetInTouchPage() {
  return (
    <>
      <SetSchemaGetInTouchPage />
      <LayoutWrapper>
        <TitleLarge firstTitle="Get in" secondTitle="Touch" isPrimary={true} />
        <hr className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col h-full">
            <p className="font-body font-light text-text text-xs lg:text-base mb-4">
              {`I'm thrilled to connect with you! Whether you have a project in
                  mind, want to collaborate, or simply want to say hello, feel free
                  to reach out. You can contact me through the following channels.`}
            </p>
            <div className="flex-1">
              <LinksSection />
            </div>
          </div>
          <div>
            <ContactForm
              serviceID={process.env.EMAILJS_SERVICE_ID}
              templateID={process.env.EMAILJS_TEMPLATE_ID}
              publicKey={process.env.EMAILJS_PUBLIC_KEY}
            />
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
}
