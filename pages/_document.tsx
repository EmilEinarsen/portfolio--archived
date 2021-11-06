/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
					<meta charSet="utf-8" />
					<meta name="description" content="Emil Einarsen is a web developer and passionate web developer based in Halmstad, Sweden." />
					<meta name="referrer" content="no-referrer-when-downgrade" />
					<meta property="og:title" content="Emil Einarsen" />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://emileinarsen.com" />
					<meta property="og:image" content="https://avatars.githubusercontent.com/u/47479113?v=4" />
					<meta property="og:site_name" content="emileinarsen.com" />
					<meta property="og:description" content="Emil Einarsen is a web developer and passionate web developer based in Halmstad, Sweden." />
				</Head>
        <body className="dots">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument