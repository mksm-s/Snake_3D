import { defineNumbers } from '@/features/score/model/account'
import { optCtrlSnake } from '@/shared/config/options'

export function checkRecord() {
  if (!localStorage.getItem('record')) {
    localStorage.setItem('record', optCtrlSnake.record.toString())

    updateRecordFoot()
  } else {
    if (+localStorage.getItem('record') < optCtrlSnake.lengthSnake) {
      optCtrlSnake.record = +localStorage.getItem('record') + 1
      localStorage.setItem('record', optCtrlSnake.record.toString())

      updateRecordFoot()
    } else {
      optCtrlSnake.record = +localStorage.getItem('record')
      updateRecordFoot()
    }
  }
}

function updateRecordFoot() {
  defineNumbers(
    optCtrlSnake.record,
    {
      position: {
        x: 15.5,
        y: 0,
        z: 0.7,
      },
      distance: {
        x: 0,
        y: -1.9,
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
        z: Math.PI * 1.5,
      },
    },
    'record'
  )
}
