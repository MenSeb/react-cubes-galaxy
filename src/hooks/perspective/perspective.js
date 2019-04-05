import { useCallback, useMemo } from 'react'

export default function usePerspective ({ elements })
{
  const computeDistance = useCallback(
    ({ distance, star: { size } }) => distance + size,
    []
  )

  const longestDistance = useCallback(
    ({ max, current }) => current > max ? current : max,
    []
  )

  const reduceElements = useCallback(
    ({ elements }) => elements.reduce(
      ( max, element ) => longestDistance({
        max,
        current: computeDistance( element )
      }),
      0
    ),
    []
  )

  const reduceSystem = useCallback(
    ({ elements }) => elements.reduce(
      ( max, element ) => longestDistance({
        max,
        current: reduceElements({ elements: element })
      }),
      0
    ),
    []
  )

  const isSystem = useMemo( () => Array.isArray( elements[ 0 ] ), [ elements ] )

  const reducer = useMemo( () => isSystem ? reduceSystem : reduceElements, [ isSystem ] )

  const perspective = useMemo( () => reducer({ elements }), [ elements ] )

  return perspective
}