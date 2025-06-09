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

export function generateOgImageUrl({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}): string {
  const baseUrl = process.env.WEBSITE_URL ?? "http://localhost:3000";
  const params = new URLSearchParams();

  if (title) params.set("title", title);
  if (subtitle) params.set("subtitle", subtitle);

  return `${baseUrl}/api/og?${params.toString()}`;
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
