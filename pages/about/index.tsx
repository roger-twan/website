import Layout from '@/components/layout'
import Particles from 'react-particles'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { ReactElement, useEffect, useRef } from 'react'
import Typed from 'typed.js'
import Atropos from 'atropos/react'
import style from './about.module.scss'
import 'atropos/scss'
import { PUBLIC_ASSETS_PREFIX } from '@/global.config'
import Head from 'next/head'
import Image from 'next/image'
import { Container, Button, SvgIcon } from '@mui/material'
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material'
import GmailIcon from '@/public/icons/gmail.svg'
import NotionIcon from '@/public/icons/notion.svg'
import DiscordIcon from '@/public/icons/discord.svg'
import type { PageWithLayout } from '../_app'

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
    strings: ['Software Engineer', 'Tech Geek'],
    loop: true,
  }

  const linkButtonStyle = {
    borderRadius: '50%',
    minWidth: 'auto',
    padding: '10px',
  }

  useEffect(() => {
    typed.current = new Typed(typedEl.current!, typedOptions)

    return () => {
      typed.current?.destroy()
    }
  })

  return (
    <>
      <Head>
        <title>About Roger</title>
      </Head>
      <Container
        className={style.wrapper}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Particles
          className={style.particles}
          init={particlesInit}
          options={particlesOptions}
          data-testid="background"
        />
        <div>
          <Atropos className={style.avatar} alwaysActive={true}>
            <Image
              data-testid="avatar"
              src={`${PUBLIC_ASSETS_PREFIX}/avatar.png`}
              alt=""
              fill
            />
          </Atropos>
        </div>
        <div className={style['text-area']} data-testid="description">
          <div className={style.title}>
            Hi
            <br />
            I&apos;m <span className={style.name}>Roger</span>
          </div>
          <div className={style.role}>
            A <span className={style.typed} ref={typedEl} />
          </div>
          <div className={style['btn-wrapper']}>
            <Button
              size="large"
              variant="contained"
              sx={linkButtonStyle}
              href="https://github.com/Roger-twan"
              target="_blank"
            >
              <GitHubIcon />
            </Button>
            <Button
              size="large"
              variant="contained"
              sx={linkButtonStyle}
              href="https://www.linkedin.com/in/roger-twan"
              target="_blank"
            >
              <LinkedInIcon />
            </Button>
            <Button
              size="large"
              variant="contained"
              sx={linkButtonStyle}
              href="mailto:roger.twan@gmail.com"
              target="_blank"
            >
              <SvgIcon component={GmailIcon} />
            </Button>
            <Button
              size="large"
              variant="contained"
              sx={linkButtonStyle}
              href="https://discordapp.com/users/1072458186692509726"
              target="_blank"
            >
              <SvgIcon component={DiscordIcon} />
            </Button>
            <Button
              size="large"
              variant="contained"
              sx={linkButtonStyle}
              href="https://roger.twan.life"
              target="_blank"
            >
              <SvgIcon component={NotionIcon} />
            </Button>
          </div>
        </div>

        <style jsx global>{`
          .atropos-shadow {
            border-radius: 50%;
            filter: blur(10px);
          }
        `}</style>
      </Container>
    </>
  )
}

PageAbout.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageAbout
