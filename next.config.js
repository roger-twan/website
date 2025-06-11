/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'development' ? '/proxy/3000/' : '',
  output: 'export',
  reactStrictMode: false,
  eslint: {
    dirs: ['components', 'pages', 'utils'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: ['assets-obsidian.roger.ink'],
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
