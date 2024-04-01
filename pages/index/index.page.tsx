import { useState } from 'react'
import CommonHeader from '@/components/common-header'
import style from './index.module.scss'
import Logo from './logo/logo'
import Nav from './nav/nav'

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
      <CommonHeader />
      <main className={isLogoHover ? 'logo-hover' : ''}>
        <video
          className={style['video-background']}
          src="/background.mp4"
          poster="/background.jpg"
          data-testid="video"
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
