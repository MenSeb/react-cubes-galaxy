import React from 'react'
import PropTypes from 'prop-types'
import { useVariablesCSS } from '../../hooks';

export default function Orbit ({ colors, distance, size, ...props })
{
  const [ colorBefore, color, colorAfter ] = colors

  const orbitStyle = useVariablesCSS({
    vars: {
      color: `#${ color }`,
      color_before: `#${ colorBefore }`,
      color_after: `#${ colorAfter }`,
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
  colors: PropTypes.arrayOf( PropTypes.string ).isRequired,
  distance: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
}