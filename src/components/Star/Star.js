import React from 'react'
import propTypes from './types'
import { Cube, Rotation } from '..';
import { useVariablesCSS } from '../../hooks';

Star.propTypes = propTypes

export default function Star ({
  color,
  distance,
  rotation,
  size,
  time,
  animated,
  ...props
})
{
  const starStyle = useVariablesCSS({
    vars: { distance: `${ distance }px`, animated },
    preVar: 'star'
  })

  return (
    <div { ...props } className='Star' style={ starStyle }>
      <Rotation { ...rotation } d={ time }>
        <Cube color={ color } size={ size } />
      </Rotation>
    </div>
  )
}
