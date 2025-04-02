/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  // Only use these settings for production builds
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    distDir: 'dist',
    basePath: process.env.GITHUB_ACTIONS ? '/sniphub-app' : '',
    assetPrefix: process.env.GITHUB_ACTIONS ? '/sniphub-app/' : '',
    trailingSlash: true,
  } : {}),
  images: {
    unoptimized: true
  }
};

module.exports = config; 