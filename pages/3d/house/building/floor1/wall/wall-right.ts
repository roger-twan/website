import { Mesh, MeshPhongMaterial } from 'three'
import CONFIG from '../../../_config'
import generateCubeShape from '@/utils/generateCubeShape'

const cube = generateCubeShape(
  CONFIG.house.size.depth - CONFIG.house.wall.externalDepth * 2,
  CONFIG.house.floor1.height,
  CONFIG.house.wall.externalDepth
)

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const rightWall = new Mesh(cube, material)
rightWall.position.x = CONFIG.house.wall.externalDepth

export default rightWall
