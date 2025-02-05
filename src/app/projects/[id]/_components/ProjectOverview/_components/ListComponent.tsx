export default function ListComponent({ content }: { content: string[] }) {
  return (
    <ul>
      {Array.isArray(content) &&
        content?.map((point, index) => (
          <li
            key={`${index}-${point.substring(0, 10)}`}
            className="leading-normal md:leading-5 lg:leading-7 font-body font-light text-text text-xs lg:text-base list-disc list-inside"
          >
            {point}
          </li>
        ))}
    </ul>
  );
}
