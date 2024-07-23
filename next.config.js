/** @type {import('next').NextConfig} */
const nextConfig = {
//     experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://storage.yandexcloud.net',
          },
        ],
        domains: ['storage.yandexcloud.net'],
      },
}

module.exports = nextConfig
