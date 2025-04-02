/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  output: 'export',
  distDir: 'dist',
  basePath: '/sniphub-support',
  assetPrefix: '/sniphub-support/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = config; 