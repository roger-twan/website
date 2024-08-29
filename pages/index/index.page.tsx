import CommonHeader from '@/components/common-header'
import HomeCanvas from './canvas/canvas'
import { useEffect, useState } from 'react'
import Ai from './ai/ai'

export default function PageHome() {
  const [icosahedronPosition, setIcosahedronPosition] =
    useState<[number, number]>()

  // useEffect(() => {
  //   document.addEventListener('click', (event: any) => {
  //     setIcosahedronPosition([event.clientX, event.clientY])
  //   })
  // }, [])

  return (
    <>
      <CommonHeader />
      {icosahedronPosition === undefined && (
        <HomeCanvas onIcosahedronClick={setIcosahedronPosition} />
      )}
      <Ai
        position={icosahedronPosition}
        onClose={() => setIcosahedronPosition(undefined)}
      />
    </>
  )
}
