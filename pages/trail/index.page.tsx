import dynamic from 'next/dynamic'
import Layout from '@/components/layout'
import { ReactElement, useState } from 'react'
import type { PageWithLayout } from '../_app.page'
import CommonHeader from '@/components/common-header'
import { GetStaticProps } from 'next'
import { Trail, getTrails } from './trail.data'
import { Grid, Loading } from '@geist-ui/core'
import style from './trail.module.scss'

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
      <CommonHeader title="Trail" />
      {!isMapReady && (
        <Grid.Container gap={2.5} className={style['map-loading']}>
          <Grid xs={24}>
            <Loading spaceRatio={2.5} />
          </Grid>
        </Grid.Container>
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
