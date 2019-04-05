import { array, number, object, shape, string } from 'prop-types'

export default {
  distance: number.isRequired,
  planet: shape({
    color: string.isRequired,
    rotation: object.isRequired,
    size: number.isRequired,
    time: number.isRequired
  }).isRequired,
  orbit: shape({
    colors: array.isRequired,
    size: number.isRequired,
    time: number.isRequired
  }).isRequired
}