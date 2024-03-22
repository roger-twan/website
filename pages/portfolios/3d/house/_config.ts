export default {
  land: {
    size: {
      length: 2500,
      width: 1600,
    },
  },
  courtyard: {
    front: {
      size: {
        length: 1600,
        width: 500,
      },
    },
    background: {
      size: {
        length: 1600,
        width: 1000,
      },
    },
  },
  house: {
    size: {
      width: 1300,
      depth: 1000,
    },
    wall: {
      internalDepth: 10,
      externalDepth: 24,
      color: 0xe9e9e9,
    },
    floor1: {
      height: 360,
      garage: {
        size: {
          width: 600,
          depth: 600,
        },
        gate: {
          width: 540,
          height: 240,
          margin: 30,
        },
      },
      livingRoom: {
        frontDoor: {
          width: 120,
          height: 200,
          margin: 10,
        },
      },
    },
  },
}
