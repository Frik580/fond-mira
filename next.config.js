/** @type {import('next').NextConfig} */
const nextConfig = {
//     experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
    // output: 'export',
    images: {
        // unoptimized: true,
        // formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.yandexcloud.net',
            // domains: ['storage.yandexcloud.net'],
          },
        ],
      },
}

module.exports = nextConfig
