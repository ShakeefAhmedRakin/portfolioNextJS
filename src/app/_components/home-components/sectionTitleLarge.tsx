import { ReactNode } from "react";

export default function SectionTitleLarge({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={`font-heading font-bold text-2xl md:text-3xl lg:text-4xl ${className}`}
      id={id}
    >
      {children}
    </h2>
  );
}
