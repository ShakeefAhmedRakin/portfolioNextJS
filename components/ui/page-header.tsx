import { TypographyH1, TypographyP } from "./typography";
import { HeaderWrapper } from "./wrappers";
import { cn } from "@/lib/utils";
import { ANIMATE_FADE_UP } from "@/lib/animations";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <HeaderWrapper wrapperClassName={cn("pt-10 xl:pt-16", ANIMATE_FADE_UP)}>
      <TypographyH1 className="font-light">{title}</TypographyH1>
      {subtitle && (
        <TypographyP className="text-foreground/65 mt-2">
          {subtitle}
        </TypographyP>
      )}
    </HeaderWrapper>
  );
}
