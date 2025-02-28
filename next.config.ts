import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/contentful-image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  output: "standalone",
} satisfies NextConfig;

export default nextConfig;
