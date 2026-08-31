export function getWebsiteUrl(): string {
  return process.env.WEBSITE_URL || "http://localhost:3000";
}
