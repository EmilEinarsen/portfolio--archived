import type { AppProps } from 'next/app'
import Script from 'next/script'

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
		<>
			<ThemeProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
			{/* <Script
				id="sentry-init"
				dangerouslySetInnerHTML={{
					__html: `
					Sentry.init({
						dsn: "https://22ef734854ef47d186ae7357ddbbbbaa@o1060556.ingest.sentry.io/6050204",
						// this assumes your build process sets "npm_package_version" in the env
						release: "my-project-name@" + ${process.env.npm_package_version},
						integrations: [new Sentry.Integrations.BrowserTracing()],
					
						// We recommend adjusting this value in production, or using tracesSampler
						// for finer control
						tracesSampleRate: 1.0,
					});
					`
				}}
			/> */}
		</>
	)
}

export default MyApp
