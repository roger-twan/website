import { ExtrudeGeometry, Shape } from 'three'

interface Hole extends Shape {}

export default (
  length: number,
  height: number,
  depth: number,
  holes?: Hole[]
): ExtrudeGeometry => {
  const shape = new Shape()
  shape
    .moveTo(0, 0)
    .lineTo(length, 0)
    .lineTo(length, height)
    .lineTo(0, height)
    .lineTo(0, 0)

  if (holes && holes.length) {
    holes.forEach((hole) => shape.holes.push(hole))
  }

  const extrudeGeometry = new ExtrudeGeometry(shape, { depth: depth })

  return extrudeGeometry
}
