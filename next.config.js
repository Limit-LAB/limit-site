import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
}

export default nextConfig
