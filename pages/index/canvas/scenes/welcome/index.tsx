import HelloText from './hello-text'
import ValueList from './value-list'
import { useThree, Vector3 } from '@react-three/fiber'
import Logo from './logo'
import { forwardRef, useImperativeHandle, useRef } from 'react'

interface WelcomeProps {
  onValueHover?: (position: Vector3 | null) => void
  onValueHoverEnd?: () => void
}

const Welcome = forwardRef((props: WelcomeProps, ref) => {
  const { width, height } = useThree((state) => state.viewport)
  const helloTextRef = useRef<any>()
  const valueListRef = useRef<any>()

  useImperativeHandle(ref, () => ({
    showHelloText: () => helloTextRef.current?.show(),
    hideHelloText: () => helloTextRef.current?.hide(),
    showValueList: () => valueListRef.current?.show(),
    hideValueList: () => valueListRef.current?.hide(),
  }))

  return (
    <group>
      <Logo />
      <HelloText position={[0, -0.3, 0.3]} ref={helloTextRef} />
      <ValueList
        width={width}
        height={height}
        ref={valueListRef}
        onValueHover={props?.onValueHover}
        onValueHoverEnd={props?.onValueHoverEnd}
      />
    </group>
  )
})

Welcome.displayName = 'Welcome'
export default Welcome
