/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables strict mode to catch potential issues
    images: {
      // Allow external images or images from specific domains (optional)
      domains: ['http://localhost:3000'], // Replace with actual domains if needed
    },
    experimental: {
      appDir: true, // Ensures you're using the App Router in Next.js 14
    },

    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    // Other configurations can go here
  };
  
  export default nextConfig;
  

  