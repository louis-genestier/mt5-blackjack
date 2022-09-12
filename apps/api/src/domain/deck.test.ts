import { Deck } from './Deck'

describe('Deck', () => {
  const cardsPerDeck = 52
  it('should create a deck', () => {
    const deck = new Deck()

    expect(deck).toBeDefined()
  })

  it('the deck should have 52 cards', () => {
    const deck = new Deck()

    expect(deck.remainingCards()).toEqual(cardsPerDeck)
  })

  it('the deck should be shuffled', () => {
    const deck = new Deck()
    const firstCard = deck.cards[0]

    expect([firstCard.name, firstCard.suit]).not.toEqual(['ace', 'heart'])
  })

  it('if a card is drew the deck should have 51 cards', () => {
    const deck = new Deck()
    deck.draw()

    expect(deck.remainingCards()).toEqual(51)
  })
})