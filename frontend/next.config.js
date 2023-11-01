/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
	domains : [
		"https://fruitful-captain-65463f1436.media.strapiapp.com"
	],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      }
    ],
  },
}

module.exports = nextConfig
