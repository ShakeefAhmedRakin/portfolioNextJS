export default function TitleComponent({ title }: { title: string }) {
  return (
    <h4
      className="font-heading text-text font-bold text-md md:text-lg xl:text-xl mb-2"
      id={title}
    >
      {title}
    </h4>
  );
}
