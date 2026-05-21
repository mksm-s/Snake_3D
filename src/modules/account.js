import number0 from '../models/numbers/0.gltf'
import number1 from '../models/numbers/1.gltf'
import number2 from '../models/numbers/2.gltf'
import number3 from '../models/numbers/3.gltf'
import number4 from '../models/numbers/4.gltf'
import number5 from '../models/numbers/5.gltf'
import number6 from '../models/numbers/6.gltf'
import number7 from '../models/numbers/7.gltf'
import number8 from '../models/numbers/8.gltf'
import number9 from '../models/numbers/9.gltf'
import { loaderModel, removeModelsById } from './global.js'

export function defineNumbers(account, info, id) {
  account = `${account}`
  let accountArray = account.split('')

  removeModelsById(id)

  accountArray.forEach((element, index) => {
    if (index === 0) showNumberModel(element, info, index, id)
    else showNumberModel(element, info, index, id)
  })
}

function showNumberModel(number, info, index, id) {
  const numbers = {
    0: number0,
    1: number1,
    2: number2,
    3: number3,
    4: number4,
    5: number5,
    6: number6,
    7: number7,
    8: number8,
    9: number9,
  }

  loaderModel(
    numbers[number],
    {
      x: info.position.x + info.distance.x * index,
      y: info.position.y + info.distance.y * index,
      z: info.position.z + info.distance.z * index,
    },
    {
      x: info.scale.x,
      y: info.scale.y,
      z: info.scale.z,
    },
    {
      x: info.rotate.x,
      y: info.rotate.z,
      z: info.rotate.y,
    },
    id
  )
}
