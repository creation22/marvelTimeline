import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Hide the floating Next.js "N" / Dev Tools indicator in development */
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
    ],
  },
};

export default nextConfig;
