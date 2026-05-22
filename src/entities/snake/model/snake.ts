import * as THREE from 'three'

import { optCtrlSnake } from '@/shared/config/options'
import { geometrySnake, materialSnake, scene } from '@/shared/lib/three/scene'

export function createCube(x: number, y: number, z = 0) {
  optCtrlSnake.body.unshift({ x, y, z })
  addCube()
}

export function addSizeSnake(size: number) {
  optCtrlSnake.size += size
}

export function hasSelfCollision() {
  const head = optCtrlSnake.body[0]
  if (!head) return false
  if (optCtrlSnake.body.length <= optCtrlSnake.defSize) return false

  return optCtrlSnake.body.some(
    (elem, index) => index !== 0 && elem.x === head.x && elem.y === head.y
  )
}

function addCube() {
  removeTail()
  clearMap()
  createTail()
}

function createTail() {
  optCtrlSnake.body.forEach(item => {
    const cube = new THREE.Mesh(geometrySnake, materialSnake)
    cube.name = 'snake'
    cube.castShadow = true
    cube.receiveShadow = true
    cube.position.set(item.x, item.y, item.z)

    scene.add(cube)
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
