import { TypographyH1, TypographyP } from "./typography";
import { HeaderWrapper } from "./wrappers";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <HeaderWrapper wrapperClassName="pt-10 xl:pt-16 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once">
      <TypographyH1 className="font-light">{title}</TypographyH1>
      {subtitle && (
        <TypographyP className="text-foreground/65 mt-2">
          {subtitle}
        </TypographyP>
      )}
    </HeaderWrapper>
  );
}
