import { ButtonTertiaryOutline } from "@/app/_components/ui/Buttons";
import { IoIosDocument } from "react-icons/io";
import personalData from "../../_data/personalData.json";

export default function CopyRightBanner() {
  return (
    <div className="bg-gradient-to-t from-primary to-secondary p-8 rounded-b-lg flex flex-col justify-center items-center gap-y-4">
      <ButtonTertiaryOutline
        className="whitespace-nowrap min-w-44"
        href={personalData.Person.FullCVLink}
        aria-label="View Full Resume"
        openInNewTab
        variant="white"
      >
        FULL CV <IoIosDocument className="text-lg" />
      </ButtonTertiaryOutline>
      <p className="text-white font-body text-center text-[10px] whitespace-nowrap md:text-sm">
        &copy; {new Date().getFullYear()} {personalData.Person.FullName}. All
        rights reserved.
      </p>
    </div>
  );
}
