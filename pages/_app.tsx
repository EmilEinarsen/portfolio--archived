import type { AppProps } from 'next/app'
import Script from 'next/script'

import Layout from 'layout/Layout'
import { useMount } from 'hooks/useMount'
import { ThemeProvider } from 'theme/ThemeProvider'

import 'styles/globals.scss'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
	useMount(() => {
		if(!window) return
		document.documentElement.style.setProperty('--vh', (window.innerHeight / 100)+'px')
		console.log('Hello world')
		console.log(`Here's the source code friend!\nhttps://github.com/EmilEinarsen/portfolios\n\nHope you find what you're looking for 🔍`)
	})

  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	)
}

export default MyApp
