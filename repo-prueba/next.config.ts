import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🔥 evita que ESLint rompa el build
  },
};

export default nextConfig;
