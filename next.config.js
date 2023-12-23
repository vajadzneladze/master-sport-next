const {rewrites} = require('./rewrites.js')
const nextTranslate = require('next-translate-plugin')



const { loadCustomBuildParams } = require('./next-utils.config')
const { esmExternals = true, tsconfigPath } =loadCustomBuildParams()

const nextConfig = {
  experimental: {
    esmExternals,
  },
  reactStrictMode: false,
  typescript: {
    tsconfigPath,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'api.ux.ge',
      },
    ],
  },

  async rewrites() {
    return rewrites;
  }


}
module.exports = nextTranslate(nextConfig);