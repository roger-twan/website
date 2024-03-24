import { Group } from 'three'
import floor1 from './floor1'
import CONFIG from '../_config'

const building = new Group()

building.add(floor1)

setPosition()

function setPosition() {
  building.position.x = CONFIG.courtyard.background.size.width
  building.position.z = (CONFIG.land.size.width - CONFIG.house.size.width) / 2
}

export default building
