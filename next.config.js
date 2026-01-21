/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only add basePath if your repo is NOT named username.github.io
  // basePath: '/repo-name',
}

module.exports = nextConfig
