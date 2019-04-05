import { arrayOf, number, string } from 'prop-types'

export default {
  colors: arrayOf( string ).isRequired,
  distance: number.isRequired,
  size: number.isRequired,
}