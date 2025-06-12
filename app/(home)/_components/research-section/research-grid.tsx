import { research } from "@/.velite";

import ResearchCard from "@/components/ui/research-card";

import { sortResearchByDate } from "@/lib/utils";

export default function ResearchGrid() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {sortResearchByDate(research)
        .filter((paper) => paper.isFeatured)
        .map((paper) => (
          <ResearchCard paper={paper} key={paper.slug} isHomePage />
        ))}
    </ul>
  );
}
