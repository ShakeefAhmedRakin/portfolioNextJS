export default function TextComponent({ content }: { content: string }) {
  return (
    <p className="leading-normal md:leading-5 lg:leading-7 font-body font-light text-text text-xs lg:text-base">
      {content}
    </p>
  );
}
