import dynamic from 'next/dynamic'
import Layout from '@/components/layout'
import { ReactElement } from 'react'
import type { PageWithLayout } from '../_app.page'
import CommonHeader from '@/components/common-header'
import { GetStaticProps } from 'next'
import { Trail, getTrails } from './trail.data'

const MapComponent = dynamic(() => import('./map'), { ssr: false })

export const getStaticProps: GetStaticProps = async () => {
  const trailsData: Trail[] = await getTrails()

  return { props: { list: JSON.stringify(trailsData) } }
}

interface Props {
  list: string
}

const PageTrail: PageWithLayout<Props> = ({ list }: Props) => {
  return (
    <>
      <CommonHeader title="Trail" />
      <MapComponent list={JSON.parse(list)} />
    </>
  )
}

PageTrail.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default PageTrail
