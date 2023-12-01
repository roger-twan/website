import Layout from '@/components/layout'
import { ReactElement } from 'react'
import type { PageWithLayout } from '../_app.page'
import CommonHeader from '@/components/commonHeader'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'

const PageTrack: PageWithLayout = () => {
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  })

  return (
    <>
      <CommonHeader title="Track" />

      {isLoaded ? (
        <GoogleMap
          zoom={5}
          center={{ lat: 25.53, lng: 114.05 }}
          mapContainerStyle={{ width: '100vw', height: '100vh' }}
          onLoad={() => console.log('Map Component Loaded...')}
        />
      ) : (
        <p>sdf</p>
      )}
    </>
  )
}

PageTrack.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default PageTrack
