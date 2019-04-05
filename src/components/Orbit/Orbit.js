import React from 'react'
import propTypes from './types'
import { useColors, useVariablesCSS } from '../../hooks';

Orbit.propTypes = propTypes

export default function Orbit ({
  colors: [ before, border, after ],
  distance,
  size,
  ...props
})
{
  const colorsStyle = useColors({ colors: { before, border, after } })

  const orbitStyle = useVariablesCSS({
    vars: {
      distance: `${ distance }px`,
      size: `${ size }px`
    },
    preVar: 'orbit'
  })

  return (
    <div
      { ...props }
      className='Orbit'
      style={{ ...orbitStyle, ...colorsStyle }}
    />
  )
}
