import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Layout from '@/components/layout'
import { PageWithLayout } from '../_app.page'
import getPhotos, { Photo } from './gallery.data'
import RandomBgContainer from '@/components/random-bg-container'
const GalleryModule = dynamic(() => import('./gallery.module'), { ssr: false })

interface PageGalleryProps {
  list: Photo[]
}

export const getStaticProps: GetStaticProps = async () => {
  const photoData: Photo[] = await getPhotos()

  return { props: { list: photoData } }
}

const PageGallery: PageWithLayout<PageGalleryProps> = (
  props: PageGalleryProps
) => {
  return (
    <>
      <RandomBgContainer className="h-40 sm:h-60">
        <h1 className="text-5xl [text-shadow:_-2px_2px_black] text-white font-orbitron">
          Gallery
        </h1>
      </RandomBgContainer>
      <GalleryModule list={props.list} />
    </>
  )
}

PageGallery.getLayout = (page: ReactElement) => (
  <Layout title="Gallery">{page}</Layout>
)

export default PageGallery
