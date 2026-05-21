import * as THREE from 'three'

import { restartGame } from './global'
import { geometrySnake, materialSnake, scene } from './graphics'
import { optCtrlSnake } from './options'

export function createCube(x, y, z = 0) {
  optCtrlSnake.body.unshift({ x, y, z })
  addCube()
}

function addCube() {
  removeTail()
  clearMap()
  createTail()
}

export function addSizeSnake(size) {
  optCtrlSnake.size += size
}

function createTail() {
  optCtrlSnake.body.forEach((item, index) => {
    const cube = new THREE.Mesh(geometrySnake, materialSnake)
    cube.name = 'snake'
    cube.castShadow = true
    cube.receiveShadow = true
    cube.position.set(item.x, item.y, item.z)

    // loaderModel(
    //     // snake
    //     snakeBodyModel,
    //     { x: item.x, y: item.y, z: -.55},
    //     { x: 2, y: 2, z: 2 },
    //     { x: Math.PI / 2, y: Math.PI * 2, z: 0 },
    //     'snakeBodyModel'
    // );

    scene.add(cube)

    index === 0 ? checkingTouchTail(item) : null
  })
}

function checkingTouchTail(item) {
  optCtrlSnake.body.forEach((elem, index) => {
    if (
      index !== 0 &&
      optCtrlSnake.body.length > optCtrlSnake.defSize &&
      elem.x === item.x &&
      elem.y === item.y
    )
      restartGame()
  })
}

function removeTail() {
  if (optCtrlSnake.body.length > optCtrlSnake.size) {
    optCtrlSnake.body.splice(optCtrlSnake.size, optCtrlSnake.body.length)
  }
}

function clearMap() {
  for (let i = scene.children.length - 1; i >= 0; i--) {
    const cube = scene.children[i]
    if (cube.type === 'Mesh' && cube.name === 'snake') {
      scene.remove(cube)
    }
  }
}
