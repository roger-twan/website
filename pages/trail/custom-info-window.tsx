import React, { ReactElement } from 'react'
import { InfoWindow } from '@react-google-maps/api'
import style from './trial.module.scss'

type MarkerContent = {
  name: string
  tag: string
}

type RouteContent = {
  duration: number | null
  distance: number | null
  tripMode: number
  // icon: ReactElement
}

type WindowInfo = {
  activityId: string
  position: {
    lng: number
    lat: number
  }
  type: 'marker' | 'route'
  content: MarkerContent | RouteContent
}

type ActivityInfo = {
  title: string
  activity_des: string
  activity_date: string
  link: string
}

type InfoWindowProps = {
  windowInfo: WindowInfo
  activityInfo: ActivityInfo
  onClose?: () => void
}

const CustomInfoWindow = (props: InfoWindowProps) => {
  const { windowInfo, activityInfo, onClose } = props

  return (
    <InfoWindow
      position={windowInfo.position}
      options={{
        pixelOffset: new window.google.maps.Size(
          0,
          windowInfo.type === 'marker' ? -40 : -10
        ),
      }}
      onCloseClick={() => {
        onClose && onClose()
      }}
    >
      <div>
        {/* marker */}
        {windowInfo.type === 'marker' && (
          <div>
            <h2>{(windowInfo.content as MarkerContent).name}</h2>
            <p>#{(windowInfo.content as MarkerContent).tag}</p>
          </div>
        )}

        {/* route */}
        {windowInfo.type === 'route' && (
          <p className={style['activity-info']}>
            {/* {(windowInfo.content as RouteContent).icon} */}
            <span>
              <b>{(windowInfo.content as RouteContent).distance}</b> kilometers
            </span>
            <span>
              <b>{(windowInfo.content as RouteContent).duration}</b> hours
            </span>
          </p>
        )}

        <hr />
        <h3>{activityInfo.title}</h3>
        {activityInfo.activity_des && <p>{activityInfo.activity_des}</p>}
        {activityInfo.activity_date && <p>{activityInfo.activity_date}</p>}
        {activityInfo.link && (
          <a target="_blank" href={activityInfo.link} rel="noreferrer">
            View Details
          </a>
        )}
      </div>
    </InfoWindow>
  )
}

export { CustomInfoWindow, type WindowInfo }
