import { Shape } from 'three'
import CONFIG from '../../../_config'

const gate = new Shape()
gate
  .moveTo(CONFIG.house.garage.gate.margin + CONFIG.house.wall.externalDepth, 0)
  .lineTo(
    CONFIG.house.garage.gate.margin + CONFIG.house.wall.externalDepth,
    CONFIG.house.garage.gate.height
  )
  .lineTo(
    CONFIG.house.garage.gate.margin +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.garage.gate.width,
    CONFIG.house.garage.gate.height
  )
  .lineTo(
    CONFIG.house.garage.gate.margin +
      CONFIG.house.wall.externalDepth +
      CONFIG.house.garage.gate.width,
    0
  )
  .lineTo(CONFIG.house.garage.gate.margin, 0)

export default gate
