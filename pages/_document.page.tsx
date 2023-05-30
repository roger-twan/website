import { Html, Head, Main, NextScript } from 'next/document'
import { PUBLIC_ASSETS_PREFIX } from '@/global.config'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${PUBLIC_ASSETS_PREFIX}/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
