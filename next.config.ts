import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/diyaloc',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
