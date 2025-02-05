import TextComponent from "./TextComponent";
import TitleComponent from "./TitleComponent";

type CaseTextProps = {
  hasTitle: boolean;
  title: string;
  content: string;
};

export default function CaseText({ hasTitle, title, content }: CaseTextProps) {
  return (
    <section>
      {hasTitle && title && <TitleComponent title={title} />}
      <TextComponent content={content as string} />
    </section>
  );
}
