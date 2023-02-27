import Layout from '@/components/layout'
import { ReactElement } from 'react'

const PageChatGpt = () => {
  return (
    <div style={{ margin: '200px auto', textAlign: 'center' }}>Coming soon</div>
  )
}

PageChatGpt.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageChatGpt
