import { Achievements, Projects, Research, workExperiences } from "@/.velite";

function byDateDesc<T>(getDate: (item: T) => string) {
  return (a: T, b: T) =>
    new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime();
}

export function sortJobsByDate(
  jobs: typeof workExperiences,
): typeof workExperiences {
  return [...jobs].sort(byDateDesc((job) => job.startDate));
}

export function sortAchievementsByDate(items: Achievements[]): Achievements[] {
  return [...items].sort(byDateDesc((item) => item.date));
}

export function sortResearchByDate(items: Research[]): Research[] {
  return [...items].sort(byDateDesc((item) => item.date));
}

export function sortProjectsByDate(items: Projects[]): Projects[] {
  return [...items].sort((a, b) => {
    if (a.isOngoing !== b.isOngoing) {
      return a.isOngoing ? -1 : 1;
    }
    return byDateDesc<Projects>((item) => item.date)(a, b);
  });
}

export function getJobDurationString(
  startDate: string,
  endDate?: string | null,
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Add one extra month to the duration
  months += 1;

  // Adjust if months exceed 12
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

function formatMonthYear(date: Date, month: "short" | "long") {
  return date.toLocaleString("default", { month, year: "numeric" });
}

export function getJobStartEndDateString(
  start: string,
  endDate: string | null,
) {
  const startDate = new Date(start);
  const end = endDate ? new Date(endDate) : null;

  const startStr = formatMonthYear(startDate, "short");
  const endStr = end ? formatMonthYear(end, "short") : "Present";

  return `${startStr} – ${endStr}`;
}

export function formatDateString(date: string) {
  return formatMonthYear(new Date(date), "long");
}
