import React from 'react'
import propTypes from './types'
import { useVariablesCSS } from '../../hooks';

Rotation.propTypes = propTypes

export default function Rotation ({ x, y, z, t, d, e, c, ...props })
{
  const rotationStyle = useVariablesCSS({
    vars: { x, y, z, t, d, e, c },
    preVar: 'r'
  })

  return (
    <div
      { ...props }
      aria-hidden={ true }
      className='Rotation'
      style={ rotationStyle }
    />
  )
}
