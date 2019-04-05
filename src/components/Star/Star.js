import React from 'react'
import propTypes from './types'
import { Cube, Rotation } from '..';
import { useVariablesCSS } from '../../hooks';

Star.propTypes = propTypes

export default function Star ({
  distance,
  star: { time, rotation, ...star },
  ...props
})
{
  const starStyle = useVariablesCSS({
    vars: { distance: `${ distance }px` },
    preVar: 'star'
  })

  return (
    <div { ...props } className='Star' style={ starStyle }>
      <Rotation { ...rotation } d={ time }>
        <Cube { ...star } aria-hidden={ true } />
      </Rotation>
    </div>
  )
}
