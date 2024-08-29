import dynamic from 'next/dynamic'
import { Canvas, Vector3 } from '@react-three/fiber'
import Floodlight from './floodlight'
import Light from './light'
import Controls from './controls'
import Icosahedron from './icosahedron'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import delay from '@/utils/delay'
import Logo from './logo'
import HelloText from './hello-text'
import ValueList from './value-list'

const AvatarModel = dynamic(() => import('./avatar'), { ssr: false })

interface HomeCanvasProps {
  visible?: boolean
  onIcosahedronClick?: (position: [number, number]) => void
}

const HomeCanvas = (props: HomeCanvasProps) => {
  const [icosahedronPosition, setIcosahedronPosition] =
    useState<Vector3 | null>(null)
  const helloTextRef = useRef<any>()
  const valueListRef = useRef<any>()

  const startWelComeAnimation = () => {
    setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.3))
    delay(800).then(() =>
      setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.1))
    )
    delay(800).then(() => helloTextRef.current?.show())
    delay(3800).then(() => helloTextRef.current?.hide())
    delay(4000).then(() =>
      setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.3))
    )
    delay(4800).then(() =>
      setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0))
    )
    delay(5000).then(() => valueListRef.current?.show())
    delay(5800).then(() =>
      setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.3))
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 1.9], fov: 40 }}
      className="!fixed h-screen"
    >
      <Logo />
      <AvatarModel onAnimateEnd={startWelComeAnimation} />
      <Floodlight />
      <spotLight position={[5, 5, -5]} intensity={0.6} color="white" />
      <Controls />
      <Icosahedron
        position={icosahedronPosition}
        onClick={(position) => props.onIcosahedronClick?.(position)}
      />
      <HelloText ref={helloTextRef} />
      <ValueList
        ref={valueListRef}
        onValueHover={setIcosahedronPosition}
        onValueHoverEnd={() =>
          setIcosahedronPosition(new THREE.Vector3(0, -0.3, 0.3))
        }
      />
      <Light />
    </Canvas>
  )
}

export default HomeCanvas