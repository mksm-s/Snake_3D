import * as THREE from 'three'

let inited = false

export function initFps() {
  if (inited) return
  inited = true

  const clock = new THREE.Clock()

  const fpsContainer = document.createElement('div')
  fpsContainer.style.position = 'absolute'
  fpsContainer.style.top = '10px'
  fpsContainer.style.left = '10px'
  fpsContainer.style.color = 'white'
  fpsContainer.style.fontSize = '20px'
  document.body.appendChild(fpsContainer)

  function updateFPS() {
    const delta = clock.getDelta()
    const fps = Math.round(1 / delta)
    fpsContainer.textContent = 'FPS: ' + fps
  }

  function animate() {
    requestAnimationFrame(animate)
    updateFPS()
  }

  animate()
}
