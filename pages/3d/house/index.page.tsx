import { useEffect, useRef } from 'react'
import {
  AxesHelper,
  DirectionalLight,
  Group,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Vector3,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import CONFIG from './_config'
import land from './land'
import building from './building'

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
      1e10
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
    totalObj.add(building)
    scene.add(totalObj)

    // set light
    const light = new DirectionalLight(0xffffff, 1)
    light.position.set(2000, 1800, 1600)
    const reverseLight = new DirectionalLight(0xffffff, 0.5)
    reverseLight.position.set(-2000, -1600, -1800)
    scene.add(light, reverseLight)

    // set camera
    camera.position.set(1600, 1600, 3000)

    controls.target = new Vector3(
      CONFIG.land.size.length / 2,
      0,
      CONFIG.land.size.width / 2
    )
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
