import { getWebsiteUrl } from "@/lib/utils";

export function generateOgImageUrl({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}): string {
  const baseUrl = getWebsiteUrl();
  const params = new URLSearchParams();

  if (title) params.set("title", title);
  if (subtitle) params.set("subtitle", subtitle);

  return `${baseUrl}/api/og?${params.toString()}`;
}
