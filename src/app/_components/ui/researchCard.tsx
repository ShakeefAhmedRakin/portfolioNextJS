interface Research {
  status: {
    label: string;
    color: string;
  };
  title: string;
  lastUpdatedDate?: string;
  abstract: string;
}

interface ResearchCardProps {
  research: Research;
}

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <div className="p-4 bg-backgroundDark flex flex-col h-full rounded-lg shadow">
      <div className="flex items-center gap-2 my-1">
        <h3
          className={`text-xs font-heading font-bold uppercase py-0.5 px-1.5 bg-backgroundDark rounded-full w-fit -ml-1.5`}
          style={{ color: research.status.color }}
        >
          {research.status.label}
        </h3>
      </div>

      <h3 className="font-heading text-text font-bold text-xs md:text-sm">
        {research?.title}
      </h3>

      <p className="font-body text-text opacity-60 text-xs md:text-sm my-1">
        {new Date(research?.lastUpdatedDate ?? "").toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </p>

      <p className="text-[9px] md:text-xs font-body line-clamp-5 text-text">
        {research.abstract}
      </p>
    </div>
  );
}
