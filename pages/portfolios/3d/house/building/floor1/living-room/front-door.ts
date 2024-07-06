import { Shape } from 'three'
import CONFIG from '../../../_config'

const frontDoor = new Shape()
frontDoor
  .moveTo(
    CONFIG.house.floor1.garage.size.width +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.wall.internalDepth +
      CONFIG.house.floor1.livingRoom.frontDoor.margin,
    0
  )
  .lineTo(
    CONFIG.house.floor1.garage.size.width +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.wall.internalDepth +
      CONFIG.house.floor1.livingRoom.frontDoor.margin,
    CONFIG.house.floor1.livingRoom.frontDoor.height
  )
  .lineTo(
    CONFIG.house.floor1.garage.size.width +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.wall.internalDepth +
      CONFIG.house.floor1.livingRoom.frontDoor.margin +
      CONFIG.house.floor1.livingRoom.frontDoor.width,
    CONFIG.house.floor1.livingRoom.frontDoor.height
  )
  .lineTo(
    CONFIG.house.floor1.garage.size.width +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.wall.internalDepth +
      CONFIG.house.floor1.livingRoom.frontDoor.margin +
      CONFIG.house.floor1.livingRoom.frontDoor.width,
    0
  )
  .lineTo(
    CONFIG.house.floor1.garage.size.width +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.wall.internalDepth +
      CONFIG.house.floor1.livingRoom.frontDoor.margin,
    0
  )

export default frontDoor
