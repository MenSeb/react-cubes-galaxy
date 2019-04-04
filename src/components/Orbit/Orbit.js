import React from 'react'
import PropTypes from 'prop-types'
import { useVariablesCSS } from '../../hooks';

export default function Orbit ({ color, distance, size, ...props })
{
  const orbitStyle = useVariablesCSS({
    vars: {
      color: `#${ color }`,
      distance: `${ distance }px`,
      size: `${ size }px`
    },
    preVar: 'orbit'
  })

  return (
    <div { ...props } className='Orbit' style={ orbitStyle } />
  )
}

Orbit.propTypes = {
  color: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
}