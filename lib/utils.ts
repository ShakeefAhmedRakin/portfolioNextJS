import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Achievements, workExperiences } from "@/.velite";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSortedJobs(
  jobs: typeof workExperiences,
): typeof workExperiences {
  return [...jobs].sort((a, b) => {
    const dateA = new Date(a.startDate).getTime();
    const dateB = new Date(b.startDate).getTime();
    return dateB - dateA;
  });
}

export function sortAchievementsByDate(items: Achievements[]): Achievements[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export function getJobDurationString(startDate: string): string {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(" ");
}

export function getJobStartEndDateString(
  start: string,
  endDate: string | null,
) {
  const startDate = new Date(start);
  const end = endDate ? new Date(endDate) : null;

  const format = (date: Date) =>
    date.toLocaleString("default", { month: "short", year: "numeric" });

  const startStr = format(startDate);
  const endStr = end ? format(end) : "Present";

  return `${startStr} – ${endStr}`;
}

export function formatDateString(date: string) {
  const parsedDate = new Date(date);
  return parsedDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
}
