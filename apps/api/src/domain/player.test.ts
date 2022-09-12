import { Card } from './Card'
import { Deck } from './Deck'
import { Player } from './Player'

describe('Player', () => {
  it('should have 100 in the bank by default', () => {
    const player = new Player('Louis')

    expect(player.bank).toEqual(100)
  })
  it('should have 0 cards by default', () => {
    const player = new Player('Louis')

    expect(player.cards.length).toEqual(0)
  })
  it('when the player drew a card, he should have 1 card', () => {
    const deck = new Deck()
    const player = new Player('Louis')
    player.drawCard(deck)

    expect(player.cards.length).toEqual(1)
  })
  it('if the player has 2 3 cards he should have a hand value of 6', () => {
    const player = new Player('Louis')
    player.cards.push(new Card('3', 'heart'))
    player.cards.push(new Card('3', 'heart'))

    expect(player.getCardsValue()).toEqual(6)
  })
  it('if the player has 2 4 cards he should have a hand value of 6', () => {
    const player = new Player('Louis')
    player.cards.push(new Card('4', 'heart'))
    player.cards.push(new Card('4', 'heart'))

    expect(player.getCardsValue()).toEqual(8)
  })
  it('if the player has 2 4 cards he should have a hand value of 6', () => {
    const player = new Player('Louis')
    player.cards.push(new Card('4', 'heart'))
    player.cards.push(new Card('4', 'heart'))

    expect(player.getCardsValue()).toEqual(8)
  })
  it('if the player has an ace and a king he should have a hand value of 21', () => {
    const player = new Player('Louis')
    player.cards.push(new Card('ace', 'heart'))
    player.cards.push(new Card('king', 'heart'))

    expect(player.getCardsValue()).toEqual(21)
  })
  it('if the player has a 9, a 8 and an ace he should have a hand value of 18', () => {
    const player = new Player('Louis')
    player.cards.push(new Card('9', 'heart'))
    player.cards.push(new Card('8', 'heart'))
    player.cards.push(new Card('ace', 'heart'))

    expect(player.getCardsValue()).toEqual(18)
  })

  it('should be blackjack if player\'s hand value is 21', () => {
    const player = new Player('Louis')
    player.cards.push(new Card('king', 'heart'))
    player.cards.push(new Card('ace', 'heart'))

    expect(player.hasBlackjack()).toBeTruthy()
  })

  it('should be busted if hand value is superior to 21', () => {
    const player = new Player('Louis')
    player.cards.push(new Card('king', 'heart'))
    player.cards.push(new Card('9', 'heart'))
    player.cards.push(new Card('8', 'heart'))

    expect(player.isBusted()).toBeTruthy()
  })
})