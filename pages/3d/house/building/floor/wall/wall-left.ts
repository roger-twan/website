import { Mesh, MeshPhongMaterial, ExtrudeGeometry, Shape } from 'three'
import CONFIG from '../../../_config'

const shape = new Shape()
shape
  .moveTo(CONFIG.house.wall.externalDepth, 0)
  .lineTo(CONFIG.house.size.width - CONFIG.house.wall.externalDepth * 2, 0)
  .lineTo(
    CONFIG.house.size.width - CONFIG.house.wall.externalDepth * 2,
    CONFIG.house.floor1.height
  )
  .lineTo(CONFIG.house.wall.externalDepth, CONFIG.house.floor1.height)
  .lineTo(CONFIG.house.wall.externalDepth, 0)

const extrudeGeometry = new ExtrudeGeometry(shape, {
  depth: CONFIG.house.wall.externalDepth,
})

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const leftWall = new Mesh(extrudeGeometry, material)
leftWall.position.z = CONFIG.house.size.length - CONFIG.house.wall.externalDepth

export default leftWall
