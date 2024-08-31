import { useEffect, useState } from 'react'

export interface RandomBgContainer {
  className?: string
  children?: React.ReactNode
}

const createColor = () => `rgba(
  ${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)},
  ${Math.random()}
)`

const getRandomBg = () => {
  const deg = Math.floor(Math.random() * 360)
  return `linear-gradient(${deg}deg, ${createColor()}, ${createColor()}, ${createColor()}`
}

const RandomBgContainer = (props: RandomBgContainer) => {
  const [background, setBackground] = useState<string>()

  useEffect(() => {
    setBackground(getRandomBg())
  }, [])

  return (
    <div
      className={`flex flex-col w-full justify-center items-center ${props.className}`}
      style={{ background }}
    >
      {props.children}
    </div>
  )
}

export default RandomBgContainer
