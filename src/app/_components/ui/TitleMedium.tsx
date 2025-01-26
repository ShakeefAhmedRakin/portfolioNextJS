export default function TitleMedium({
  id,
  title,
  className,
}: {
  id?: string;
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`font-heading text-text font-semibold text-base md:text-lg xl:text-xl mt-2 ${className}`}
      id={id}
    >
      {title}
    </h2>
  );
}
