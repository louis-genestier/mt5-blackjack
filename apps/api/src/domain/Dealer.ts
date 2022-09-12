import { Deck } from "./Deck";
import { Player } from "./Player";

export class Dealer extends Player {
  public play(deck: Deck) {
    if (!this.hasBlackjack() && !this.isBusted() && this.getCardsValue() < 17) this.drawCard(deck)
  }
}