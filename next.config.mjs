/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  // Remove basePath and assetPrefix for custom domains
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;