/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Removed static export configuration to support API routes
  // output: "export",
  // trailingSlash: true,
  // distDir: "out",
};

export default nextConfig;
