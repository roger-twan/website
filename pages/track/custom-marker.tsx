import React, { useState } from 'react'
import { Marker } from '@react-google-maps/api'

type MarkerClickEvent = {
  activityId: string
  name: string
  tag: string
  position: {
    lat: number
    lng: number
  }
}

type CustomMarkerProps = {
  activityId: string
  name: string
  tag: string
  position: {
    lat: number
    lng: number
  }
  click?: (e: MarkerClickEvent) => void
}

const CustomMarker = (props: CustomMarkerProps) => {
  const { activityId, name, tag, position, click } = props
  const [isActivity, setIsActivity] = useState(false)

  const onMarkerClick = (e: google.maps.MapMouseEvent) => {
    if (click) {
      click({
        activityId,
        name,
        tag,
        position: {
          lat: e.latLng!.lat(),
          lng: e.latLng!.lng(),
        },
      })
    }
  }

  return (
    <Marker
      position={position}
      label={isActivity ? name : undefined}
      onClick={onMarkerClick}
      onMouseOver={() => setIsActivity(true)}
      onMouseOut={() => setIsActivity(false)}
    />
  )
}

export { CustomMarker, type MarkerClickEvent }
