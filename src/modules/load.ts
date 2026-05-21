import { optModelLoad } from './options'

function loadGame() {
  const interval = setInterval(() => {
    let allTrue = true

    for (const key in optModelLoad) {
      !optModelLoad[key] ? (allTrue = false) : undefined
    }

    if (allTrue) {
      hideLoadScreen()
      clearInterval(interval)
    }
  }, 150)
}
loadGame()

function hideLoadScreen() {
  const loadScreenHtml = document.getElementById('loader__screen')

  loadScreenHtml.style.opacity = '0'
  loadScreenHtml.style.zIndex = '-5'
}
