import React from 'react'
import propTypes from './types'
import { Cube, Rotation } from '..';
import { useSizes } from '../../hooks';

Star.propTypes = propTypes

export default function Star ({
  distance,
  star: { time, rotation, ...star },
  ...props
})
{
  const sizesStyle = useSizes({ sizes: { distance } })

  return (
    <div { ...props } className='Star' style={ sizesStyle }>
      <Rotation { ...rotation } d={ time }>
        <Cube { ...star } aria-hidden={ true } />
      </Rotation>
    </div>
  )
}
