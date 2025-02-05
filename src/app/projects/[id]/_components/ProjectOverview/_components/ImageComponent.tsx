import Image from "next/image";

export default function ImageComponent({
  url,
  alt,
  caption,
  isCaseImage,
}: {
  url: string;
  alt: string;
  caption: string;
  isCaseImage: boolean;
}) {
  return (
    <div
      className={`${
        isCaseImage
          ? "bg-gray-100 dark:bg-backgroundAlt rounded w-full aspect-video max-h-80 relative"
          : "relative bg-gray-100 dark:bg-backgroundAlt rounded aspect-video md:aspect-auto"
      }`}
    >
      <Image
        src={url}
        alt={alt}
        title={alt}
        sizes="1000"
        fill={true}
        priority
        draggable={false}
        className="object-contain"
      ></Image>
      <span className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 font-heading rounded bg-black text-white bg-opacity-80 text-[9px] md:text-[10px] lg:text-xs px-1 py-0.5 whitespace-nowrap">
        {caption}
      </span>
    </div>
  );
}
