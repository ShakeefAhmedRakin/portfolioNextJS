import { ButtonPrimaryFilled } from "../../_components/ui/Buttons";
import { BiHome } from "react-icons/bi";

export default function ProjectNotFound() {
  return (
    <div className="px-4 flex flex-col gap-5 text-center items-center justify-center bg-background min-h-[calc(100vh-5rem)]">
      <h1 className="text-primary font-body text-6xl font-bold">404</h1>
      <h2 className="text-text font-body text-3xl font-semibold">
        Project Not Found
      </h2>
      <p className="text-text font-body font-extralight">
        {`Oops! The project you're looking for doesn't seem to exist or is under construction`}
      </p>
      <ButtonPrimaryFilled
        href="/"
        icon={<BiHome className="text-xl" />}
        ariaLabel="Go to homepage"
      >
        Go To Homepage
      </ButtonPrimaryFilled>
    </div>
  );
}
