import { cardNames, cardSuits } from "@blackjack/data";
import { Card } from "./Card";

export class Deck {
  cards: Card[]

  constructor() {
    this.cards = this.#generate()
    this.#shuffle()
  }

  draw(): Card {
    return this.cards.pop()
  }

  remainingCards(): number {
    return this.cards.length
  }

  #generate(): Card[] {
    const cards: Card[] = []
    cardSuits.forEach(suit => {
      cardNames.forEach(name => {
        const card = new Card(name, suit)
        cards.push(card)
      })
    })

    return cards
  }

  #shuffle() {
    for (let i = this.remainingCards() - 1; i > 0; i--) {
      const cursor = Math.floor(Math.random() * i)

      const tempCard = this.cards[i]
      this.cards[i] = this.cards[cursor]
      this.cards[cursor] = tempCard
    }
  }
}