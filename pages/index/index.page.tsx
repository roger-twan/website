import { ReactElement, useState } from 'react'
import { PageWithLayout } from '../_app.page'
import Layout from '@/components/layout'
import HomeCanvas from './canvas/canvas'
import Ai from './ai/ai'
import Loading from './loading'

const PageHome: PageWithLayout = () => {
  const [icosahedronPosition, setIcosahedronPosition] =
    useState<[number, number]>()
  const [isCanvasReady, setIsCanvasReady] = useState(false)

  return (
    <>
      {!isCanvasReady && <Loading />}
      {icosahedronPosition === undefined && (
        <HomeCanvas
          onIcosahedronClick={setIcosahedronPosition}
          onCanvasReady={() => setIsCanvasReady(true)}
        />
      )}
      <Ai
        position={icosahedronPosition}
        onClose={() => setIcosahedronPosition(undefined)}
      />
    </>
  )
}

PageHome.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageHome
