/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
};

module.exports = config; 