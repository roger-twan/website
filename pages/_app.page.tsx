import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import './_global.css'

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, pageProps: P) => ReactNode
}

interface AppPropsWithLayout extends AppProps {
  Component: PageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <div>
      <GoogleTagManager gtmId="G-4MLJN88VXV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-4MLJN88VXV');
        `}
      </Script>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </div>
  )
}
