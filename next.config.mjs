/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/uslugi/pozyczki-i-kredyty",
        destination: "/uslugi/kredyty-gotowkowe",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
