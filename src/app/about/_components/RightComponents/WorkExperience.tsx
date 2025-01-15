import TitleMedium from "@/app/_components/ui/TitleMedium";
import workData from "@/app/_data/work.json";
import WorkPositionsList from "./WorkPositionsList";

type WorkItem = {
  isActive: boolean;
  startDate: string;
  endDate: string | null;
  position: string;
  company: string;
  companyLink?: string | null;
  companyLogo?: string;
  description: string;
  projects: {
    name: string;
    logo: string;
    link?: string;
    description: string;
    responsibilities: string[];
  }[];
};

export default function WorkExperience() {
  const { active: activePositions, past: pastPositions } =
    sortAndCategorizePositions(workData);
  return (
    <div>
      {activePositions.length > 0 && (
        <section>
          <TitleMedium title="Current Positions" />
          <hr className="mt-2 mb-4" />
          <WorkPositionsList positions={activePositions} isActive={true} />
        </section>
      )}

      {pastPositions.length > 0 && (
        <section>
          <TitleMedium title="Past Positions" />
          <hr className="mt-2 mb-4" />
          <WorkPositionsList positions={pastPositions} isActive={false} />
        </section>
      )}
    </div>
  );
}

const sortAndCategorizePositions = (workData: WorkItem[]) => {
  const parseDate = (dateStr: string | null | undefined): Date => {
    return dateStr ? new Date(dateStr) : new Date();
  };

  const categorizedPositions = workData.reduce(
    (acc, item) => {
      if (item.isActive) {
        acc.active.push(item);
      } else {
        acc.past.push(item);
      }
      return acc;
    },
    { active: [] as WorkItem[], past: [] as WorkItem[] }
  );

  // Sort the positions by start date
  categorizedPositions.active.sort(
    (a, b) =>
      parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
  );
  categorizedPositions.past.sort(
    (a, b) =>
      parseDate(b.startDate).getTime() - parseDate(a.startDate).getTime()
  );

  return categorizedPositions;
};
