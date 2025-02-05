import { ButtonPrimaryFilled } from "../_components/ui/Buttons";
import TitleLarge from "../_components/ui/TitleLarge";
import TitleMedium from "../_components/ui/TitleMedium";
import LayoutWrapper from "../_components/wrappers/LayoutWrapper";
import { GrDocumentDownload } from "react-icons/gr";

export default function ResumePage() {
  return (
    <>
      <LayoutWrapper>
        <TitleLarge firstTitle="My" secondTitle="Resume" isPrimary></TitleLarge>

        <TitleMedium title="Overview and Download"></TitleMedium>
        <p className="font-body text-sm md:text-base text-text mb-3">
          Explore my professional journey, skills, and experiences. You can view
          a detailed overview of my resume and download the PDF version for your
          reference using the link below.
        </p>
        <ButtonPrimaryFilled
          href="https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/view"
          ariaLabel="Download Resume"
          openInNewTab={true}
          className="w-full md:w-auto"
        >
          Download Resume <GrDocumentDownload className="w-4 h-4" />
        </ButtonPrimaryFilled>
        <hr className="my-3" />
        <iframe
          className="h-full mx-auto max-w-2xl w-full min-h-[75vh] bg-[#1B1B1B] pt-1 pb-1 pl-1 rounded-lg"
          src="https://drive.google.com/file/d/1KEX5j0xOPu2IFVyMyHDRlAR04qb7Pauz/preview"
        ></iframe>
      </LayoutWrapper>
    </>
  );
}
