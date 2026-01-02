import type { NextConfig } from "next";
import { createMDX } from 'fumadocs-mdx/next';

import { fileURLToPath } from 'node:url'
import bundleAnalyzer from '@next/bundle-analyzer'


async function createNextConfig(): Promise<NextConfig> {
  const { createJiti } = await import('jiti')
  const jiti = createJiti(fileURLToPath(import.meta.url))

  await jiti.import('./env')

  const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    productionBrowserSourceMaps: process.env.SOURCE_MAPS === 'true',
    devIndicators: false,
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    serverExternalPackages: [
      'ts-morph',
      'typescript',
      'oxc-transform',
      'twoslash',
      'twoslash-protocol',
      'shiki',
      '@takumi-rs/image-response',
    ],
    images: {
      remotePatterns: [
        {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'r2.luxima.id',
        port: '',
        pathname: '/**',
      },
      {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'fumadocs.dev',
          port: '',
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/docs/:path*.mdx',
          destination: '/llms.mdx/:path*',
        },
      ]
    },
  }

  return nextConfig
}

const bundleAnalyzerPlugin = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const mdxPlugin = createMDX()

const NextApp = async () => {
  const nextConfig = await createNextConfig()
  const plugins = [bundleAnalyzerPlugin, mdxPlugin]
  return plugins.reduce((config, plugin) => plugin(config), nextConfig)
}

export default NextApp


