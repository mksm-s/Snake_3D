export function randomPosition(min = -15, max = 15) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
