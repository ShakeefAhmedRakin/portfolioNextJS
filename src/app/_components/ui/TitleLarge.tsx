export default function TitleLarge({
  firstTitle,
  secondTitle,
  isPrimary = true,
}: {
  firstTitle: string;
  secondTitle: string;
  isPrimary?: boolean;
}) {
  return (
    <h1 className="font-heading text-text font-bold text-2xl xl:text-3xl mb-4">
      {firstTitle}{" "}
      <span className={`text-${isPrimary ? "primary" : "secondary"}`}>
        {secondTitle}
      </span>
    </h1>
  );
}
