import TitleLarge from "../_components/ui/TitleLarge";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import ContactForm from "./_components/ContactForm";
import LinksSection from "./_components/LinksSection";

export default function GetInTouchPage() {
  return (
    <>
      <LayoutWrapper>
        <TitleLarge firstTitle="Get in" secondTitle="Touch" isPrimary={true} />
        <hr className="my-4" />
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className="font-body font-light text-text text-xs lg:text-base mb-4">
              {`I'm thrilled to connect with you! Whether you have a project in
                  mind, want to collaborate, or simply want to say hello, feel free
                  to reach out. You can contact me through the following channels.`}
            </p>
            <LinksSection />
          </div>
          <div className="flex-1">
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
