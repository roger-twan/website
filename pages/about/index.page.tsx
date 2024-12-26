import Layout from '@/components/layout'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { ReactElement, useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import Atropos from 'atropos/react'
import 'atropos/scss'
import Image from 'next/image'
import { PageWithLayout } from '../_app.page'
import Portfolio from '../../public/portfolio.jpg'
import Timeline from './timeline'
import SocialMedia from './social-media'

const PageAbout: PageWithLayout = () => {
  const [particlesOptions, setParticlesOptions] = useState<any>()

  const getParticlesOptions = (number: number) => {
    return {
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
          opacity: 0.1,
        },
        move: {
          enable: true,
          direction: 'none' as 'none',
          outModes: 'bounce' as 'bounce',
          speed: 1,
        },
        number: {
          value: number,
        },
        opacity: {
          value: 0.25,
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
  }
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  const typed: any = { current: null }
  const typedEl = useRef(null)
  const typedOptions = {
    strings: ['Full-Stack Developer', 'Guitar Player', 'Photographer'],
    loop: true,
    typeSpeed: 80,
    backSpeed: 30,
    backDelay: 1500,
  }

  useEffect(() => {
    typed.current = new Typed(typedEl.current!, typedOptions)
    setParticlesOptions(getParticlesOptions(Math.floor(window.innerWidth / 8)))
    window.addEventListener('resize', () =>
      setParticlesOptions(
        getParticlesOptions(Math.floor(window.innerWidth / 8))
      )
    )

    return () => {
      typed.current?.destroy()
      window.removeEventListener('resize', () =>
        setParticlesOptions(
          getParticlesOptions(Math.floor(window.innerWidth / 8))
        )
      )
    }
  }, [])

  return (
    <div className="flex flex-col items-center mt-16">
      <Particles
        className="animate-fade-in"
        init={particlesInit}
        options={particlesOptions}
      />
      <Atropos
        className="w-40 h-40 sm:w-80 sm:h-80 animate-scale-in"
        alwaysActive={true}
      >
        <Image
          className="w-full h-full rounded-full"
          src={Portfolio}
          alt="portfolio"
          fill
        />
      </Atropos>
      <div className="mt-10 sm:mt-16 text-center">
        <p className="text-4xl">
          Hi, I&apos;m <span className="font-bold">Roger</span>
        </p>
        <p className="text-2xl font-bold">
          <span
            ref={typedEl}
            className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text bg-[length:200%_100%] animate-background-animation"
          />
        </p>
      </div>

      <Timeline className="mt-12 sm:mt-20 h-[520px]" />

      <SocialMedia className="my-12 sm:my-20" />
    </div>
  )
}

PageAbout.getLayout = (page: ReactElement) => {
  return <Layout title="About">{page}</Layout>
}

export default PageAbout
