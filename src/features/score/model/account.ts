import number0 from '@/shared/assets/models/numbers/0.gltf'
import number1 from '@/shared/assets/models/numbers/1.gltf'
import number2 from '@/shared/assets/models/numbers/2.gltf'
import number3 from '@/shared/assets/models/numbers/3.gltf'
import number4 from '@/shared/assets/models/numbers/4.gltf'
import number5 from '@/shared/assets/models/numbers/5.gltf'
import number6 from '@/shared/assets/models/numbers/6.gltf'
import number7 from '@/shared/assets/models/numbers/7.gltf'
import number8 from '@/shared/assets/models/numbers/8.gltf'
import number9 from '@/shared/assets/models/numbers/9.gltf'

import { loaderModel, removeModelsById } from '@/shared/lib/three/modelLoader'

type NumbersInfo = {
  position: { x: number; y: number; z: number }
  distance: { x: number; y: number; z: number }
  scale: { x: number; y: number; z: number }
  rotate: { x: number; y: number; z: number }
}

export function defineNumbers(account: number | string, info: NumbersInfo, id: string) {
  const accountArray = `${account}`.split('')

  removeModelsById(id)

  accountArray.forEach((element, index) => {
    showNumberModel(element, info, index, id)
  })
}

function showNumberModel(number: string, info: NumbersInfo, index: number, id: string) {
  const numbers: Record<string, string> = {
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
