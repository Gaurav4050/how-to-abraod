/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'howtoabroad.com',
          },
        ],
      },
};

export default nextConfig;
