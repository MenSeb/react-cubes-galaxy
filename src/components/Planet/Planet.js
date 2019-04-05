import React from 'react'
import propTypes from './types'
import { Star, Orbit, Rotation } from '..'

Planet.propTypes = propTypes

export default function Planet ({ distance, orbit: { time, ...orbit }, planet })
{
  return (
    <div className='Planet'>
      <Rotation y={ 1 } t={ 360 } d={ time }>
        <Star { ...planet } distance={ distance } />
      </Rotation>
      <Orbit { ...orbit } distance={ distance } />
    </div>
  )
}
