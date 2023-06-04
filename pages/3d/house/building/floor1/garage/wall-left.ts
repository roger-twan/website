import { Mesh, MeshPhongMaterial } from 'three'
import CONFIG from '../../../_config'
import generateCubeShape from '@/utils/generateCubeShape'

const cube = generateCubeShape(
  CONFIG.house.floor1.garage.size.depth,
  CONFIG.house.floor1.height,
  CONFIG.house.wall.internalDepth
)

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const leftWall = new Mesh(cube, material)
leftWall.position.x =
  CONFIG.house.size.depth -
  CONFIG.house.floor1.garage.size.width -
  CONFIG.house.wall.externalDepth
leftWall.position.z =
  CONFIG.house.floor1.garage.size.width + CONFIG.house.wall.externalDepth

export default leftWall
