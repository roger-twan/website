import { Mesh, MeshPhongMaterial } from 'three'
import CONFIG from '../../../_config'
import generateCubeShape from '@/pages/portfolios/3d/generateCubeShape'

const cube = generateCubeShape(
  CONFIG.house.size.depth - CONFIG.house.wall.externalDepth * 2,
  CONFIG.house.floor1.height,
  CONFIG.house.wall.externalDepth
)

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const leftWall = new Mesh(cube, material)
leftWall.position.x = CONFIG.house.wall.externalDepth
leftWall.position.z = CONFIG.house.size.width - CONFIG.house.wall.externalDepth

export default leftWall
