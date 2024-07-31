import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect, useMemo, useState } from 'react'
import * as THREE from 'three'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

const getRandomColor = () => {
  return new THREE.Color(Math.random(), Math.random(), Math.random())
}

const Logo = () => {
  const svgData = useLoader(SVGLoader, '/logo.svg')
  const [currentColor, setCurrentColor] = useState(getRandomColor())
  const [targetColor, setTargetColor] = useState(getRandomColor())
  const [scale, setScale] = useState(0)
  const [position, setPosition] = useState<[number, number, number]>([
    -1, 1, -10,
  ])

  const shapes = useMemo(() => {
    return svgData.paths.map((p) => p.toShapes(true))
  }, [svgData])

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetColor(getRandomColor())
    }, 1000 * 2)
    return () => clearInterval(interval)
  }, [])

  useFrame(() => {
    currentColor.lerp(targetColor, 0.01)
    setCurrentColor(currentColor.clone())
    setScale((prev) => Math.min(prev + 0.001, 0.005))
    setPosition((prev) => {
      const newPosition: [number, number, number] = [
        Math.max(prev[0] - 0.8, -2.5),
        Math.min(prev[1] + 0.8, 2.5),
        Math.min(prev[2] + 1, -3),
      ]
      return newPosition
    })
  })

  return (
    <group>
      <spotLight position={[0, -5, -3]} intensity={0.5} color="white" />
      <mesh scale={scale} rotation={[Math.PI, 0, 0]} position={position}>
        {shapes.map((shape, index) => (
          <mesh key={index} position={[0, 0, 0]}>
            <extrudeBufferGeometry
              args={[
                shape,
                {
                  depth: 100,
                  bevelEnabled: false,
                },
              ]}
            />
            <meshPhongMaterial
              attach="material"
              color={currentColor}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </mesh>
    </group>
  )
}

export default Logo
