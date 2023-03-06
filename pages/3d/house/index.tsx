import { useEffect, useRef } from 'react'
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'

export default function House() {
  let scene: Object3D | null = null
  const canvasWrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    !scene && initScene()
  })

  return <div ref={canvasWrapper} />

  function initScene() {
    scene = new Scene()
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvasWrapper.current?.appendChild(renderer.domElement)

    const geometry = new BoxGeometry(1, 1, 1)
    const material = new MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new Mesh(geometry, material)
    scene.add(cube)

    camera.position.z = 5

    function animate() {
      requestAnimationFrame(animate)
      renderer.render(scene!, camera)
    }
    animate()
  }
}
