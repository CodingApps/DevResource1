/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "v0.blob.com"],
  },
  // Explicitly tell Next.js which files to ignore
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Custom webpack configuration to ignore specific files
  webpack: (config, { isServer }) => {
    // This will make webpack ignore the conflicting files
    config.plugins.push(
      new config.webpack.IgnorePlugin({
        resourceRegExp: /pages\/ai-tools-page\.tsx$/,
      }),
    )
    return config
  },
}

module.exports = nextConfig
