import React from 'react'
import PropTypes from 'prop-types'
import { useVariablesCSS } from '../../hooks';

export default function Cube ({ color, size, ...props })
{
  const cubeStyle = useVariablesCSS({
    vars: { color: `#${ color }`, size: `${ size }px` },
    preVar: 'cube'
  })

  return (
    <div { ...props } className='Cube' style={ cubeStyle }>
      <div className='Faces' />
      <div className='Faces' />
    </div>
  )
}

Cube.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}