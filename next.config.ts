import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/, // JS/TSX 파일에서만 사용 가능하도록 설정
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;