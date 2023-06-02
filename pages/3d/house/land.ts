import { Mesh, MeshPhongMaterial, ExtrudeGeometry, Shape } from 'three'
import CONFIG from './_config'

const shape = new Shape()
shape
  .moveTo(0, 0)
  .lineTo(CONFIG.land.size.length, 0)
  .lineTo(CONFIG.land.size.length, 0.1)
  .lineTo(0, 0.1)
  .lineTo(0, 0)

const extrudeGeometry = new ExtrudeGeometry(shape, {
  depth: CONFIG.land.size.width,
})

const material = new MeshPhongMaterial({ color: 0x44aa88 })
const land = new Mesh(extrudeGeometry, material)

export default land
