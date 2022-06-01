// Stop the mutations!
const matchTheIndexes = (a /* guess letter index array */, b /* word letter index array  */) => {
  const result = []
  let totalAs = a.length
  let totalBs = b.length
  let tempA = a

  b.forEach(item => {
    if (a.includes(item)) {
      result.push({ [item]: 'correct-position'})
      totalAs --
      totalBs --
      tempA.splice(tempA.indexOf(item), 1)
    }
  })
  while (totalAs && totalBs) {
    result.push({[tempA[totalBs-1]]: 'wrong-position'})
    tempA.splice(totalBs - 1, 1)
    totalAs --
    totalBs --
  }
  tempA.forEach(item => result.push({[item]: 'invalid-letter'}))

  return result.sort((a, b) => Object.keys(a)[0] > Object.keys(b)[0] ? 1 : -1)
}

module.exports = {
  matchTheIndexes
}