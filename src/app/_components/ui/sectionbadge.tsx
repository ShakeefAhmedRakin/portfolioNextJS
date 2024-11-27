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
              ? "text-primary bg-primary-lighter shadow-primary"
              : "text-secondary bg-secondary-lighter shadow-secondary"
          } py-2 px-8 text-center rounded-full font-heading font-semibold text-xs md:text-xs shadow`}
        >
          {titleContent.toUpperCase()}
        </span>
      </div>
    </>
  );
}
