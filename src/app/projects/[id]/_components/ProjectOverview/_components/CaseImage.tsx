import ImageComponent from "./ImageComponent";
import TitleComponent from "./TitleComponent";

interface CaseImageProps {
  hasTitle: boolean;
  title?: string;
  content: {
    image?: {
      url?: string;
      alt?: string;
      caption?: string;
    };
  };
}

export default function CaseImage({
  hasTitle,
  title,
  content,
}: CaseImageProps) {
  return (
    <section>
      {hasTitle && title && <TitleComponent title={title} />}
      <ImageComponent
        url={
          "image" in content && content?.image?.url ? content?.image?.url : ""
        }
        alt={
          "image" in content && content?.image?.alt
            ? content?.image?.alt
            : `Image for ${title}`
        }
        caption={
          (typeof content === "object" &&
            "image" in content &&
            content?.image?.caption) ||
          "Missing Caption"
        }
        isCaseImage={true}
      />
    </section>
  );
}
