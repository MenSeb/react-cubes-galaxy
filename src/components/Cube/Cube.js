import React from 'react'
import PropTypes from 'prop-types'

export default function Cube ({ color, size, ...props })
{
  return (
    <div { ...props } className='Cube'>
      <div className='Faces' />
      <div className='Faces' />
    </div>
  )
}

Cube.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}