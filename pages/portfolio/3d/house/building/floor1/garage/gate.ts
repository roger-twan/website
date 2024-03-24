import { Shape } from 'three'
import CONFIG from '../../../_config'

const gate = new Shape()
gate
  .moveTo(
    CONFIG.house.floor1.garage.gate.margin + CONFIG.house.wall.externalDepth,
    0
  )
  .lineTo(
    CONFIG.house.floor1.garage.gate.margin + CONFIG.house.wall.externalDepth,
    CONFIG.house.floor1.garage.gate.height
  )
  .lineTo(
    CONFIG.house.floor1.garage.gate.margin +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.floor1.garage.gate.width,
    CONFIG.house.floor1.garage.gate.height
  )
  .lineTo(
    CONFIG.house.floor1.garage.gate.margin +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.floor1.garage.gate.width,
    0
  )
  .lineTo(CONFIG.house.floor1.garage.gate.margin, 0)

export default gate
