import React from 'react'
import propTypes from './types'
import { useVariablesCSS } from '../../hooks';

Rotation.propTypes = propTypes

export default function Rotation ({ x, y, z, t, d, e, c, children })
{
  const rotationStyle = useVariablesCSS({
    vars: { x, y, z, t, d, e, c },
    preVar: 'r'
  })

  return (
    <div aria-hidden={ true } className='Rotation'  style={ rotationStyle }>
      { children }
    </div>
  )
}
