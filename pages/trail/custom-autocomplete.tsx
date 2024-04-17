import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import style from './trail.module.scss'

type CustomAutocompleteProps = {
  onSearch?: (point: { lat: number; lng: number }) => void
}

const CustomAutocomplete = (props: CustomAutocompleteProps) => {
  const { onSearch } = props
  const [searchResult, setSearchResult] =
    useState<google.maps.places.Autocomplete | null>(null)

  const onPlaceChanged = () => {
    if (searchResult) {
      const place = searchResult.getPlace()
      const location = place.geometry?.location

      onSearch &&
        onSearch({
          lat: location?.lat() || 0,
          lng: location?.lng() || 0,
        })
    }
  }

  return (
    <Autocomplete onLoad={setSearchResult} onPlaceChanged={onPlaceChanged}>
      <label className={style.navigator}>
        Go to:
        <input type="text" placeholder="Place" />
      </label>
    </Autocomplete>
  )
}

export default CustomAutocomplete
