import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'udyamiadmin.bihar.gov.in',
        pathname: '/pdfupload/images/**',
      },
    ],
  },
};

export default nextConfig;
