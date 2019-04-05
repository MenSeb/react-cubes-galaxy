import React from 'react'
import propTypes from './types'
import { Planet, Star } from '..'

System.propTypes = propTypes

export default function System ({ elements, ...props })
{
  return (
    <div { ...props } className='System'>
    {
      elements.map(
        ( { id, ...element }, index ) =>
        {
          const SystemElement = index > 0 ? Planet : Star

          return (
            <SystemElement { ...element } key={ id } />
          )
        }
      )
    }
    </div>
  )
}