export function SkeletonProjectCard() {
  return (
    <li className="outline-primary/20 intersect:animate-fade-up intersect:animate-delay-200 animate-ease animate-duration-[1500ms] intersect-once relative mt-2 h-[300px] overflow-hidden bg-transparent outline">
      <div className="flex h-full w-full flex-col space-y-3 p-6">
        <div className="flex justify-between gap-2">
          <div className="bg-secondary/80 h-4 w-1/4 animate-pulse rounded" />
          <div className="bg-secondary/80 h-4 w-1/4 animate-pulse rounded" />
        </div>
        <div className="bg-secondary/80 h-6 w-3/4 animate-pulse rounded" />
        <div className="bg-secondary/70 h-4 w-2/3 animate-pulse rounded" />
        <div className="bg-secondary/60 relative mt-2 h-40 w-full flex-1 animate-pulse rounded-2xl duration-300 md:-bottom-10 md:mt-0" />
      </div>
    </li>
  );
}
