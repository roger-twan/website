import Layout from '@/components/layout'
import { ReactElement } from 'react'

const PageWeb3 = () => {
  return (<div style={{margin: '200px auto', textAlign: 'center'}}>Coming soon</div>)
}

PageWeb3.getLayout = (page: ReactElement) => {
  return (<Layout>{page}</Layout>)
}

export default PageWeb3
