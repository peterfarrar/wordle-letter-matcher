const { expect } = require('chai')
const { checkTheGuess } = require('../src/wordmatch')

describe('match a guess', () => {
  it('has the letter once in the wrong position', () => {
    const word = 'teams'
    const guess = 'enjoy'

    expect(checkTheGuess(word, guess)).to.eql([
      { 'e': 'wrong-position' },
      { 'n': 'invalid-letter' },
      { 'j': 'invalid-letter' },
      { 'o': 'invalid-letter' },
      { 'y': 'invalid-letter' },
    ])
  })
  
  it('has the letter once in the right position', () => {
    const word = 'teams'
    const guess = 'jelly'

    expect(checkTheGuess(word, guess)).to.eql([
      { 'j': 'invalid-letter' },
      { 'e': 'correct-position' },
      { 'l': 'invalid-letter' },
      { 'l': 'invalid-letter' },
      { 'y': 'invalid-letter' },
    ])
  })
  
  it('has the letter once, but guessed twice in the wrong position', () => {
    const word = 'teams'
    const guess = 'breez'

    expect(checkTheGuess(word, guess)).to.eql([
      { 'b': 'invalid-letter' },
      { 'r': 'invalid-letter' },
      { 'e': 'wrong-position' },
      { 'e': 'invalid-letter' },
      { 'z': 'invalid-letter' },
    ])
  })

  it('has the letter once, but guessed twice, once in the right position', () => {
    const word = 'teams'
    const guess = 'beely'

    expect(checkTheGuess(word, guess)).to.eql([
      { 'b': 'invalid-letter' },
      { 'e': 'correct-position' },
      { 'e': 'invalid-letter' },
      { 'l': 'invalid-letter' },
      { 'y': 'invalid-letter' },
    ])
  })

  it('has the letter once, but guessed twice, first in the wrong position, second in the right position', () => {
    const word = 'teams'
    const guess = 'beely'

    expect(checkTheGuess(word, guess)).to.eql([
      { 'b': 'invalid-letter' },
      { 'e': 'correct-position' },
      { 'e': 'invalid-letter' },
      { 'l': 'invalid-letter' },
      { 'y': 'invalid-letter' },
    ])
  })
})