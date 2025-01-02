export default function SectionTitle({
  titleOne = "",
  titleTwo = "",
  paragraph = "",
  type,
}: {
  titleOne?: string;
  titleTwo?: string;
  paragraph?: string;
  type: "primary" | "secondary";
}) {
  return (
    <>
      <div className="mb-4 md:mb-8">
        <h1 className="font-heading text-text font-bold text-lg md:text-2xl lg:text-3xl text-center">
          {titleOne}
        </h1>
        <h2
          className={`font-heading font-bold text-lg md:text-2xl lg:text-3xl text-center my-0 md:my-1 ${
            type === "primary" ? "text-primary" : "text-secondary"
          }`}
        >
          {titleTwo}
        </h2>
        <p className="font-body text-text text-center font-light max-w-md mx-auto text-xs md:text-sm lg:text-base">
          {paragraph}
        </p>
      </div>
    </>
  );
}
