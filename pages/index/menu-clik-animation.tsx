import Mask from '@/components/mask'
import { useRouter } from 'next/router'
import { useState } from 'react'

const RouteMask = () => {
  const [menuClickPosition, setMenuClickPosition] = useState<[number, number]>([
    0, 0,
  ])
  const [maskFullScreen, setMaskFullScreen] = useState(false)
  const [showMask, setShowMask] = useState(false)
  const router = useRouter()

  return (
    <Mask
      show={showMask}
      position={menuClickPosition}
      fullScreen={maskFullScreen}
    />
  )
}

export default RouteMask
