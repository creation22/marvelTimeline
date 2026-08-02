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
  async redirects() {
    return [
      // Canonical timeline is /
      { source: "/timeline", destination: "/", permanent: false },
      // Old / unused routes from earlier app shells → live pages
      { source: "/movies", destination: "/", permanent: false },
      { source: "/movies/:path*", destination: "/", permanent: false },
      { source: "/watch-guide", destination: "/", permanent: false },
      { source: "/dashboard", destination: "/", permanent: false },
      { source: "/admin", destination: "/", permanent: false },
      { source: "/events", destination: "/", permanent: false },
      { source: "/events/:path*", destination: "/", permanent: false },
      { source: "/locations", destination: "/characters", permanent: false },
      { source: "/locations/:path*", destination: "/characters", permanent: false },
      { source: "/organizations", destination: "/characters", permanent: false },
      { source: "/organizations/:path*", destination: "/characters", permanent: false },
      { source: "/infinity-stones", destination: "/", permanent: false },
      { source: "/infinity-stones/:path*", destination: "/", permanent: false },
      { source: "/multiverse", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
