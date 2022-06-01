const matchTheIndexes = (a /* guess letter index array */, b /* word letter index array  */) => {
  let result = []
  let totalAs = a.length
  let totalBs = b.length
  let tempA = [...a]

  b.forEach(item => {
    if (a.includes(item)) {
      result = [...result, { [item]: 'correct-position'}]
      totalAs --
      totalBs --
      tempA.splice(tempA.indexOf(item), 1)
    }
  })
  while (totalAs && totalBs) {
    result = [...result, {[tempA[totalBs-1]]: 'wrong-position'}]
    tempA.splice(totalBs - 1, 1)
    totalAs --
    totalBs --
  }
  tempA.forEach(item => result = [...result, {[item]: 'invalid-letter'}])

  return result.sort((a, b) => Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1)
}

module.exports = {
  matchTheIndexes
}