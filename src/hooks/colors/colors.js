import { useVariablesCSS } from '..';

export default function useColors ({ colors })
{
  return useVariablesCSS({
    vars: colors,
    preVar: 'color',
    preVal: '#',
    sepVal: ''
  })
}