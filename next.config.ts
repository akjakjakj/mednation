import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export" } : {}),
  images: {
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
