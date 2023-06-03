import { Mesh, MeshPhongMaterial } from 'three'
import CONFIG from '../../../_config'
import generateCubeShape from '@/utils/generateCubeShape'
import garageGate from '../garage/gate'

const cube = generateCubeShape(
  CONFIG.house.size.width,
  CONFIG.house.floor1.height,
  CONFIG.house.wall.externalDepth,
  [garageGate]
)

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const frontWall = new Mesh(cube, material)
frontWall.rotateY(-Math.PI / 2)
frontWall.position.x = CONFIG.house.size.depth

export default frontWall
