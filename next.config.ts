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
  assetPrefix: '/sniphub-support/',
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/i,
      type: 'asset/resource'
    });
    return config;
  }
};

export default config;
