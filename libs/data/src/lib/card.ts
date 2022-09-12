export const cardNames = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "king", "queen", "jack"] as const
export type CardName = typeof cardNames[number]
export type CardValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export const cardSuits = ["heart", "diamond", "club", "spade"] as const
export type CardSuit = typeof cardSuits[number]

// type cardname -> cardvalue
export interface Card {
  name: CardName,
  value: CardValue,
  suit: CardSuit
}