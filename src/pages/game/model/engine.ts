import { checkingTouchFood, updateCounterFoot } from '@/entities/food/model/food'
import { createCube, hasSelfCollision } from '@/entities/snake/model/snake'
import { activeKeyTrue, ambit, snakePath } from '@/features/controls/controls'
import { optCtrlSnake, optGlobal, optWindow } from '@/shared/config/options'
import { camera, renderer, scene } from '@/shared/lib/three/scene'

let inited = false

export function initEngine() {
  if (inited) return
  inited = true

  window.addEventListener('resize', resizeWindow)

  engine()
  render()
}

function engine(now: number = performance.now()) {
  requestAnimationFrame(engine)

  const delta = now - optGlobal.then
  const interval = optGlobal.interval()

  if (delta > interval) {
    optGlobal.then = now - (delta % interval)
    move()
  }
}

function move() {
  ambit(optCtrlSnake.x, optCtrlSnake.y)
  snakePath()
  activeKeyTrue()

  if (optCtrlSnake.start) startPlay()

  render()
}

function startPlay() {
  createCube(optCtrlSnake.x, optCtrlSnake.y, 0)

  if (hasSelfCollision()) restartGame()

  checkingTouchFood()
}

function render() {
  renderer.render(scene, camera)
}

export function restartGame() {
  optCtrlSnake.size = optCtrlSnake.defSize
  updateCounterFoot()
}

function resizeWindow() {
  optWindow.w = innerWidth
  optWindow.h = innerHeight

  camera.aspect = optWindow.w / optWindow.h
  camera.updateProjectionMatrix()

  renderer.setSize(optWindow.w, optWindow.h)
  renderer.render(scene, camera)
}
