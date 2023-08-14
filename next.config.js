/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "m.media-amazon.com",
        },
    ],
    minimumCacheTTL: 15000000,
},


}

module.exports = nextConfig
