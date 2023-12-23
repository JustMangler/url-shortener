/** @type {import('next').NextConfig} */


module.exports = {
    async rewrites() {
      return [
        {
          source: '/api',
          destination: 'https://urlshortener.gigalixirapp.com/api',
        },
      ]
    },
  }