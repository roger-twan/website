import dynamic from 'next/dynamic'
import Layout from '@/components/layout'
import { ReactElement, useState } from 'react'
import type { PageWithLayout } from '../_app.page'
import CommonHeader from '@/components/common-header'
import { GetStaticProps } from 'next'
import { Trail, getTrails } from './trails.data'
import style from './trails.module.scss'

const MapComponent = dynamic(() => import('./map'), { ssr: false })

export const getStaticProps: GetStaticProps = async () => {
  const trailsData: Trail[] = await getTrails()

  return { props: { list: JSON.stringify(trailsData) } }
}

interface Props {
  list: string
}

const PageTrail: PageWithLayout<Props> = ({ list }: Props) => {
  const [isMapReady, setIsMapReady] = useState(false)

  return (
    <>
      <CommonHeader title="Trails" />
      {!isMapReady && (
        <div className={style['map-loading']}>
          <p>loading...</p>
        </div>
      )}
      <MapComponent
        list={JSON.parse(list)}
        onReady={() => setIsMapReady(true)}
      />
    </>
  )
}

PageTrail.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default PageTrail
