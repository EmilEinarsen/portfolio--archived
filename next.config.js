
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})
//const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
	// swcMinify: true,
	/* webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin())
    config.resolve.alias['fast-deep-equal'] = path.resolve(
      __dirname,
      'node_modules',
      'fast-deep-equal'
    )
    return config
  }, */
})
