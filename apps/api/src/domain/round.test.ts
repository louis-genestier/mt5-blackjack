import { Player } from "./Player"
import { Round } from './Round'

describe('Round', () => {
  it('when a game starts, each player should have 2 cards', () => {
    const player1 = new Player('Player1')
    const player2 = new Player('Player2')
    const game = new Round([player1, player2])

    expect(player1.cards.length).toEqual(2)
    expect(player2.cards.length).toEqual(2)
    expect(game.dealer.cards.length).toEqual(2)
  })
})