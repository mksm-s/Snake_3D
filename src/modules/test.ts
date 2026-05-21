import * as THREE from 'three'

// const controls = new OrbitControls(camera, renderer.domElement)

// // helper directional light
// const dirLightHelper = new THREE.DirectionalLightHelper(dirLightOne, 1, 'red');
// scene.add(dirLightHelper);

// // helper directional light
// const dirLightTwoHelper = new THREE.DirectionalLightHelper(dirLightTwo, 1, 'green');
// scene.add(dirLightTwoHelper);

// const shadowHelper = new THREE.CameraHelper( dirLightTwo.shadow.camera );
// scene.add( shadowHelper );

// FPS
// Создайте экземпляр класса Clock
const clock = new THREE.Clock()

// Создайте элемент для отображения FPS
const fpsContainer = document.createElement('div')
fpsContainer.style.position = 'absolute'
fpsContainer.style.top = '10px'
fpsContainer.style.left = '10px'
fpsContainer.style.color = 'white'
fpsContainer.style.fontSize = '20px'
document.body.appendChild(fpsContainer)

// Функция для обновления счетчика FPS
function updateFPS() {
  const delta = clock.getDelta()
  const fps = Math.round(1 / delta)
  fpsContainer.textContent = 'FPS: ' + fps
}

animate()
function animate() {
  requestAnimationFrame(animate)
  updateFPS()
}
