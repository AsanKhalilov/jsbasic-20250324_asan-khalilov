function camelize(str) {
  // ваш код...
  return str
    .split('-')
    .map((part, index) => index === 0 ?
      part :
      `${part[0].toUpperCase()}${part.slice(1)}`)
    .join('')
}
