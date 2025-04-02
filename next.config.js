/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const config = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  output: 'export',
  distDir: 'dist',
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.github.io',
      },
    ],
  }
};

module.exports = config; 