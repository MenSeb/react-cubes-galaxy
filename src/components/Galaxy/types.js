import { string, arrayOf, object, oneOfType } from 'prop-types'

const objectArray = arrayOf( object )

export default {
  color: string.isRequired,
  elements: oneOfType([ objectArray, arrayOf( objectArray ) ]).isRequired
}