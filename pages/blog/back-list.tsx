import { useState } from 'react'
import { useRouter } from 'next/router'
import Mask from '@/components/mask'
import BackIcon from '@/public/icons/back.svg'

const BackList = () => {
  const [clickPosition, setClickPosition] = useState<[number, number]>([0, 0])
  const [maskFullScreen, setMaskFullScreen] = useState(false)
  const [showMask, setShowMask] = useState(false)
  const router = useRouter()

  const onMenuBtnClick = (e: React.MouseEvent) => {
    setClickPosition([e.clientX, e.clientY])
    setShowMask(true)
    setMaskFullScreen(true)
    setTimeout(() => router.push('/blog'), 300)
    setTimeout(() => setShowMask(false), 500)
  }

  return (
    <>
      <button
        className="fixed top-4 left-4 opacity-30 hover:opacity-100 transition-opacity"
        onClick={onMenuBtnClick}
      >
        <BackIcon className="size-8" />
      </button>
      <Mask
        show={showMask}
        position={clickPosition}
        fullScreen={maskFullScreen}
      />
    </>
  )
}

export default BackList
