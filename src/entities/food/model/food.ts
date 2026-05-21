import * as THREE from 'three'

import { addSizeSnake } from '@/entities/snake/model/snake'
import { defineNumbers } from '@/features/score/model/account'
import { checkRecord } from '@/features/score/model/record'
import { appleModel } from '@/shared/assets/loaderModel'
import { optCtrlSnake, optFoot } from '@/shared/config/options'
import { randomPosition } from '@/shared/lib/random'
import { loaderModel, removeModelsById } from '@/shared/lib/three/modelLoader'
import { geometryFoot, materialFoot, scene } from '@/shared/lib/three/scene'

let inited = false

export function initFood() {
  if (inited) return
  inited = true

  createFoot()
  updateCounterFoot()
  checkRecord()
}

export function createFoot() {
  const footMesh = new THREE.Mesh(geometryFoot, materialFoot)
  footMesh.name = 'foot'

  optFoot.x = randomPosition()
  optFoot.y = randomPosition()

  positionValidationFoot(optFoot.x, optFoot.y)
  positionFoot(footMesh, optFoot.x, optFoot.y)

  removeModelsById('appleModel')

  loaderModel(
    appleModel,
    { x: optFoot.x, y: optFoot.y, z: -0.5 },
    { x: 2, y: 2, z: 2 },
    { x: Math.PI / 2, y: Math.random() * Math.PI, z: 0 },
    'appleModel'
  )
}

function positionValidationFoot(x: number, y: number) {
  optCtrlSnake.body.forEach(elem => {
    if (elem.x === x && elem.y === y) {
      clearFoot()
      createFoot()
    }
  })
}

function positionFoot(elem: THREE.Object3D, x: number, y: number, z = 0) {
  elem.position.set(x, y, z)
}

export function checkingTouchFood() {
  const head = optCtrlSnake.body[0]
  if (!head) return

  if (head.x === optFoot.x && head.y === optFoot.y) {
    addSizeSnake(1)
    updateCounterFoot()
    checkRecord()
    clearFoot()
    createFoot()
  }
}

export function updateCounterFoot() {
  defineNumbers(
    optCtrlSnake.lengthSnake,
    {
      position: {
        x: -1,
        y: 15.5,
        z: 0.2,
      },
      distance: {
        x: 1.9,
        y: 0,
        z: 0,
      },
      scale: {
        x: 2,
        y: 2,
        z: 2,
      },
      rotate: {
        x: Math.PI / 2,
        y: Math.PI * 2,
        z: 0,
      },
    },
    'account'
  )
}

function clearFoot() {
  for (let i = scene.children.length - 1; i >= 0; i--) {
    const foot = scene.children[i]
    if (foot.type === 'Mesh' && foot.name === 'foot') {
      scene.remove(foot)
    }
  }
}
