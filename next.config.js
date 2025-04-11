/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "v0.blob.com"],
  },
  // Explicitly disable the Pages Router
  pageExtensions: [],
}

module.exports = nextConfig
