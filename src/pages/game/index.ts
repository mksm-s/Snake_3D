import { initFood } from '@/entities/food/model/food'
import { createCube } from '@/entities/snake/model/snake'
import { initControls } from '@/features/controls/controls'
import { initFps } from '@/features/fps/fps'
import { initLoaderScreen } from '@/features/loader-screen/loader-screen'
import { initEngine } from '@/pages/game/model/engine'
import { initStaticModels } from '@/shared/assets/loaderModel'

export function initGamePage() {
  // scene is initialized on import of shared/lib/three/scene via deps
  initControls()
  initStaticModels()

  // initial render state
  createCube(0, 0)

  initFood()
  initLoaderScreen()
  initFps()
  initEngine()
}
