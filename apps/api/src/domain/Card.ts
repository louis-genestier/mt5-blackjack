import { CardName, CardSuit, CardValue } from '@blackjack/data'

export class Card {
  readonly name: CardName
  readonly suit: CardSuit
  readonly values: CardValue[]

  constructor(name: CardName, suit: CardSuit) {
    this.name = name
    this.suit = suit
    this.values = this.#getValues()
  }

  #getValues(): CardValue[] {
    if (this.name === 'ace') return [1, 11]
    if (!isNaN(parseInt(this.name)))
      return [parseInt(this.name) as CardValue]
    return [10]
  }
}