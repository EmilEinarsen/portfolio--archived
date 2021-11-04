import type { AppProps } from 'next/app'

import Layout from 'layout/Layout'
import { useMount } from 'hooks/useMount'
import { ThemeProvider } from 'theme/ThemeProvider'

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
	useMount(() => {
		if(!window) return
		document.documentElement.style.setProperty('--vh', (window.innerHeight / 100)+'px')
		console.log('Hello world')
		console.log(`Here's the source code friend!\nhttps://github.com/EmilEinarsen/portfolios\n\nHope you find what you're looking for 🔍`)
	})

  return (
		<ThemeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	)
}

export default MyApp
