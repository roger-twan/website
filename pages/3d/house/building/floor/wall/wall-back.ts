import { Mesh, MeshPhongMaterial, ExtrudeGeometry, Shape } from 'three'
import CONFIG from '../../../_config'

const shape = new Shape()
shape
  .moveTo(0, 0)
  .lineTo(CONFIG.house.wall.externalDepth, 0)
  .lineTo(CONFIG.house.wall.externalDepth, CONFIG.house.floor1.height)
  .lineTo(0, CONFIG.house.floor1.height)
  .lineTo(0, 0)

const extrudeGeometry = new ExtrudeGeometry(shape, {
  depth: CONFIG.house.size.length,
})

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const backendWall = new Mesh(extrudeGeometry, material)

export default backendWall
