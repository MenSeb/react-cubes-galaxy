import uid from 'uniqid';

const orbitColors = [ '333333', '888888', 'BBBBBB' ]

export default [
  {
    distance: 0,
    star: {
      color: 'FFFF00',
      rotation: { x: 1, y: 1, z: 1, t: 360 },
      size: 100,
      time: 10,
    }
  },
  {
    distance: 150,
    star: {
      color: 'FF0000',
      rotation: { y: 1, t: 360 },
      size: 20,
      time: 6,
    },
    orbit: {
      colors: orbitColors,
      size: 2,
      time: 4
    }
  }
].map( element => ({ id: uid(), ...element }) )