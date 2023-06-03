import { Group } from 'three'
import leftWall from './wall-left'
import backWall from './wall-back'

const garage = new Group()

garage.add(leftWall, backWall)

export default garage
