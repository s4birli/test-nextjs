/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/form',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
