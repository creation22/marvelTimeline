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
      // Old / unused routes from earlier app shells → live pages
      { source: "/movies", destination: "/timeline", permanent: false },
      { source: "/movies/:path*", destination: "/timeline", permanent: false },
      { source: "/watch-guide", destination: "/timeline", permanent: false },
      { source: "/dashboard", destination: "/timeline", permanent: false },
      { source: "/admin", destination: "/timeline", permanent: false },
      { source: "/events", destination: "/timeline", permanent: false },
      { source: "/events/:path*", destination: "/timeline", permanent: false },
      { source: "/locations", destination: "/characters", permanent: false },
      { source: "/locations/:path*", destination: "/characters", permanent: false },
      { source: "/organizations", destination: "/characters", permanent: false },
      { source: "/organizations/:path*", destination: "/characters", permanent: false },
      { source: "/infinity-stones", destination: "/timeline", permanent: false },
      { source: "/infinity-stones/:path*", destination: "/timeline", permanent: false },
      { source: "/multiverse", destination: "/timeline", permanent: false },
    ];
  },
};

export default nextConfig;
