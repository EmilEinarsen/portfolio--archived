const withImages = require("next-images")

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
	i18n: {
		localeDetection: false,
		locales: ['sv-SE','en-US'],
		defaultLocale: 'sv-SE',
		domains: [
			{
				domain: 'emileinarsen.com',
				defaultLocale: 'en-US'
			},
			{
				domain: 'emileinarsen.se',
				defaultLocale: 'sv-SE'
			},
		]
	},
	swcMinify: true,
	// Adds support for "import { ReactComponent as Something } from '*.svg/png/jpeg';" as is default in CRA"
	...withImages()
}
