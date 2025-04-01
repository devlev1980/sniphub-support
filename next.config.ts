/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: false,
  output: 'export',
  basePath: '/sniphub-support',
  images: {
    unoptimized: true
  }
};

export default config;
