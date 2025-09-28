/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent-mad1-1.xx.fbcdn.net',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig

