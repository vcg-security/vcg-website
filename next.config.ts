import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
} satisfies NextConfig;

export default nextConfig;
