import { optModelLoad } from '@/shared/config/options'

let inited = false

export function initLoaderScreen() {
  if (inited) return
  inited = true

  const interval = setInterval(() => {
    let allTrue = true

    for (const key in optModelLoad) {
      if (!optModelLoad[key]) allTrue = false
    }

    if (allTrue) {
      hideLoadScreen()
      clearInterval(interval)
    }
  }, 150)
}

function hideLoadScreen() {
  const loadScreenHtml = document.getElementById('loader__screen')
  if (!loadScreenHtml) return

  ;(loadScreenHtml as HTMLElement).style.opacity = '0'
  ;(loadScreenHtml as HTMLElement).style.zIndex = '-5'
}
