
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your app.
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // HTML files are not cached by the browser, so the latest version is always served.
            value: 'no-cache',
          },
        ],
      },
      {
        // Apply these headers to all static assets.
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            // Static assets are cached for a long time, so they don't have to be re-downloaded.
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
