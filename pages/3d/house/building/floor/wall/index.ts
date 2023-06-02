import { Group } from 'three'
import backWall from './wall-back'
import frontWall from './wall-front'
import leftWall from './wall-left'
import rightWall from './wall-right'

const wall = new Group()

wall.add(backWall, frontWall, leftWall, rightWall)

export default wall
