import Layout from '@/components/layout'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { ReactElement, useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Atropos from 'atropos/react'
import style from './about.module.scss'
import 'atropos/scss'
import Image from 'next/image'
import type { PageWithLayout } from '../_app.page'
import CommonHeader from '@/components/common-header'

const PageAbout: PageWithLayout = () => {
  const particlesOptions = {
    fpsLimit: 120,
    detectRetina: true,
    particles: {
      size: {
        value: { min: 1, max: 5 },
      },
      color: {
        value: '#000',
      },
      links: {
        color: '#000',
        enable: true,
        distance: 120,
        opacity: 0.3,
      },
      move: {
        enable: true,
        direction: 'none' as 'none',
        outModes: 'bounce' as 'bounce',
        speed: 1,
      },
      number: {
        value: 200,
      },
      opacity: {
        value: 0.3,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
    },
  }
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  const typed: any = { current: null }
  const typedEl = useRef(null)
  const typedOptions = {
    strings: [
      'Software Engineer',
      'Tech Geek',
      'Minimalist',
      'Guitar Player',
      'Photographer',
    ],
    loop: true,
  }

  useEffect(() => {
    typed.current = new Typed(typedEl.current!, typedOptions)

    return () => {
      typed.current?.destroy()
    }
  })

  return (
    <>
      <CommonHeader title="About" />
      <div className={style.wrapper}>
        <Particles
          className={style.particles}
          init={particlesInit}
          options={particlesOptions}
          data-testid="background"
        />
        <Atropos className={style.avatar} alwaysActive={true}>
          <Image data-testid="avatar" src="/avatar.png" alt="avatar" fill />
        </Atropos>
        <div className={style['text-area']} data-testid="description">
          <p className={style.title}>
            Hi,
            <br />
            I&apos;m <span className={style.name}>Roger</span>
          </p>
          <p className={style.role}>
            A <span className={style.typed} ref={typedEl} />
          </p>
          <div>
            <button
              onClick={() =>
                window.open('https://github.com/roger-twan', '_blank')
              }
            />
            <button
              onClick={() =>
                window.open('https://www.linkedin.com/in/roger-twan', '_blank')
              }
            />
            <button
              onClick={() => window.open('mailto:roger.twan@gmail.com')}
            />
          </div>
        </div>

        <style jsx global>{`
          .atropos-shadow {
            border-radius: 50%;
            filter: blur(10px);
          }
        `}</style>
      </div>
    </>
  )
}

PageAbout.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageAbout
