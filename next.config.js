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
            hostname: '*',
          },
        ],
      },
}

module.exports = nextConfig
