import { Mesh, MeshPhongMaterial } from 'three'
import CONFIG from '../../../_config'
import generateCubeShape from '@/pages/portfolio/3d/generate-cube-shape'

const cube = generateCubeShape(
  CONFIG.house.size.width,
  CONFIG.house.floor1.height,
  CONFIG.house.wall.externalDepth
)

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const backWall = new Mesh(cube, material)
backWall.rotateY(-Math.PI / 2)
backWall.position.x = CONFIG.house.wall.externalDepth

export default backWall
