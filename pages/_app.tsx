import type { AppProps } from 'next/app'

import { useMount } from 'hooks/useMount'
import { ThemeProvider } from 'theme/ThemeProvider'
import { setCSSVariableVh } from 'utils/utils'

import 'styles/globals.scss'
import Layout from 'layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {

	useMount(() => {
		window.addEventListener('resize', setCSSVariableVh)
		return () => window.removeEventListener('resize', setCSSVariableVh)
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
