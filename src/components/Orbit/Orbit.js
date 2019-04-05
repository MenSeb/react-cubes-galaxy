import React from 'react'
import propTypes from './types'
import { useVariablesCSS } from '../../hooks';

Orbit.propTypes = propTypes

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
