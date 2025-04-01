/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  distDir: 'dist',
  basePath: '/sniphub-support',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  assetPrefix: '/sniphub-support/'
};

export default config;
