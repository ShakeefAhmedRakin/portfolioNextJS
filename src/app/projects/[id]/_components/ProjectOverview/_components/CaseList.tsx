import ListComponent from "./ListComponent";
import TitleComponent from "./TitleComponent";

import React from "react";

type CaseListProps = {
  hasTitle: boolean;
  title?: string;
  content: string[];
};

export default function CaseList({ hasTitle, title, content }: CaseListProps) {
  return (
    <section>
      {hasTitle && title && <TitleComponent title={title} />}
      <ListComponent content={Array.isArray(content) ? content : []} />
    </section>
  );
}
