import { arrayOf, number, string } from 'prop-types'

export default {
  colors: arrayOf( string ).isRequired,
  size: number.isRequired,
}