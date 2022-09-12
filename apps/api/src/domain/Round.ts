import { Dealer } from "./Dealer";
import { Deck } from "./Deck";
import { Player } from "./Player";

export class Round {
  players: Player[]
  dealer: Dealer
  deck: Deck

  constructor(players: Player[]) {
    this.deck = new Deck()
    this.dealer = new Dealer('Croupier')
    this.players = players

    this.dealTwoCardsToEachPlayer()
  }

  public dealTwoCardsToEachPlayer() {
    this.dealer.drawCard(this.deck)
    this.dealer.drawCard(this.deck)

    this.players.forEach(player => {
      player.drawCard(this.deck)
      player.drawCard(this.deck)
    })
  }
}