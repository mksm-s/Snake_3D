import { loaderModel } from './global'

import appleModel from '../models/a_p_02.gltf'
import platformModel from '../models/b_p_12.gltf'
import crownModel from '../models/crown_01.gltf'
import snakeBodyModel from '../models/snake_body_02.gltf'
import snakeHeadModel from '../models/snake_head_01.gltf'

export { appleModel, crownModel, platformModel, snakeBodyModel, snakeHeadModel }

loaderModel(
  // // dark
  // platformModel,
  // { x: -0.245, y: -0.75, z: -6.2},
  // { x: 5, y: 5, z: 5 },
  // { x: Math.PI / 2, y: 0, z: 0 },
  // 'platformModel'

  // light
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

// loaderModel(
//     // snake
//     snakeHeadModel,
//     { x: 10, y: -10, z: -.5},
//     { x: 2, y: 2, z: 2 },
//     { x: Math.PI / 2, y: Math.PI * 2, z: 0 },
//     'snake'
// );
//
// loaderModel(
//     // snake
//     snakeBodyModel,
//     { x: 10, y: -9, z: -.55},
//     { x: 2, y: 2, z: 2 },
//     { x: Math.PI / 2, y: Math.PI * 2, z: 0 },
//     'snake'
// );
