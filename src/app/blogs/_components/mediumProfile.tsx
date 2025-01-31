import { FaMediumM } from "react-icons/fa";
import MediumButton from "./mediumButton";

export default function MediumProfile() {
  return (
    <div className="h-full flex flex-col gap-y-4">
      <MediumButton />
      <div className="bg-gradient-to-br from-primary to-secondary rounded-lg flex-1 shadow-md shadow-primary relative flex items-center justify-center overflow-hidden">
        <FaMediumM className="text-3xl absolute text-white opacity-10 text-[700px]" />
      </div>
    </div>
  );
}
