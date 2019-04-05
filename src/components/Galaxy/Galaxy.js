import React from 'react'
import propTypes from './types'
import { useColors, usePerspective, useSizes } from '../../hooks';

Galaxy.propTypes = propTypes

export default function Galaxy ({ color, elements, ...props })
{
  const perspective = usePerspective({ elements })

  const colorsStyle = useColors({ colors: { color } })

  const sizesStyle = useSizes({ sizes: { perspective } })

  return (
    <div
      { ...props }
      className='Galaxy'
      style={{ ...colorsStyle, ...sizesStyle }}
    />
  )
}