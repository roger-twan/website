import { ReactElement, useState } from 'react'
import { PageWithLayout } from '../_app.page'
import Layout from '@/components/layout'
import HomeCanvas from './canvas/canvas'
import Ai from './ai/ai'
import Loading from './loading'
import Mask from '@/components/mask'
import { ThreeEvent } from '@react-three/fiber'
import { useRouter } from 'next/router'
import SkillsWordCloud from './skills-word-cloud'

const PageHome: PageWithLayout = () => {
  const [icosahedronPosition, setIcosahedronPosition] =
    useState<[number, number]>()
  const [isCanvasReady, setIsCanvasReady] = useState(false)
  const [menuClickPosition, setMenuClickPosition] = useState<[number, number]>([
    0, 0,
  ])
  const [maskFullScreen, setMaskFullScreen] = useState(false)
  const [showMask, setShowMask] = useState(false)
  const router = useRouter()

  const onMenuClick = (e: ThreeEvent<MouseEvent>, path: string) => {
    setMenuClickPosition([e.clientX, e.clientY])
    setShowMask(true)
    setMaskFullScreen(true)
    setTimeout(() => {
      router.push(path)
      document.body.style.overflow = 'auto'
    }, 500)
    setTimeout(() => setShowMask(false), 800)
  }

  return (
    <>
      {!isCanvasReady && <Loading />}
      {icosahedronPosition === undefined && (
        <HomeCanvas
          onIcosahedronClick={setIcosahedronPosition}
          onCanvasReady={() => setIsCanvasReady(true)}
          onMenuClick={onMenuClick}
        />
      )}
      <Ai
        position={icosahedronPosition}
        onClose={() => setIcosahedronPosition(undefined)}
      />
      <Mask
        show={showMask}
        position={menuClickPosition}
        fullScreen={maskFullScreen}
      />
      <SkillsWordCloud />
    </>
  )
}

PageHome.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageHome
