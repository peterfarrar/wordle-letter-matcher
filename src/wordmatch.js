const { matchTheIndexes } = require('./index-match')

// const statuses = [
//   'invalid-letter',
//   'wrong-position',
//   'correct-position'
// ]

const getIndexes = (letter, array, startingIndex) => {
  index = array.indexOf(letter, startingIndex)
  return index == -1 ? [] : [index, ...getIndexes(letter, array, index + 1)]
}

const checkTheGuess = (w, g) => {
  const word = w.split('')
  const guess = g.split('')
  const result = []
  guess.forEach((letter, i) => result[i] = { [letter]: 'invalid-letter' })

  guess.forEach(letter => {
    if (w.includes(letter)) {
      guessLetterIndex = getIndexes(letter, guess, 0)
      wordLetterIndex = getIndexes(letter, word, 0)
      matches = matchTheIndexes(guessLetterIndex, wordLetterIndex)
      matches.forEach(match => {
        const index = Object.keys(match)[0]
        result[index] = { [letter]: match[index] }
      })
    }
  })

  return result
}

// console.log(getIndexes('e', ['b','e','n','i','e'], 0))

module.exports = {
  checkTheGuess
}