import { Card } from "./Card"
import { Deck } from "./Deck"

export class Player {
  bank: number
  cards: Card[]
  hasStood: boolean
  readonly name: string

  constructor(name: string) {
    this.name = name
    this.bank = 100
    this.hasStood = false
    this.cards = []
  }

  public drawCard(deck: Deck) {
    const card = deck.draw()

    this.cards.push(card)
  }

  public getCardsValue(): number {
    let total = 0
    const cards = this.cards.sort((a, b) => b.values[0] - a.values[0])

    cards.forEach(card => {
      let currentCardValue = card.values[0]
      if (card.name === "ace" && total + card.values[1] <= 21) currentCardValue = card.values[1]
      total += currentCardValue
    })

    return total
  }

  public hasBlackjack() {
    return this.getCardsValue() === 21
  }

  public isBusted() {
    return this.getCardsValue() > 21
  }
}