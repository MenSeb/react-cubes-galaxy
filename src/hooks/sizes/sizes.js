import { useVariablesCSS } from '..';

export default function useSizes ({
  sizes,
  preVar = 'size',
  sufVal = 'px',
  sepVal = '',
  ...options
})
{
  return useVariablesCSS({
    vars: sizes,
    preVar,
    sufVal,
    sepVal,
    ...options
  })
}