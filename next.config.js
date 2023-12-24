/** @type {import('next').NextConfig} */


module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/create',
          destination: 'https://urlshortener.gigalixirapp.com/api/create',
        },
      ]
    },
  }