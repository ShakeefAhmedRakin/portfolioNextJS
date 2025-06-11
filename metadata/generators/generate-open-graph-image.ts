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
