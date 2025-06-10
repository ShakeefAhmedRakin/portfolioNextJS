import { HeaderWrapper, SectionWrapper } from "@/components/ui/wrappers";
import { SkeletonProjectCard } from "./_components/project-card-skeleton";

export default function Loading() {
  return (
    <>
      <HeaderWrapper wrapperClassName="pt-10 xl:pt-16 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once">
        <div className="bg-secondary/50 h-10 w-[160px] animate-pulse"></div>
        <div className="bg-secondary/50 mt-2 h-6 w-[320px] animate-pulse"></div>
      </HeaderWrapper>
      <SectionWrapper
        innerClassName="relative"
        wrapperClassName="relative pb-12 lg:pb-20 xl:pb-24 pt-6 xl:pt-8"
        padding={"header"}
      >
        <div className="intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once flex flex-wrap gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="bg-secondary/50 flex h-8"
              style={{
                width: `${Math.floor(Math.random() * (138 - 66 + 1) + 66)}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="bg-secondary/50 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once my-2 h-3 w-[48px] animate-pulse"></div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </ul>
      </SectionWrapper>
    </>
  );
}
