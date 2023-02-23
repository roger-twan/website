import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/utils/createEmotionCache'
import theme from '@/utils/theme'
import { GlobalStyles } from '@mui/material'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ body: { lineHeight: 1 } }} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
