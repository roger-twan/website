import { useEffect, useRef } from 'react'
import {
  AxesHelper,
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'

export default function House() {
  let scene: Object3D | null = null
  let renderer: WebGLRenderer | null = null
  let camera: PerspectiveCamera | null = null
  const canvasWrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    !scene && initScene()
    window.addEventListener('resize', onWindowResize, false)
  })

  return <div ref={canvasWrapper} />

  function initScene() {
    scene = new Scene()
    camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    renderer = new WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0xffffff)
    canvasWrapper.current?.appendChild(renderer.domElement)

    const axes = new AxesHelper(50)
    scene.add(axes)

    const geometry = new BoxGeometry(2, 2, 2)
    const material = new MeshPhongMaterial({ color: 0x44aa88 })
    const cube = new Mesh(geometry, material)
    scene.add(cube)

    const light = new DirectionalLight(0xffffff, 1)
    light.position.set(1, 1, 1)
    scene.add(light)

    camera.position.set(5, 2, 10)

    function render() {
      cube.rotation.x += 0.005
      cube.rotation.y += 0.005
      renderer?.render(scene!, camera!)
      requestAnimationFrame(render)
    }
    render()
  }

  function onWindowResize() {
    camera!.aspect = window.innerWidth / window.innerHeight
    camera!.updateProjectionMatrix()
    renderer?.setSize(window.innerWidth, window.innerHeight)
  }
}
