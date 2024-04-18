import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <GoogleAnalytics gaId="G-NZ1BEZY4HW" />
        <NextScript />
      </body>
    </Html>
  )
}
