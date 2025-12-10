import type { NextConfig } from "next";

const nextConfig: NextConfig ={
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // هذا يسمح بتحميل الصور من أي مشروع سوبابيز
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // للسماح بصور التجربة
      },
         {
        protocol: 'https',
        hostname: 'images.unsplash.com', // هذا هو النطاق الصحيح لصور unsplash
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com', // أضف هذا أيضاً احتياطاً
        port: '',
      },
    ],
  },
};

export default nextConfig;
