/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'fruitful-captain-65463f1436.media.strapiapp.com',
      }
    ],
  },
}

module.exports = nextConfig
