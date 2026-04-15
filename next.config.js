/** @type {import('next').NextConfig} */
const nextConfig = {
  // React strict mode for development
  reactStrictMode: true,
  
  // Image optimization settings
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Optimize images for production
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Production performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Security headers
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects configuration (if needed in future)
  redirects: async () => {
    return [];
  },

  // Rewrites configuration (if needed in future)
  rewrites: async () => {
    return [];
  },
};

module.exports = nextConfig;
