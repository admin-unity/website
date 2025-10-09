/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Turbopack configuration for faster development
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Local images only - no external domains needed
  },
};

module.exports = nextConfig; 