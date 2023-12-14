import React, { ReactElement, useState } from 'react'
import { Polyline } from '@react-google-maps/api'
import {
  Train,
  DirectionsWalk,
  DirectionsBike,
  DirectionsCar,
  Flight,
  Sailing,
  TwoWheeler,
} from '@mui/icons-material'

type RouteClickEvent = {
  activityId: string
  duration: number | null
  distance: number | null
  tripMode: number
  icon: ReactElement
  position: {
    lat: number
    lng: number
  }
}

type CustomRouteProps = {
  activityId: string
  distance: number | null
  duration: number | null
  tripMode: number
  path: []
  click?: (e: RouteClickEvent) => void
}

enum TripMode {
  Train = 0,
  Walk = 1,
  Bicycle = 2,
  Car = 3,
  Air = 4,
  Ship = 5,
  Motorcycle = 6,
}

type TripModeMapInfo = {
  color: string
  icon: ReactElement
}

const getTripColorIcon = (tripMode: TripMode): TripModeMapInfo => {
  const colorsMap: { [key in TripMode]: TripModeMapInfo } = {
    [TripMode.Train]: {
      color: '#ff00ff',
      icon: <Train />,
    },
    [TripMode.Walk]: {
      color: '#00ff00',
      icon: <DirectionsWalk />,
    },
    [TripMode.Bicycle]: {
      color: '#00F5FF',
      icon: <DirectionsBike />,
    },
    [TripMode.Car]: {
      color: '#1E90FF',
      icon: <DirectionsCar />,
    },
    [TripMode.Air]: {
      color: '#ff0000',
      icon: <Flight />,
    },
    [TripMode.Ship]: {
      color: '#ffff00',
      icon: <Sailing />,
    },
    [TripMode.Motorcycle]: {
      color: '#ff6100',
      icon: <TwoWheeler />,
    },
  }

  return colorsMap[tripMode]
}

const CustomRoute = (props: CustomRouteProps) => {
  const { activityId, distance, duration, tripMode, path, click } = props
  const [isActivity, setIsActivity] = useState(false)

  const onRouteClick = (e: google.maps.MapMouseEvent) => {
    if (click) {
      click({
        activityId,
        distance,
        duration,
        tripMode,
        icon: getTripColorIcon(tripMode).icon,
        position: {
          lat: e.latLng!.lat(),
          lng: e.latLng!.lng(),
        },
      })
    }
  }

  return (
    <Polyline
      path={path}
      options={{
        strokeColor: getTripColorIcon(tripMode).color,
        strokeWeight: isActivity ? 6 : 4,
        clickable: true,
        draggable: false,
        editable: false,
        visible: true,
        zIndex: 1,
      }}
      onMouseOver={() => setIsActivity(true)}
      onMouseOut={() => setIsActivity(false)}
      onClick={onRouteClick}
    />
  )
}

export { CustomRoute, type RouteClickEvent }
