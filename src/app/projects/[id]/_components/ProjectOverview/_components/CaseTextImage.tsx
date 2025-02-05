import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";
import TitleComponent from "./TitleComponent";

interface CaseTextImageProps {
  content: {
    text?: string;
    image?: {
      url?: string;
      alt?: string;
      caption?: string;
    };
  };
  hasTitle: boolean;
  title?: string;
  imageOnLeft: boolean;
}

export default function CaseTextImage({
  content,
  hasTitle,
  title,
  imageOnLeft,
}: CaseTextImageProps) {
  return (
    <section>
      {typeof content === "object" && (
        <div className={`grid grid-cols-1 gap-y-4 gap-x-8 md:grid-cols-2`}>
          <div className={`${imageOnLeft ? "md:order-last" : ""}`}>
            {hasTitle && title && <TitleComponent title={title} />}
            <TextComponent
              content={
                "text" in content && typeof content.text === "string"
                  ? content.text
                  : ""
              }
            />
          </div>
          <ImageComponent
            url={
              "image" in content && content?.image?.url
                ? content?.image?.url
                : ""
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
            isCaseImage={false}
          />
        </div>
      )}
    </section>
  );
}
