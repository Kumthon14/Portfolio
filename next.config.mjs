/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
    unoptimized: true, // 👈 บังคับให้ export รูปเป็น static
  },
};

export default nextConfig;
