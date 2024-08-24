import { Text3D, Center } from '@react-three/drei'
import { useFrame, Vector3 } from '@react-three/fiber'
import GradientShaderMaterial from '@/components/gradient-shader-material'
import { forwardRef, Ref, useImperativeHandle, useState } from 'react'

interface HelloTextProps {
  position?: Vector3
}

const HelloText = forwardRef(
  (props: HelloTextProps, ref: Ref<unknown> | undefined) => {
    const [scale, setScale] = useState(0)
    const [targetScale, setTargetScale] = useState(0)

    useImperativeHandle(ref, () => ({
      show: () => setTargetScale(1),
      hide: () => setTargetScale(0),
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

    return (
      <Center position={props.position} scale={scale}>
        <Text3D size={0.08} height={0.03} font="/fonts/Orbitron_Regular.json">
          Hi, I&apos;m Roger
          <GradientShaderMaterial />
        </Text3D>
      </Center>
    )
  }
)

HelloText.displayName = 'HelloText'
export default HelloText
