import { Card } from './Card'
import { Dealer } from './Dealer'
import { Deck } from './Deck'

describe('Dealer', () => {
  it('should exists', () => {
    const dealer = new Dealer('Dealer')

    expect(dealer).toBeDefined()
  })

  it('should draw a card if no blackjack', () => {
    const dealer = new Dealer('Dealer')
    const deck = new Deck()

    dealer.play(deck)

    expect(dealer.cards.length).toEqual(1)
  })

  it('should draw a card if not busted', () => {
    const dealer = new Dealer('Dealer')
    const deck = new Deck()

    dealer.play(deck)

    expect(dealer.cards.length).toEqual(1)
  })

  it('should draw a card if card value is below 17', () => {
    const dealer = new Dealer('Dealer')
    const deck = new Deck()

    dealer.cards.push(new Card("8", "club"))
    dealer.cards.push(new Card("8", "club"))

    dealer.play(deck)

    expect(dealer.cards.length).toEqual(3)
  })
})