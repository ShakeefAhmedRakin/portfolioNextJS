export default function SectionBadge({
  titleContent,
  type,
}: {
  titleContent: string;
  type: "primary" | "secondary";
}) {
  return (
    <>
      <div className="flex justify-center mb-2">
        <span
          className={`${
            type === "primary"
              ? "text-primary bg-primary-lighter"
              : "text-secondary bg-secondary-lighter"
          } py-2 px-8 text-center rounded-full font-heading font-semibold text-xs md:text-xs`}
        >
          {titleContent.toUpperCase()}
        </span>
      </div>
    </>
  );
}
