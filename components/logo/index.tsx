import { SVG } from '@svgdotjs/svg.js'
import { useState, useEffect } from 'react'
import style from './logo.module.scss'

interface LogoProps {
  handleMouseOver?: Function
  handleMouseOut?: Function
}

export default function Logo(props: LogoProps) {
  const { handleMouseOver, handleMouseOut } = props
  const [isLogoLoaded, setIsLogoLoaded] = useState<Boolean>(false)

  const renderLogo = () => {
    const container = document.querySelector('#__next')
    const size = { width: 360, height: 260 }
    const draw = SVG().addTo(`.${style.logo}`).size(size.width, size.height)
    const rect = draw.rect(size.width, size.height).fill('#fff')
    const background = draw.rect(size.width, size.height).fill('#fff')
    const logo = draw.group().transform({
      translate: [40, 120],
      scale: [0.046, -0.046],
    })
    logo.path(
      'M30 905 l0 -75 100 0 100 0 0 -400 0 -400 75 0 75 0 2 398 3 397 93 3 92 3 0 74 0 75 -270 0 -270 0 0 -75z'
    )
    logo.path(
      'M680 907 c0 -75 0 -77 28 -82 131 -28 189 -156 119 -263 -35 -52 -88 -72 -190 -72 -66 0 -89 -3 -93 -14 -3 -8 59 -108 142 -230 l148 -216 83 0 c46 0 83 3 83 6 0 3 -47 75 -104 159 l-104 154 52 30 c62 34 111 88 139 150 31 67 30 188 -2 258 -42 95 -150 175 -255 189 l-46 7 0 -76z'
    )

    const text = draw.text((add) => {
      add.tspan(`OGER'S`).attr({ dx: 90, y: 118 })
      add.tspan('LAB').newLine().attr({ dx: 47, y: 110 })
    })
    text.font({
      size: 60,
      weight: 500,
    })

    const mask = draw.mask().add(background).add(logo).add(text)
    rect.maskWith(mask)
    setIsLogoLoaded(true)

    rect.on('mouseover', () => {
      handleMouseOver?.()

      background.animate(300).attr({ fill: '#000' })
      logo.attr({ fill: '#fff' })
      text.attr({ fill: '#fff' })
    })
    rect.on('mouseout', () => {
      handleMouseOut?.()

      background.animate(300).attr({ fill: '#fff' })
      logo.attr({ fill: '#000' })
      text.attr({ fill: '#000' })
    })
  }

  useEffect(() => {
    !isLogoLoaded && renderLogo()
  })

  return (
    <div
      id="logo"
      className={`${style.logo} ${isLogoLoaded ? style['logo-loaded'] : ''}`}
    />
  )
}
