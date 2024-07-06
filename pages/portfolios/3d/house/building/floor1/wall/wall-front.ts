import { Mesh, MeshPhongMaterial } from 'three'
import CONFIG from '../../../_config'
import generateCubeShape from '@/pages/portfolios/3d/generate-cube-shape'
import garageGate from '../garage/gate'
import livingRoomFrontDoor from '../living-room/front-door'

const cube = generateCubeShape(
  CONFIG.house.size.width,
  CONFIG.house.floor1.height,
  CONFIG.house.wall.externalDepth,
  [garageGate, livingRoomFrontDoor]
)

const material = new MeshPhongMaterial({ color: CONFIG.house.wall.color })
const frontWall = new Mesh(cube, material)
frontWall.rotateY(-Math.PI / 2)
frontWall.position.x = CONFIG.house.size.depth

export default frontWall
