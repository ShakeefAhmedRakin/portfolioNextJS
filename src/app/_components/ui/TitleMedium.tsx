export default function TitleMedium({
  id,
  title,
}: {
  id?: string;
  title: string;
}) {
  return (
    <h2
      className="font-heading text-text font-semibold text-md md:text-lg xl:text-xl mb-2"
      id={id}
    >
      {title}
    </h2>
  );
}
