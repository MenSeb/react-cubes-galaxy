import React from 'react'
import PropTypes from 'prop-types'
import { Cube, Rotation } from '..';
import { useVariablesCSS } from '../../hooks';

export default function Star ({
  color,
  distance,
  rotation,
  size,
  time,
  ...props
})
{
  const starStyle = useVariablesCSS({
    vars: { distance: `${ distance }px` },
    preVar: 'star'
  })

  return (
    <div { ...props } className='Star' style={ starStyle }>
      <Rotation { ...rotation } d={ time }>
        <Cube color={ color } size={ size } />
      </Rotation>
    </div>
  )
}

Star.propTypes = {
  color: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  rotation: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
}