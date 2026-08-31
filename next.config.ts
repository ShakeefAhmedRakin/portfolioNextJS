import type { NextConfig } from "next";
import createWithVercelToolbar from "@vercel/toolbar/plugins/next";

// Additional remote image hosts, beyond the defaults below, as a comma-separated
// list (e.g. "images.mycdn.com,cdn.example.com"). Add your own content's image
// host here instead of editing this file if it doesn't come from Unsplash/Medium.
const additionalImageHosts = (process.env.ADDITIONAL_IMAGE_HOSTS ?? "")
  .split(",")
  .map((hostname) => hostname.trim())
  .filter(Boolean);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
      ...additionalImageHosts.map((hostname) => ({
        protocol: "https" as const,
        hostname,
      })),
    ],
  },
};

const withVercelToolbar = createWithVercelToolbar();

export default withVercelToolbar(nextConfig);
