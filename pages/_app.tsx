import React from 'react'
import Head from 'next/head'
import { ChakraProvider, useEventListenerMap } from '@chakra-ui/react'

import Layout from 'layout/Layout'
import { useMount } from 'hooks/useMount'
import theme from 'theme'

import 'styles/globals.scss'
import { setActualCSSVh } from 'utils/utils'

const MyApp = ({ Component, pageProps, router }: AppPropsWithMeta) => {
	const control = useEventListenerMap()
	useMount(() => {
		if(!window) return
		console.log('Hello world')
		console.log(`Here's the source code friend!\n${process.env.NEXT_PUBLIC_SOURCE}\n\nHope you find what you're looking for 🔍`)
		control.add(window, 'resize', setActualCSSVh);
		() => control.remove(window, 'resize', setActualCSSVh)
	})

	
  return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<ChakraProvider theme={theme}>
				<Layout childKey={router.route}>
					<Component {...pageProps} key={router.route} />
				</Layout>
			</ChakraProvider>
		</>
	)
}

export default MyApp
