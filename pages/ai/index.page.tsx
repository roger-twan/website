import Layout from '@/components/layout'
import { ReactElement } from 'react'

const PageAi = () => {
  return (
    <div style={{ margin: '200px auto', textAlign: 'center' }}>
      <h2>In progress</h2>
      See more on{' '}
      <a
        href="https://roger.twan.life/Idea-Personal-Ai-Clone-Integrate-With-ChatGPT-3D-Virtual-Avatar-and-Cloned-Voice-ea209b7e803b4bda9a6a9f3c24b9ffba"
        target="_blank"
        rel="noreferrer"
      >
        [Idea] Personal Ai Clone: Integrate With ChatGPT, 3D Virtual Avatar, and
        Cloned Voice
      </a>
    </div>
  )
}

PageAi.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageAi
