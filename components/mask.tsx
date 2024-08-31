import { useEffect, useState } from 'react'

interface MaskProps {
  show: boolean
  position: [number, number]
  className?: string
  fullScreen?: boolean
  children?: React.ReactNode
}

const Mask = (props: MaskProps) => {
  const [visible, setVisible] = useState(false)
  const [size, setSize] = useState(0)

  useEffect(() => {
    if (props.show) {
      setSize(Math.max(window.innerWidth, window.innerHeight))
      setVisible(props.show)
    } else {
      setSize(0)
      setTimeout(() => setVisible(props.show), 1000)
    }

    document.body.style.overflow = props.show ? 'hidden' : 'auto'
  }, [props.show])

  return (
    <div
      className={`fixed top-0 w-full h-full ${props.className} ${
        visible ? 'visible' : 'invisible'
      } ${props.fullScreen ? 'z-30' : 'z-10'}`}
    >
      <div
        className={`
          absolute
          -translate-x-1/2
          -translate-y-1/2
          transition-[width,height,shadow,transform]
          rounded-full
          duration-500
          bg-lime-400
          ${
            visible
              ? `${props.fullScreen ? 'scale-[5]' : 'scale-150'} shadow-2xl`
              : 'scale-100 shadow-none'
          }
        `}
        style={{
          left: props.position?.[0],
          top: props.position?.[1],
          width: visible ? size : 0,
          height: visible ? size : 0,
        }}
      />
      {props.children}
    </div>
  )
}

export default Mask
