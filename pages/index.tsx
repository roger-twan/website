import Head from 'next/head'
import { useState } from 'react'
import { PUBLIC_ASSETS_PREFIX } from '@/global.config'
import style from './index.module.scss'
import Logo from '@/components/logo'
import Nav from '@/components/nav'

export default function PageHome() {
  const [isLogoHover, setIsLogoHover] = useState<Boolean>(false)
  const handleLogoMouseOver = () => {
    setIsLogoHover(true)
  }
  const handleLogoMouseOut = () => {
    setIsLogoHover(false)
  }

  return (
    <>
      <Head>
        <title>Roger&apos;s Lab</title>
      </Head>
      <main className={isLogoHover ? 'logo-hover' : ''}>
        <video
          className={style['video-background']}
          src={`${PUBLIC_ASSETS_PREFIX}/background.mp4`}
          poster={`${PUBLIC_ASSETS_PREFIX}/background.jpg`}
          playsInline
          autoPlay
          muted
          loop
        />
        <Logo
          handleMouseOver={handleLogoMouseOver}
          handleMouseOut={handleLogoMouseOut}
        />
        <Nav />
      </main>

      <style jsx global>{`
        .logo-hover #logo::after,
        .logo-hover #nav {
            opacity: 0;
            transition: all 0.3s;
        }
      `}</style>
    </>
  )
}
