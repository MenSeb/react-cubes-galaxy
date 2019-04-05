import React from 'react'
import propTypes from './types'
import { useColors, useSizes } from '../../hooks';

Orbit.propTypes = propTypes

export default function Orbit ({
  colors: [ before, border, after ],
  distance,
  size,
  ...props
})
{
  const colorsStyle = useColors({ colors: { before, border, after } })

  const sizesStyle = useSizes({ sizes: { distance, size } })

  return (
    <div
      { ...props }
      className='Orbit'
      style={{ ...sizesStyle, ...colorsStyle }}
    />
  )
}
