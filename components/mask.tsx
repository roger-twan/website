import { useEffect, useState } from 'react'

interface MaskProps {
  position?: [number, number]
  children?: React.ReactNode
}

const Mask = (props: MaskProps) => {
  const [visible, setVisible] = useState(false)
  const [currentPosition, setCurrentPosition] = useState<[number, number]>()
  const [size, setSize] = useState(0)

  useEffect(() => {
    if (props.position) {
      setCurrentPosition(props.position)
      setSize(Math.max(window.innerWidth, window.innerHeight))
    }

    setVisible(!!props.position)
  }, [props.position])

  return (
    <div className={`fixed w-full h-full ${visible ? 'visible' : 'invisible'}`}>
      <div
        className={`
          absolute
          -translate-x-1/2
          -translate-y-1/2
          transition-all
          rounded-full
          duration-500
          bg-lime-400
          ${visible ? 'scale-150 shadow-2xl' : 'scale-100 shadow-none'}
        `}
        style={{
          left: currentPosition?.[0],
          top: currentPosition?.[1],
          width: visible ? size : 0,
          height: visible ? size : 0,
        }}
      />
      {props.children}
    </div>
  )
}

export default Mask
