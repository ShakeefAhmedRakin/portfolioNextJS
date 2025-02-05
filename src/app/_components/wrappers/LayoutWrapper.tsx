import React, { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
  className?: string;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  className = "bg-backgroundDark",
}) => {
  return (
    <section className={`${className}`}>
      <div
        className={`container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-16 lg:py-20`}
      >
        {children}
      </div>
    </section>
  );
};

export default LayoutWrapper;
