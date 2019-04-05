import React from 'react'
import propTypes from './types'
import { useColors, useSizes } from '../../hooks';

Cube.propTypes = propTypes

export default function Cube ({ color, size, ...props })
{
  const colorsStyle = useColors({ colors: { color } })

  const sizesStyle = useSizes({ sizes: { size } })

  return (
    <div { ...props } className='Cube' style={{ ...colorsStyle, ...sizesStyle }}>
      <div className='Faces' aria-hidden={ true } />
      <div className='Faces' aria-hidden={ true } />
    </div>
  )
}