import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "scontent.fdac14-1.fna.fbcdn.net",
      "i.ibb.co.com",
      "i.ibb.co",
      "media.licdn.com",
      "i.postimg.cc",
    ], // Add the external image domain here
  },
};

export default nextConfig;
