[logo]: https://github.com/MenSeb/react-cubes-galaxy/blob/master/public/logo.svg "Cubes Galaxy logo"

![alt text][logo]

# Cubes Galaxy

The main purpose of this project is to create a 3D galaxy made of cube planets.

## Github Pages Demo

[Cubes Galaxy demo](https://menseb.github.io/react-cubes-galaxy/)

## Features

- Auto generating galaxy by providing an array of object

## Galaxy system element

Any element provided to a galaxy system needs at least a distance and a star

### Star element

```javascript
{
  distance,
  star: {
    size,
    time,
    color,
    rotation,
  }
}
```

### Planet element

```javascript
{
  distance,
  star: {
    size,
    time,
    color,
    rotation,
  },
  orbit: {
    size,
    color,
    distance,
  }
}
```

## Todos

- [ ] Configure the orbit size as a global prop or specific to each orbits
- [ ] Configure the rotation time as a global prop or specific to each planets
- [ ] Configure distance between each planets to avoid collisions/overlaps

## Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Licensing

The code in this project is licensed under MIT license.