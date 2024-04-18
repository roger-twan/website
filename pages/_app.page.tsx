import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { GeistProvider, CssBaseline } from '@geist-ui/core'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import 'inter-ui/inter.css'

export type PageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface MyAppProps extends AppProps {
  Component: PageWithLayout
}

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <GeistProvider>
      <GoogleTagManager gtmId="G-4MLJN88VXV" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-4MLJN88VXV');
        `}
      </Script>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </GeistProvider>
  )
}
