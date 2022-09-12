import { CardName, CardSuit } from '@blackjack/data'
import { Card } from './Card'

describe('Card', () => {
  const cardName: CardName = "king"
  const cardSuit: CardSuit = "diamond"

  it('a created card should returns its correct name', () => {
    const card = new Card(cardName, cardSuit)

    expect(card.name).toEqual(cardName)
  })

  it('a created card should returns its correct suit', () => {
    const card = new Card(cardName, cardSuit)

    expect(card.suit).toEqual(cardSuit)
  })

  it('a 2 card should returns its correct value', () => {
    const cardName: CardName = "2"
    const card = new Card(cardName, cardSuit)

    expect(card.values).toEqual([2])
  })
  it('a 3 card should returns its correct value', () => {
    const cardName: CardName = "3"
    const card = new Card(cardName, cardSuit)

    expect(card.values).toEqual([3])
  })
  it('a 4 card should returns its correct value', () => {
    const cardName: CardName = "4"
    const card = new Card(cardName, cardSuit)

    expect(card.values).toEqual([4])
  })
  it('a king card should returns its correct value', () => {
    const cardName: CardName = "king"
    const card = new Card(cardName, cardSuit)

    expect(card.values).toEqual([10])
  })
  it('a queen card should returns its correct value', () => {
    const cardName: CardName = "queen"
    const card = new Card(cardName, cardSuit)

    expect(card.values).toEqual([10])
  })
  it('a ace card should returns its correct value', () => {
    const cardName: CardName = "ace"
    const card = new Card(cardName, cardSuit)

    expect(card.values).toEqual([1, 11])
  })
})