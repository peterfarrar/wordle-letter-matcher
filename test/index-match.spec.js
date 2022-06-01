const { expect } = require('chai')
const { matchTheIndexes } = require('../src/index-match')

describe('match the indexes', () => {
  it('is one to one match', () => {
    const lista = [1]
    const listb = [1]

    const actual = matchTheIndexes(lista, listb)
    expect(actual).to.eql([{1: 'correct-position'}])
  })

  it('is one to one no match', () => {
    const lista = [1]
    const listb = [2]

    const actual = matchTheIndexes(lista, listb)
    expect(actual).to.eql([{1: 'wrong-position'}])
  })

  it('is two to one match', () => {
    const lista = [1, 2]
    const listb = [2]

    const actual = matchTheIndexes(lista, listb)
    expect(actual).to.eql([{1: 'invalid-letter'}, {2: 'correct-position'}])
  })
  
  it('is one to two match', () => {
    const lista = [1]
    const listb = [1, 2]

    const actual = matchTheIndexes(lista, listb)
    expect(actual).to.eql([{1: 'correct-position'}])
  })
    
  it('is one to three match', () => {
    const lista = [1]
    const listb = [1, 2, 3]

    const actual = matchTheIndexes(lista, listb)
    expect(actual).to.eql([{1: 'correct-position'}])
  })

  it('is two to one match', () => {
    const lista = [1, 2, 3]
    const listb = [2]

    const actual = matchTheIndexes(lista, listb)
    expect(actual).to.eql([{1: 'invalid-letter'}, {2: 'correct-position'}, {3: 'invalid-letter'}])
  })
})