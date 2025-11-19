import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://llm-proxy-364886298866.us-central1.run.app/:path*',
      },
    ];
  },
};

export default nextConfig;
