import React from 'react'
import { useVariablesCSS } from '../../hooks';

export default function Rotation ({ x, y, z, t, d, e, c, ...props })
{
  const rotationStyle = useVariablesCSS({
    vars: { x, y, z, t, d, e, c },
    preVar: 'r'
  })

  return (
    <div { ...props } className='Rotation' style={ rotationStyle } />
  )
}