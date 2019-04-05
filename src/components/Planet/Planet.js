import React from 'react'
import propTypes from './types'
import { Star, Orbit, Rotation } from '..'

Planet.propTypes = propTypes

export default function Planet ({
  distance,
  orbit: { time, ...orbit },
  star,
  ...props
})
{
  return (
    <div { ...props } className='Planet'>
      <Rotation y={ 1 } t={ 360 } d={ time }>
        <Star star={ star } distance={ distance } />
      </Rotation>
      <Orbit { ...orbit } distance={ distance } />
    </div>
  )
}
