import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Floodlight from './floodlight'
import Light from './light'
import Logo from './logo'

const AvatarModel = dynamic(() => import('@/components/avatar'), { ssr: false })

const HomeCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1.8], fov: 40 }}
      style={{ height: '100vh' }}
    >
      <OrbitControls
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 18}
        maxAzimuthAngle={Math.PI / 18}
        enableZoom={false}
      />
      <Light />
      <AvatarModel />
      <Logo />
      <Floodlight />
      <spotLight position={[5, 5, -5]} intensity={0.6} color="white" />
    </Canvas>
  )
}

export default HomeCanvas
