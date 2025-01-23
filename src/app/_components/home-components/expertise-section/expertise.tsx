import LayoutWrapper from "../../wrappers/LayoutWrapper";
import ServiceCards from "./_components/service-cards";

export default function Expertise() {
  return (
    <>
      <LayoutWrapper className="bg-background">
        {/* TITLE CONTENT */}
        <h2 className="font-heading text-center font-bold text-secondary text-xl lg:text-4xl">
          My Expertise
        </h2>
        <h3 className="font-heading text-center font-bold text-base lg:text-xl text-text mt-2">
          Code that solves problems <br></br> one at a time.
        </h3>
        <hr className="my-3 md:my-5" />
        <ServiceCards />
      </LayoutWrapper>
    </>
  );
}
