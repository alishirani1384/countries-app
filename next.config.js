/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flagcdn.com"],
  },
});


