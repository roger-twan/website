import dynamic from 'next/dynamic'
import { Canvas, Vector3 } from '@react-three/fiber'
import Floodlight from './floodlight'
import Light from './light'
import Controls from './controls'
import Welcome from './scenes/welcome/index'
import Icosahedron from './icosahedron'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import delay from '@/utils/delay'

const AvatarModel = dynamic(() => import('./avatar'), { ssr: false })

const HomeCanvas = () => {
  const [icosahedronPosition, setIcosahedronPosition] =
    useState<Vector3 | null>(null)
  const welcomeRef = useRef<any>()

  const startWelComeAnimation = () => {
    setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.3))
    delay(1000).then(() =>
      setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.1))
    )
    delay(1000).then(() => welcomeRef.current?.showHelloText())
    delay(3000).then(() => welcomeRef.current?.hideHelloText())
    delay(3000).then(() =>
      setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.3))
    )
    delay(4000).then(() =>
      setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0))
    )
    delay(4200).then(() => welcomeRef.current?.showValueList())
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 1.9], fov: 40 }}
      className="!fixed h-screen"
    >
      <Light />
      <AvatarModel onAnimateEnd={() => startWelComeAnimation()} />
      <Floodlight />
      <spotLight position={[5, 5, -5]} intensity={0.6} color="white" />
      <Controls />
      <Icosahedron position={icosahedronPosition} />
      <Welcome
        onValueHover={setIcosahedronPosition}
        onValueHoverEnd={() => setIcosahedronPosition(null)}
        ref={welcomeRef}
      />
    </Canvas>
  )
}

export default HomeCanvas
