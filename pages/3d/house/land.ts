import { BoxGeometry, Mesh, MeshPhongMaterial } from 'three'
import CONFIG from './_config'

const geometry = new BoxGeometry(
  CONFIG.land.size.length,
  1,
  CONFIG.land.size.width
)
const material = new MeshPhongMaterial({ color: 0x44aa88 })
const land = new Mesh(geometry, material)

export default land
