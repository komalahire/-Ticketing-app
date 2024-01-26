/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      MONGODB_URL: process.env.MONGODB_URL,
    },

    experimental: {
        fallbackNodePolyfills: false,
    },
  }
  
  module.exports = nextConfig

  