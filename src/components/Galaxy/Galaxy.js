import React from 'react'
import { usePerspective, useVariablesCSS } from '../../hooks';

export default function Galaxy ({ color, elements, ...props })
{
  const perspective = usePerspective({ elements })

  const galaxyStyle = useVariablesCSS({
    vars: {
      color: `#${ color }`,
      perspective: `${ perspective }px`
    },
    preVar: 'galaxy'
  })

  return (
    <div { ...props } className='Galaxy' style={ galaxyStyle } />
  )
}