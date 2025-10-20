import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Achievements, Projects, Research, workExperiences } from "@/.velite";

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

export function sortResearchByDate(items: Research[]): Research[] {
  return [...items].sort((a, b) => {
    if (a.isPublished !== b.isPublished) {
      return a.isPublished ? -1 : 1;
    }
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export function sortProjectsByDate(items: Projects[]): Projects[] {
  return [...items].sort((a, b) => {
    if (a.isOngoing !== b.isOngoing) {
      return a.isOngoing ? -1 : 1;
    }
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
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

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const binary = bytes.reduce((acc, b) => acc + String.fromCharCode(b), "");
  return `data:image/png;base64,${Buffer.from(binary, "binary").toString("base64")}`;
}

export function extractImagesFromMDX(content: string) {
  const matches = [...content.matchAll(/\{src:"([^"]+)",alt:"([^"]+)"\}/g)];

  const images = matches.map((m) => ({
    src: m[1],
    title: m[2],
  }));

  return images;
}
