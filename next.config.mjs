/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false, // Disable CSS optimization to avoid critters dependency
  }
};

export default nextConfig; 