import CommonHeader from '@/components/commonHeader'
import Layout from '@/components/layout'
import { ReactElement } from 'react'

const PageAi = () => {
  return (
    <>
      <CommonHeader title="Portfolio" />
      <div style={{ margin: '200px auto', textAlign: 'center' }}>
        <h2>In progress</h2>
      </div>
    </>
  )
}

PageAi.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageAi
