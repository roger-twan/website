import Layout from '@/components/layout'
import { ReactElement, useEffect, useState } from 'react'
import type { PageWithLayout } from '../_app.page'
import CommonHeader from '@/components/commonHeader'
import {
  GoogleMap,
  useLoadScript,
  TransitLayer,
  BicyclingLayer,
} from '@react-google-maps/api'
import useSWRImmutable from 'swr/immutable'
import style from './track.module.scss'
import { CustomMarker, MarkerClickEvent } from './custom-marker'
import { CustomRoute, RouteClickEvent } from './custom-route'
import { CustomInfoWindow, WindowInfo } from './custom-info-window'
import CustomAutocomplete from './custom-autocomplete'
import { Spinner } from '@geist-ui/core'

const fetcher = (url: string) => fetch(url).then((res) => res.json())
const MAP_ID = '7f8977a18f38d728'

const PageTrack: PageWithLayout = () => {
  const [isTilesLoaded, setIsTilesLoaded] = useState<boolean>(false)
  const [windowInfo, setWindowInfo] = useState<WindowInfo | null>(null)
  const [centerPoint, setCenterPoint] = useState({
    lat: 0,
    lng: 0,
  })
  const { data } = useSWRImmutable(
    'https://kml.twan.life/api/get_activities',
    fetcher
  )
  const trackData = {
    activities: data?.activities || {},
    routes: data?.routes
      ? data.routes.map((route: any) => {
          const coordinates = route.coordinates.replaceAll(' ', '')
          const points = coordinates
            .split('\n')
            .filter((item: string) => item.length)
          return {
            ...route,
            path: points.map((point: string) => {
              const coordinates = point.split(',')
              return {
                lng: Number(coordinates[0]),
                lat: Number(coordinates[1]),
              }
            }),
          }
        })
      : [],
    locations: data?.locations
      ? data.locations.map((location: any) => {
          const coordinates = location.coordinates
            .replace(/[\r\n\s]/g, '')
            .split(',')
          return {
            ...location,
            position: {
              lng: Number(coordinates[0]),
              lat: Number(coordinates[1]),
            },
          }
        })
      : [],
  }

  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    libraries: ['places'],
    mapIds: [MAP_ID],
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
  })
  const mapOptions = {
    mapId: MAP_ID,
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: true,
    scaleControl: false,
    rotateControl: false,
    keyboardShortcuts: false,
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenterPoint({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    })
  }, [])

  const onMarkClick = (e: MarkerClickEvent) => {
    setWindowInfo({
      activityId: e.activityId,
      position: e.position,
      type: 'marker',
      content: {
        name: e.name,
        tag: e.tag,
      },
    })
    setCenterPoint(e.position)
  }

  const onRouteClick = (e: RouteClickEvent) => {
    setWindowInfo({
      activityId: e.activityId,
      position: e.position,
      type: 'route',
      content: {
        // icon: e.icon,
        duration: e.duration,
        distance: e.distance,
        tripMode: e.tripMode,
      },
    })
  }

  return (
    <>
      <CommonHeader title="Track" />
      {!isTilesLoaded && (
        <div className={style.mask}>
          <Spinner className={style['spinner']} />
        </div>
      )}

      {isLoaded && (
        <GoogleMap
          zoom={12}
          center={centerPoint}
          mapContainerStyle={{ width: '100vw', height: '100vh' }}
          options={mapOptions}
          onTilesLoaded={() => !isTilesLoaded && setIsTilesLoaded(true)}
        >
          <TransitLayer />
          <BicyclingLayer />
          <CustomAutocomplete onSearch={setCenterPoint} />

          {trackData.locations.map((location: any, index: number) => (
            <CustomMarker
              key={index}
              activityId={location.activity_id}
              name={location.location_name}
              tag={location.tag}
              position={location.position}
              click={onMarkClick}
            />
          ))}
          {trackData.routes.map((route: any, index: number) => (
            <CustomRoute
              key={index}
              activityId={route.activity_id}
              distance={route.distance}
              duration={route.duration}
              tripMode={route.trip_mode}
              path={route.path}
              click={onRouteClick}
            />
          ))}
          {windowInfo && (
            <CustomInfoWindow
              windowInfo={windowInfo}
              activityInfo={trackData.activities[windowInfo.activityId]}
              onClose={() => setWindowInfo(null)}
            />
          )}
        </GoogleMap>
      )}
    </>
  )
}

PageTrack.getLayout = (page: ReactElement) => <Layout>{page}</Layout>

export default PageTrack
