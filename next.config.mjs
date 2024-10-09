// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/producenter",
        destination: "/vin-producenter",
        permanent: true,
      },
      {
        source: "/vin-producenter/page",
        destination: "/vin-producenter",
        permanent: true,
      },
      {
        source: "/vin-producenter/page/1",
        destination: "/vin-producenter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
