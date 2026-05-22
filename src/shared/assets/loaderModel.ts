import { loaderModel } from '@/shared/lib/three/modelLoader'

import appleModel from '@/shared/assets/models/a_p_02.gltf'
import platformModel from '@/shared/assets/models/b_p_12.gltf'
import crownModel from '@/shared/assets/models/crown_01.gltf'
import snakeBodyModel from '@/shared/assets/models/snake_body_02.gltf'
import snakeHeadModel from '@/shared/assets/models/snake_head_01.gltf'

export { appleModel, crownModel, platformModel, snakeBodyModel, snakeHeadModel }

let inited = false

export function initStaticModels() {
  if (inited) return
  inited = true

  loaderModel(
    platformModel,
    { x: -6.18, y: -6.06, z: -18.55 },
    { x: 5, y: 5, z: 5 },
    { x: Math.PI / 2, y: 0, z: 0 },
    'platformModel'
  )

  loaderModel(
    appleModel,
    { x: -3, y: 15.5, z: 4.5 },
    { x: 3, y: 3, z: 3 },
    { x: Math.PI / 2, y: Math.PI * 0.75, z: 0 },
    'appleAccount'
  )

  loaderModel(
    crownModel,
    { x: 15.5, y: 2, z: 3.5 },
    { x: 3, y: 3, z: 3 },
    { x: Math.PI / 2, y: Math.PI * 0.25, z: 0 },
    'crownModel'
  )
}
