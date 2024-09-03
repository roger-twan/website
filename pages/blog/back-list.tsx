import { useState } from 'react'
import { useRouter } from 'next/router'
import Mask from '@/components/mask'

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
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
