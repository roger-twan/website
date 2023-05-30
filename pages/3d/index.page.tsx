import Layout from '@/components/layout'
import { ReactElement } from 'react'
import House from './house/index.page'

const PageWeb3 = () => {
  return <House />
}

PageWeb3.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageWeb3
