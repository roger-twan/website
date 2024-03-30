import Layout from '@/components/layout'
import { ReactElement } from 'react'
import House from './house/index.page'
import CommonHeader from '@/components/common-header'

const PageWeb3 = () => {
  return (
    <>
      <CommonHeader title="3D" />
      <House />
    </>
  )
}

PageWeb3.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageWeb3
