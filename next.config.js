/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'scontent.cdninstagram.com', 'scontent-mad1-1.xx.fbcdn.net'],
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig

