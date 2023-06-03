import { Group } from 'three'
import wall from './wall'
import garage from './garage'

const floor1 = new Group()

floor1.add(wall, garage)

export default floor1
