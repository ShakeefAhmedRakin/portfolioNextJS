import { HeaderWrapper, SectionWrapper } from "@/components/ui/wrappers";
import { SkeletonProjectCard } from "./_components/project-card-skeleton";
import { ANIMATE_FADE_UP } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <>
      <HeaderWrapper wrapperClassName={cn("pt-10 xl:pt-16", ANIMATE_FADE_UP)}>
        <div className="bg-secondary/50 h-10 w-[160px] animate-pulse"></div>
        <div className="bg-secondary/50 mt-2 h-6 w-[320px] animate-pulse"></div>
      </HeaderWrapper>
      <SectionWrapper
        innerClassName="relative"
        wrapperClassName="relative pb-12 lg:pb-20 xl:pb-24 pt-6 xl:pt-8"
        padding={"header"}
      >
        <div className={cn(ANIMATE_FADE_UP, "flex flex-wrap gap-1.5")}>
          {[120, 90, 138, 72, 108].map((width, i) => (
            <div
              key={i}
              className="bg-secondary/50 flex h-8"
              style={{ width: `${width}px` }}
            ></div>
          ))}
        </div>
        <div className={cn("bg-secondary/50 my-2 h-3 w-[48px] animate-pulse", ANIMATE_FADE_UP)}></div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}
