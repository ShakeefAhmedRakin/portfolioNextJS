import ViewResumeButton from "./ViewResumeButton";

export default function CopyRightBanner() {
  return (
    <div className="bg-gradient-to-t from-primary to-secondary p-8 rounded-b-lg flex flex-col justify-center items-center gap-y-4">
      <ViewResumeButton />
      <p className="text-white font-body text-center text-xs whitespace-nowrap md:text-sm">
        &copy; {new Date().getFullYear()} Shakeef Ahmed Rakin. All rights
        reserved.
      </p>
    </div>
  );
}
