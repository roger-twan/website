import { useFrame, Vector3 } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface IcosahedronProps {
  position?: Vector3 | null
}

const DEFAULT_OPACITY = 0.85
const SCALE_RANGE = 0.005
const THRESHOLD = 0.0005

const Icosahedron = (props: IcosahedronProps) => {
  const meshRef = useRef(null)
  const [scale, setScale] = useState(0.045)
  const [targetScale, setTargetScale] = useState(0.045)
  const [threshold, setThreshold] = useState(THRESHOLD)
  const [targetPosition, setTargetPosition] = useState<Vector3>()
  const [targetOpacity, setTargetOpacity] = useState(DEFAULT_OPACITY)

  useEffect(() => {
    if (props.position) {
      setTargetPosition(props.position)
      setTargetOpacity(DEFAULT_OPACITY)
    } else if (props.position === null && targetPosition) {
      setTargetOpacity(0)
    }
  }, [props.position])

  useFrame(() => {
    let mesh: THREE.Mesh | null = meshRef.current
    if (mesh) {
      mesh = mesh as THREE.Mesh
      const material = mesh.material as THREE.MeshStandardMaterial
      mesh.rotation.x += 0.05
      mesh.rotation.y += 0.05

      if (targetPosition !== undefined && targetPosition !== mesh.position) {
        mesh.position.lerp(targetPosition as THREE.Vector3, 0.35)
      }

      if (targetOpacity !== material.opacity) {
        material.opacity = THREE.MathUtils.lerp(
          material.opacity,
          targetOpacity,
          0.3
        )
        material.needsUpdate = true
      }
    }

    if (scale <= targetScale - SCALE_RANGE) {
      setThreshold(THRESHOLD)
    } else if (scale >= targetScale + SCALE_RANGE) {
      setThreshold(-THRESHOLD)
    }

    setScale(scale + threshold)
  })

  return (
    <mesh ref={meshRef} scale={scale}>
      <icosahedronGeometry />
      <meshStandardMaterial color={0x00ff00} transparent />
    </mesh>
  )
}

export default Icosahedron
