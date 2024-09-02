import { ReactElement, useState } from 'react'
import { PageWithLayout } from '../_app.page'
import Layout from '@/components/layout'
import HomeCanvas from './canvas/canvas'
import Ai from './ai/ai'

const PageHome: PageWithLayout = () => {
  const [icosahedronPosition, setIcosahedronPosition] =
    useState<[number, number]>()

  return (
    <>
      {icosahedronPosition === undefined && (
        <HomeCanvas onIcosahedronClick={setIcosahedronPosition} />
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
