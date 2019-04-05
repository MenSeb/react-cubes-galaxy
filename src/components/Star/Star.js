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
})
{
  const starStyle = useVariablesCSS({
    vars: { distance: `${ distance }px` },
    preVar: 'star'
  })

  return (
    <div className='Star' style={ starStyle }>
      <Rotation { ...rotation } d={ time }>
        <Cube color={ color } size={ size } aria-hidden={ true } />
      </Rotation>
    </div>
  )
}
