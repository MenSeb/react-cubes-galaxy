import uid from 'uniqid';

const orbitColor = '38598b'
const rotation = { x: 1, y: 1, z: 1, t: 360 }
const hex = '0123456789ABCDEF'
const starSize = 100

const randomHex = () => hex[ Math.floor( Math.random() * hex.length ) ]
const randomHexColor = () => Array.from( { length: 3 }, _ => randomHex() ).join( '' )
const randomTime = () => Math.random() * 10 + 5

const planets = Array.from(
  { length: 8 },
  ( _, index ) =>
  {
    const planetSize = Math.random() * 25 + 25

    return {
      distance: ( index + 1 ) * 50 + starSize + planetSize,
      star: {
        color: randomHexColor(),
        size: planetSize,
        time: randomTime(),
        rotation
      },
      orbit: {
        color: orbitColor,
        size: planetSize,
        time: randomTime()
      }
    }
  }
)

export default [
  {
    distance: 0,
    star: {
      color: randomHexColor(),
      rotation,
      size: starSize,
      time: randomTime(),
    }
  },
  ...planets
].map( element => ({ id: uid(), ...element }) )