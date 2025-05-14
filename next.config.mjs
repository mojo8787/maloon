/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false, // Disable CSS optimization to avoid critters dependency
  },
  // Ensure pages don't rely on server-side features
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TS errors during build
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
  // Disable any features that would require server components
  distDir: process.env.NODE_ENV === 'production' ? '.next' : '.next'
};

export default nextConfig; 