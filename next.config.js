// next.config.js
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Отключаем Turbopack — он не поддерживает кириллицу в путях
  bundlePagesRouterDependencies: true,
}
module.exports = nextConfig
