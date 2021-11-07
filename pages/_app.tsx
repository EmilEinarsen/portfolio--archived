import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from 'layout/Layout'
import { useMount } from 'hooks/useMount'
import theme from 'theme'

import 'styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
	useMount(() => {
		if(!window) return
		document.documentElement.style.setProperty('--vh', (window.innerHeight / 100)+'px')
		console.log('Hello world')
		console.log(`Here's the source code friend!\n${process.env.NEXT_PUBLIC_SOURCE}\n\nHope you find what you're looking for 🔍`)
	})

  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	)
}

export default MyApp
