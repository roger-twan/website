import { useEffect, useState } from 'react'

const GRADIENT_LIST = [
  'radial-gradient( circle 284px at 9.4% 52.1%,  rgba(129,246,255,1) 0%, rgba(0,82,182,1) 100.7% )',
  'radial-gradient( circle farthest-corner at 10% 20%,  rgba(83,113,245,1) 0%, rgba(107,228,184,1) 72.3% )',
  'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
  'radial-gradient( circle farthest-corner at 48.4% 47.5%,  rgba(122,183,255,1) 0%, rgba(21,83,161,1) 90% )',
  'linear-gradient( 129.1deg,  rgba(243,199,83,1) 26.8%, rgba(18,235,207,1) 114.1% )',
  'linear-gradient( 89.5deg,  rgba(131,204,255,1) 0.4%, rgba(66,144,251,1) 100.3% )',
  'radial-gradient( circle 331px at 1.4% 52.9%,  rgba(255,236,2,1) 0%, rgba(255,223,2,1) 33.6%, rgba(255,187,29,1) 61%, rgba(255,175,7,1) 100.7% )',
  'linear-gradient( 109.6deg,  rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% )',
  'radial-gradient( circle 918px at 13.1% 25.5%,  rgba(249,107,107,1) 0%, rgba(247,231,172,1) 48.9%, rgba(173,247,172,1) 90% )',
  'linear-gradient( 113.3deg,  rgba(0,98,186,1) -6%, rgba(88,40,178,1) 10.2%, rgba(234,39,119,1) 34.3%, rgba(255,80,152,1) 54%, rgba(255,101,74,1) 62.5%, rgba(254,166,34,1) 77.2%, rgba(255,227,99,1) 91.2%, rgba(58,243,156,1) 112%, rgba(58,243,156,1) 118.1% )',
  'linear-gradient( 109.6deg,  rgba(229,231,83,1) 11.2%, rgba(83,231,173,1) 100.2% )',
  'radial-gradient( circle farthest-corner at 3.9% 11.3%,  rgba(237,120,153,1) 0%, rgba(238,216,190,1) 71.6%, rgba(249,238,221,1) 99.8% )',
  'linear-gradient( 137.9deg,  rgba(78,156,226,1) 7.8%, rgba(62,146,69,1) 16%, rgba(251,220,23,1) 32.7%, rgba(242,160,35,1) 50.4%, rgba(253,12,12,1) 71.5%, rgba(192,26,129,1) 83.1% )',
  'linear-gradient( 111.5deg,  rgba(228,247,255,1) 21.9%, rgba(255,216,194,1) 92.2% )',
  'linear-gradient( 111.8deg,  rgba(0,104,155,1) 19.8%, rgba(0,173,239,1) 92.1% )',
  'radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,12,253,1) 0%, rgba(255,241,53,1) 90% )',
  'radial-gradient( circle 300px at 8% 89.3%,  rgba(20,157,208,1) 0%, rgba(140,63,226,1) 90% )',
  'radial-gradient( circle farthest-corner at 14.2% 24%,  rgba(239,61,78,1) 0%, rgba(239,61,78,0.81) 51.8%, rgba(239,61,78,0.63) 84.6% )',
  'linear-gradient(rgb(52, 102, 174) 0%, rgb(83, 144, 241) 100%)',
  'linear-gradient( 0.1deg,  rgba(7,200,129,1) 30%, rgba(7,200,129,0.51) 99.9% )',
  'linear-gradient( 109.6deg,  rgba(252,219,0,1) 11.2%, rgba(255,248,200,1) 91.1% )',
  'linear-gradient( 109.6deg,  rgba(243,67,67,1) 11.2%, rgba(2,38,208,1) 100.2% )',
  'linear-gradient( 90.5deg,  rgba(255,207,139,0.50) 1.1%, rgba(255,207,139,1) 81.3% )',
  'linear-gradient( 68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2% )',
  'radial-gradient( circle farthest-corner at 10% 20%,  rgba(38,51,97,1) 0%, rgba(65,143,222,1) 79% )',
  'radial-gradient( circle 817.6px at 10% 20%,  rgba(178,34,34,1) 0%, rgba(255,87,51,1) 41.9%, rgba(255,165,0,1) 100.2% )',
  'linear-gradient(rgb(254, 102, 125), rgb(255, 163, 117))',
]

export interface RandomBgContainer {
  className?: string
  children?: React.ReactNode
}

const RandomBgContainer = (props: RandomBgContainer) => {
  const [background, setBackground] = useState<string>()

  useEffect(() => {
    setBackground(
      GRADIENT_LIST[Math.floor(Math.random() * GRADIENT_LIST.length)]
    )
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
