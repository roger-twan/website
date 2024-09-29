/** @type {import('next').NextConfig} */

const nextConfig = {
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
}

module.exports = nextConfig
