import { ReactNode } from "react";

export default function SectionTitleMedium({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <h3
      className={`font-heading text-text font-semibold text-md md:text-lg xl:text-xl mt-2 ${className}`}
      id={id}
    >
      {children}
    </h3>
  );
}
