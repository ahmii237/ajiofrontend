/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "majestic-symphony-3e5f67d391.media.strapiapp.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Alternative legacy format (if using older Next.js version):
    // domains: ['majestic-symphony-3e5f67d391.media.strapiapp.com'],
  },
};

module.exports = nextConfig;
