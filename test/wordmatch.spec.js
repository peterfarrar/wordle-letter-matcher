const { expect } = require('chai')
const { checkTheGuess } = require('../src/wordmatch')

describe('match a guess', () => {
  context('exists zero times', () => {
    it('guessed a no letters that exist in the answer', () => {
      const word = 'birds'
      const guess ='campy'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'c': 'invalid-letter' },
        { 'a': 'invalid-letter' },
        { 'm': 'invalid-letter' },
        { 'p': 'invalid-letter' },
        { 'y': 'invalid-letter' },
      ])
    })
  })

  context('exists one time', () => {
    it('guessed one letter in the wrong position', () => {
      const word = 'teams'
      const guess = 'enjoy'
  

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'e': 'wrong-position' },
        { 'n': 'invalid-letter' },
        { 'j': 'invalid-letter' },
        { 'o': 'invalid-letter' },
        { 'y': 'invalid-letter' },
      ])
    })

    it('guessed one letter in the right position', () => {
      const word = 'teams'
      const guess = 'jelly'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'j': 'invalid-letter' },
        { 'e': 'correct-position' },
        { 'l': 'invalid-letter' },
        { 'l': 'invalid-letter' },
        { 'y': 'invalid-letter' },
      ])
    })

    it('guessed a the letter that exists once, twice in the wrong position', () => {
      const word = 'teams'
      const guess = 'breez'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'b': 'invalid-letter' },
        { 'r': 'invalid-letter' },
        { 'e': 'wrong-position' },
        { 'e': 'invalid-letter' },
        { 'z': 'invalid-letter' },
      ])
    })

    it('guessed a letter that exists once, twice, first in the right position', () => {
      const word = 'teams'
      const guess = 'beely'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
      { 'b': 'invalid-letter' },
        { 'e': 'correct-position' },
        { 'e': 'invalid-letter' },
        { 'l': 'invalid-letter' },
        { 'y': 'invalid-letter' },
      ])
    })

    it('guessed a letter that exists once, twice, first in the wrong position, second in the right position', () => {
      const word = 'teams'
      const guess = 'beely'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'b': 'invalid-letter' },
        { 'e': 'correct-position' },
        { 'e': 'invalid-letter' },
        { 'l': 'invalid-letter' },
        { 'y': 'invalid-letter' },
      ])
    })
  })

  context('exists two time', () => {
    it('guessed the letter twice, both in the wrong position', () => {
      const word = 'speed'
      const guess = 'elude'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'e': 'wrong-position' },
        { 'l': 'invalid-letter' },
        { 'u': 'invalid-letter' },
        { 'd': 'wrong-position' },
        { 'e': 'wrong-position' },
      ])
    })

    it('guessed the letter twice, first guess in the right position', () => {
      const word = 'speed'
      const guess = 'breme'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'b': 'invalid-letter' },
        { 'r': 'invalid-letter' },
        { 'e': 'correct-position' },
        { 'm': 'invalid-letter' },
        { 'e': 'wrong-position' },
      ])
    })

    it('guessed the letter twice, second guess in the right position', () => {
      const word = 'speed'
      const guess = 'elder'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 'e': 'wrong-position' },
        { 'l': 'invalid-letter' },
        { 'd': 'wrong-position' },
        { 'e': 'correct-position' },
        { 'r': 'invalid-letter' },
      ])
    })

    it('guessed the letter twice, both guesses in the right position', () => {
      const word = 'speed'
      const guess = 'steel'

      const actual = checkTheGuess(word, guess)
      expect(actual).to.eql([
        { 's': 'correct-position' },
        { 't': 'invalid-letter' },
        { 'e': 'correct-position' },
        { 'e': 'correct-position' },
        { 'l': 'invalid-letter' },
      ])
    })
  })
})