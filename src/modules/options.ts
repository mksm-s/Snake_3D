export const optWindow = {
  w: innerWidth,
  h: innerHeight,
}

export const optCamera = {
  x: 0,
  y: -80,
  z: 40,
  fov: 19.5,
  near: 0.1,
  far: 1000,
}

export const optScene = {
  x: 0,
  y: 5,
  z: 0,
  color: 0x262626,
  rotZ: Math.PI / 4,
}

export const optPlatform = {
  x: 31,
  y: 31,
  z: 1,
  color: 0x1b222e,
}

export const optSnake = {
  x: 1,
  y: 1,
  z: 1,
  color: 0x445c4c,
  inter: 1,
}

export const optFoot = {
  x: 1,
  y: 1,
  z: 1,
  color: 0xfa5050,
  inter: 1,
}

export const optDirLightOne = {
  x: -5,
  y: -3.6,
  z: 20,
  color: 0xffffff,
  inter: 0.8,
}

export const optDirLightTwo = {
  x: 10,
  y: -30,
  z: 20,
  color: 0xffffff,
  inter: 0.7,
}

export const optAmbLight = {
  x: 0,
  y: 0,
  z: 0,
  color: 0xffffff,
  inter: 0.5,
}

//==== controls ====//

export const optCtrlSnake = {
  x: 0,
  y: 0,
  step: 1,
  moveX: 0,
  moveY: 0,
  size: 3,
  defSize: 3,
  get lengthSnake() {
    return this.size - this.defSize
  },
  record: 0,
  activeKey: true,
  start: false,
  path: '',
  body: [],
}

//==== global ====//

export const optGlobal = {
  speed: 4,
  then: performance.now(),
  interval() {
    return 1000 / this.speed
  },
}

export const optKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

export const optModelLoad = {
  platformModel: false,
  appleAccount: false,
  // account : false,
  appleModel: false,
  crownModel: false,
}
