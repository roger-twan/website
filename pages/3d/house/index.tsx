import { useEffect, useRef } from 'react'
import {
  AxesHelper,
  DirectionalLight,
  Group,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import land from './land'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

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
    const scene = new Scene()
    const renderer = new WebGLRenderer({ antialias: true })
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    )
    const controls = new OrbitControls(camera, renderer.domElement)

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0xffffff)
    canvasWrapper.current?.appendChild(renderer.domElement)

    // AxesHelper
    const axes = new AxesHelper(5000)
    scene.add(axes)

    // house object
    const totalObj = new Group()
    totalObj.add(land)
    scene.add(totalObj)

    // set light
    const light = new DirectionalLight(0xffffff, 1)
    light.position.set(1600, 1800, 2000)
    scene.add(light)

    // set camera
    camera.position.set(600, 1000, 2000)
    controls.update()

    function render() {
      requestAnimationFrame(render)
      renderer?.render(scene!, camera!)
      controls.update()
    }
    render()
  }

  function onWindowResize() {
    camera!.aspect = window.innerWidth / window.innerHeight
    camera!.updateProjectionMatrix()
    renderer?.setSize(window.innerWidth, window.innerHeight)
  }
}
