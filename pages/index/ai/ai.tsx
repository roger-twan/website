import Mask from '@/components/mask'
import { useEffect, useState } from 'react'
import CloseIcon from '@/public/icons/close.svg'

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
          <CloseIcon className="size-12 text-white" />
        </button>
      </Mask>
    </>
  )
}

export default Ai
