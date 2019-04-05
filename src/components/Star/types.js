import { bool, number, object, string } from 'prop-types'

export default {
  color: string.isRequired,
  distance: number.isRequired,
  rotation: object.isRequired,
  size: number.isRequired,
  time: number.isRequired,
  animated: bool,
}