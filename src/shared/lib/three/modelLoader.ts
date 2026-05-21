import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { optModelLoad } from '@/shared/config/options'
import { camera, renderer, scene } from '@/shared/lib/three/scene'

type Vec3 = { x: number; y: number; z: number }

type Rotation = { x: number; y: number; z: number }

type Scale = { x: number; y: number; z: number }

function render() {
  renderer.render(scene, camera)
}

export function loaderModel(
  model: string,
  position: Vec3,
  scale: Scale,
  rotation: Rotation,
  id: string,
  add = true
) {
  const loader = new GLTFLoader()

  loader.load(
    model,
    gltf => {
      gltf.scene.position.set(position.x, position.y, position.z)
      gltf.scene.scale.set(scale.x, scale.y, scale.z)
      gltf.scene.rotation.set(rotation.x, rotation.y, rotation.z)
      gltf.scene.userData.id = id
      gltf.scene.traverse(child => {
        if ((child as any).isMesh) {
          ;(child as any).castShadow = true
          ;(child as any).receiveShadow = true
        }
      })

      if (add) {
        scene.add(gltf.scene)
        render()
      }
    },
    () => {
      optModelLoad[id] = true
    },
    error => console.error('Ошибка загрузки 3D-модели:', error, model)
  )
}

export function removeModelsById(id: string) {
  const modelsToRemove: any[] = []

  scene.traverse(obj => {
    if ((obj as any).userData?.id === id) modelsToRemove.push(obj)
  })

  modelsToRemove.forEach(elem => {
    scene.remove(elem)
  })

  render()
}
