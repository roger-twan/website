import { Box3, Group, Vector3 } from 'three'
import floor1 from './floor/wall'
import CONFIG from '../_config'

const building = new Group()

building.add(floor1)

setPosition()

function setPosition() {
  building.position.x = CONFIG.courtyard.background.size.width
  building.position.z = (CONFIG.land.size.width - CONFIG.house.size.length) / 2
}

export default building
