import { Text3D, Center, RoundedBox } from '@react-three/drei'
import GradientShaderMaterial from '@/components/gradient-shader-material'
import { useFrame, useThree, Vector3 } from '@react-three/fiber'
import * as THREE from 'three'
import { forwardRef, useImperativeHandle, useState } from 'react'
import useIsMobile from '@/components/use-is-mobile'

interface Value {
  value: string
  description: string
  position: (opts: {
    width: number
    height: number
    isMobile: boolean
  }) => Vector3
  offset: Vector3
}

interface ValueListProps {
  onValueHover?: (position: Vector3) => void
  onValueHoverEnd?: () => void
}

const FONT_PATH = '/fonts/Orbitron_Regular.json'
const POSITION_Z = 0.3
const TEXT_COLOR = '#393937'
const values: Value[] = [
  {
    value: 'Reliability',
    description: 'Trust is a precious thing in the world',
    position: (opts) => [
      opts.isMobile ? -0.1 : 0,
      opts.height / 2 - 0.2,
      POSITION_Z,
    ],
    offset: [0.07, 0.008, 0],
  },
  {
    value: 'Openness',
    description: 'Embrace new things and different opinions',
    position: (opts) => [
      opts.isMobile ? 0.1 : -opts.width / 2 + 0.55,
      opts.isMobile ? opts.height / 2 - 0.34 : 0.1,
      POSITION_Z,
    ],
    offset: [0.065, 0, 0],
  },
  {
    value: 'Growth',
    description: 'Continuous learning and self-improvement',
    position: (opts) => [
      opts.width / 2 - 0.45,
      opts.isMobile ? 0 : 0.1,
      POSITION_Z,
    ],
    offset: [0.08, 0, 0],
  },
  {
    value: 'Exploration',
    description: 'Stay curious, be brave in exploring the unknown',
    position: (opts) => [
      -opts.width / 2 + 0.55,
      opts.isMobile ? -0.18 : -0.3,
      POSITION_Z,
    ],
    offset: [0.055, -0.007, 0],
  },
  {
    value: 'Respect',
    description: 'Respect others and yourself, peace for all',
    position: (opts) => [
      opts.width / 2 - 0.45,
      opts.isMobile ? -opts.height / 2 + 0.25 : -0.3,
      POSITION_Z,
    ],
    offset: [0.08, -0.007, 0],
  },
]

const ValueList = forwardRef((props: ValueListProps, ref) => {
  const [scale, setScale] = useState(0)
  const [targetScale, setTargetScale] = useState(0)
  const [groupPosition, setGroupPosition] = useState<Vector3>([0, -0.3, 0])
  const { width, height } = useThree((state) => state.viewport)
  const isMobile = useIsMobile()

  useImperativeHandle(ref, () => ({
    show: () => {
      setTargetScale(1)
      setGroupPosition(new THREE.Vector3(0, 0, 0))
    },
    hide: () => {
      setTargetScale(0)
      setGroupPosition(new THREE.Vector3(0, -0.3, 0))
    },
  }))

  useFrame(() => {
    setScale((prev) => {
      const delta = targetScale - prev
      const newScale = prev + delta * 0.3

      if (Math.abs(delta) < 0.01) {
        return targetScale
      }

      return newScale
    })
  })

  const handlePointerOver = (object: THREE.Object3D) => {
    const box = new THREE.Box3().setFromObject(object)
    const rightTopCorner = new THREE.Vector3(
      box.max.x - 0.04,
      box.max.y - 0.04,
      box.max.z
    )
    props.onValueHover?.(rightTopCorner)
  }

  return (
    <group scale={scale} position={groupPosition}>
      {values.map(({ value, description, position, offset }) => (
        <Center
          position={position({ width, height, isMobile })}
          key={value}
          scale={isMobile ? 0.8 : 1}
        >
          <mesh
            position={[0.16, 0.02, -0.02]}
            onPointerOver={(e) => handlePointerOver(e.object)}
            onPointerOut={props.onValueHoverEnd}
          >
            <planeGeometry args={[0.38, 0.12]} />
            <meshBasicMaterial color="transparent" transparent opacity={0} />
          </mesh>
          <RoundedBox
            args={[0.1, 0.1, 0.05]}
            radius={0.02}
            position={[0.02, 0.03, -0.02]}
          >
            <meshPhysicalMaterial
              roughness={0.2}
              transmission={1}
              transparent
              opacity={0.9}
            />
          </RoundedBox>
          <Text3D size={0.06} height={0.03} font={FONT_PATH}>
            {value.charAt(0)}
            <GradientShaderMaterial />
          </Text3D>
          <Text3D size={0.04} height={0} font={FONT_PATH} position={offset}>
            {value.slice(1)}
            <meshStandardMaterial color={TEXT_COLOR} />
          </Text3D>
          <Text3D
            size={0.011}
            height={0}
            font={FONT_PATH}
            position={[0, -0.03, 0]}
          >
            {description}
            <meshStandardMaterial color={TEXT_COLOR} />
          </Text3D>
        </Center>
      ))}
    </group>
  )
})

ValueList.displayName = 'ValueList'
export default ValueList
