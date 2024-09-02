import Mask from '@/components/mask'
import { useEffect, useState } from 'react'

interface AiProps {
  position?: [number, number]
  onClose?: () => void
}

const Ai = (props: AiProps) => {
  const [maskPosition, setMaskPosition] = useState<[number, number]>([0, 0])
  const [showMask, setShowMask] = useState(false)

  useEffect(() => {
    if (props.position) {
      setMaskPosition(props.position)
      setShowMask(props.position !== undefined)
    }
  }, [props.position])

  const onClickClose = () => {
    setShowMask(false)
    setTimeout(() => props.onClose?.(), 500)
  }

  return (
    <>
      <Mask show={showMask} position={maskPosition} className="!z-30">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl">
          AI assistant is coming soon.
        </p>

        <button
          onClick={onClickClose}
          className="fixed -translate-x-1/2 -translate-y-1/2"
          style={{ top: maskPosition?.[1], left: maskPosition?.[0] }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </Mask>
    </>
  )
}

export default Ai
