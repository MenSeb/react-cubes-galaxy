import React from 'react'
import propTypes from './types'
import { Planet, Star } from '..'

Galaxy.propTypes = propTypes

export default function Galaxy ({ elements, ...props })
{
  return (
    <div { ...props } className='Galaxy'>
    {
      elements.map(
        ( { id, ...element }, index ) =>
        {
          const GalaxyElement = index > 0 ? Planet : Star

          return (
            <GalaxyElement { ...element } key={ id } />
          )
        }
      )
    }
    </div>
  )
}