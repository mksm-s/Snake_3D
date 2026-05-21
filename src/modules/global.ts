import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { activeKeyTrue, ambit, snakePath } from './controls'
import { checkingTouchFood, updateCounterFoot } from './footLogic'
import { camera, renderer, scene } from './graphics'
import { optCtrlSnake, optGlobal, optModelLoad, optWindow } from './options'
import { createCube } from './snakeLogic'

// engine
function engine(now: number = performance.now()) {
  requestAnimationFrame(engine)

  let delta = now - optGlobal.then,
    interval = optGlobal.interval()

  if (delta > interval) {
    optGlobal.then = now - (delta % interval)
    move()
  }
}
engine()

// global render
function move() {
  ambit(optCtrlSnake.x, optCtrlSnake.y)
  snakePath()
  activeKeyTrue()
  optCtrlSnake.start ? startPlay() : null
  render()
}

// start play
function startPlay() {
  createCube(optCtrlSnake.x, optCtrlSnake.y, 0)
  checkingTouchFood()
}

// animate scene
function render() {
  renderer.render(scene, camera)
}
render()

export function restartGame() {
  optCtrlSnake.size = optCtrlSnake.defSize
  updateCounterFoot()
}

// random position
export function randomPosition(min = -15, max = 15) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// window resize
window.addEventListener('resize', resizeWindow)
function resizeWindow() {
  optWindow.w = innerWidth
  optWindow.h = innerHeight

  camera.aspect = optWindow.w / optWindow.h
  camera.updateProjectionMatrix()

  renderer.setSize(optWindow.w, optWindow.h)
  renderer.render(scene, camera)
}

// loader model
export function loaderModel(model, position, scale, rotation, id, add = true) {
  const loader = new GLTFLoader()

  loader.load(
    model,
    gltf => {
      gltf.scene.position.set(position.x, position.y, position.z)
      gltf.scene.scale.set(scale.x, scale.y, scale.z)
      gltf.scene.rotation.set(rotation.x, rotation.y, rotation.z)
      gltf.scene.userData.id = id
      gltf.scene.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })

      if (add) {
        scene.add(gltf.scene)
        render()
      }
    },
    xhr => (optModelLoad[id] = true),
    error => console.error('Ошибка загрузки 3D-модели:', error, model)
  )
}

// console.log(optModelLoad)

// remove model
export function removeModelsById(id) {
  const modelsToRemove = []

  scene.traverse(obj => {
    obj.userData.id === id ? modelsToRemove.push(obj) : undefined
  })

  modelsToRemove.forEach(elem => {
    scene.remove(elem)
  })
}
