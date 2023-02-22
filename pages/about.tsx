import Particles from 'react-particles'
import { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

export default function About() {
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
      },
      move: {
        enable: true,
        direction: 'none' as 'none',
        outModes: 'bounce' as 'bounce',
        speed: 3,
      },
      number: {
        value: 200,
      },
      opacity: {
        value: 0.5,
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
          parallax: {
            enable: true,
            force: 60,
            smooth: 1
          }
        },
      },
    }
  }
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  return (
    <div>
      <Particles init={particlesInit} options={particlesOptions} />
    </div>
  )
}
