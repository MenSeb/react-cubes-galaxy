import { number, oneOf, oneOfType, string } from 'prop-types'

const oneOrZero = oneOf([ 0, 1 ])

export default {
  x: oneOrZero,
  y: oneOrZero,
  z: oneOrZero,
  t: number,
  d: number,
  e: string,
  c: oneOfType([ string, number]),
}