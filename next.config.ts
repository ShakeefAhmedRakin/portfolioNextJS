import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "scontent.fdac14-1.fna.fbcdn.net",
      "i.ibb.co.com",
      "media.licdn.com",
      "i.postimg.cc",
    ], // Add the external image domain here
  },
  async redirects() {
    return [
      {
        source: "/:path*", // This matches any path
        destination: "https://shakeefahmedrakin.vercel.app/:path*", // Redirects to non-www version
        permanent: true, // This is a 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
