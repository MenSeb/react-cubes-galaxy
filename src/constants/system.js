import uid from 'uniqid';

export default [
  {
    distance: 0,
    star: {
      color: '777777',
      rotation: { x: 1, y: 1, z: 1, t: 360 },
      size: 50,
      time: 4,
    }
  },
  {
    distance: 200,
    star: {
      color: '777777',
      rotation: { x: 1, y: 1, z: 1, t: 360 },
      size: 50,
      time: 4,
    },
    orbit: {
      colors: [ 'FF0000', '00FF00', '0000FF' ],
      size: 5,
      time: 3
    }
  }
].map( element => ({ id: uid(), ...element }) )