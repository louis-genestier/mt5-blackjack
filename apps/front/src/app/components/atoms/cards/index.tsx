import AceOfClubs from './assets/ace-of-clubs.png'
import AceOfDiamonds from './assets/ace-of-diamonds.png'
import AceOfHearts from './assets/ace-of-hearts.png'
import AceOfSpades from './assets/ace-of-spades.png'

import TwoOfClubs from './assets/two-of-clubs.png'
import TwoOfDiamonds from './assets/two-of-diamonds.png'
import TwoOfHearts from './assets/two-of-hearts.png'
import TwoOfSpades from './assets/two-of-spades.png'

import ThreeOfClubs from './assets/three-of-clubs.png'
import ThreeOfDiamonds from './assets/three-of-diamonds.png'
import ThreeOfHearts from './assets/three-of-hearts.png'
import ThreeOfSpades from './assets/three-of-spades.png'

import FourOfClubs from './assets/four-of-clubs.png'
import FourOfDiamonds from './assets/four-of-diamonds.png'
import FourOfHearts from './assets/four-of-hearts.png'
import FourOfSpades from './assets/four-of-spades.png'

import FiveOfClubs from './assets/five-of-clubs.png'
import FiveOfDiamonds from './assets/five-of-diamonds.png'
import FiveOfHearts from './assets/five-of-hearts.png'
import FiveOfSpades from './assets/five-of-spades.png'

import SixOfClubs from './assets/six-of-clubs.png'
import SixOfDiamonds from './assets/six-of-diamonds.png'
import SixOfHearts from './assets/six-of-hearts.png'
import SixOfSpades from './assets/six-of-spades.png'

import SevenOfClubs from './assets/seven-of-clubs.png'
import SevenOfDiamonds from './assets/seven-of-diamonds.png'
import SevenOfHearts from './assets/seven-of-hearts.png'
import SevenOfSpades from './assets/seven-of-spades.png'

import EightOfClubs from './assets/eight-of-clubs.png'
import EightOfDiamonds from './assets/eight-of-diamonds.png'
import EightOfHearts from './assets/eight-of-hearts.png'
import EightOfSpades from './assets/eight-of-spades.png'

import NineOfClubs from './assets/nine-of-clubs.png'
import NineOfDiamonds from './assets/nine-of-diamonds.png'
import NineOfHearts from './assets/nine-of-hearts.png'
import NineOfSpades from './assets/nine-of-spades.png'

import TenOfClubs from './assets/ten-of-clubs.png'
import TenOfDiamonds from './assets/ten-of-diamonds.png'
import TenOfHearts from './assets/ten-of-hearts.png'
import TenOfSpades from './assets/ten-of-spades.png'

import JackOfClubs from './assets/jack-of-clubs.png'
import JackOfDiamonds from './assets/jack-of-diamonds.png'
import JackOfHearts from './assets/jack-of-hearts.png'
import JackOfSpades from './assets/jack-of-spades.png'

import QueenOfClubs from './assets/queen-of-clubs.png'
import QueenOfDiamonds from './assets/queen-of-diamonds.png'
import QueenOfHearts from './assets/queen-of-hearts.png'
import QueenOfSpades from './assets/queen-of-spades.png'

import KingOfClubs from './assets/king-of-clubs.png'
import KingOfDiamonds from './assets/king-of-diamonds.png'
import KingOfHearts from './assets/king-of-hearts.png'
import KingOfSpades from './assets/king-of-spades.png'
import styled from 'styled-components'
import { space } from '../../../style/const'

export class CardsMapping {
  aceOfClubs = AceOfClubs;
  aceOfDiamonds = AceOfDiamonds;
  aceOfHearts = AceOfHearts;
  aceOfSpades = AceOfSpades;
  twoOfClubs = TwoOfClubs;
  twoOfDiamonds = TwoOfDiamonds;
  twoOfHearts = TwoOfHearts;
  twoOfSpades = TwoOfSpades;
  threeOfClubs = ThreeOfClubs;
  threeOfDiamonds = ThreeOfDiamonds;
  threeOfHearts = ThreeOfHearts;
  threeOfSpades = ThreeOfSpades;
  fourOfClubs = FourOfClubs;
  fourOfDiamonds = FourOfDiamonds;
  fourOfHearts = FourOfHearts;
  fourOfSpades = FourOfSpades;
  fiveOfClubs = FiveOfClubs;
  fiveOfDiamonds = FiveOfDiamonds;
  fiveOfHearts = FiveOfHearts;
  fiveOfSpades = FiveOfSpades;
  sixOfClubs = SixOfClubs;
  sixOfDiamonds = SixOfDiamonds;
  sixOfHearts = SixOfHearts;
  sixOfSpades = SixOfSpades;
  sevenOfClubs = SevenOfClubs;
  sevenOfDiamonds = SevenOfDiamonds;
  sevenOfHearts = SevenOfHearts;
  sevenOfSpades = SevenOfSpades;
  eightOfClubs = EightOfClubs;
  eightOfDiamonds = EightOfDiamonds;
  eightOfHearts = EightOfHearts;
  eightOfSpades = EightOfSpades;
  nineOfClubs = NineOfClubs;
  nineOfDiamonds = NineOfDiamonds;
  nineOfHearts = NineOfHearts;
  nineOfSpades = NineOfSpades;
  tenOfClubs = TenOfClubs;
  tenOfDiamonds = TenOfDiamonds;
  tenOfHearts = TenOfHearts;
  tenOfSpades = TenOfSpades;
  jackOfClubs = JackOfClubs;
  jackOfDiamonds = JackOfDiamonds;
  jackOfHearts = JackOfHearts;
  jackOfSpades = JackOfSpades;
  queenOfClubs = QueenOfClubs;
  queenOfDiamonds = QueenOfDiamonds;
  queenOfHearts = QueenOfHearts;
  queenOfSpades = QueenOfSpades;
  kingOfClubs = KingOfClubs;
  kingOfDiamonds = KingOfDiamonds;
  kingOfHearts = KingOfHearts;
  kingOfSpades = KingOfSpades;
}

export type CardName = keyof CardsMapping;
const cardsMapping = new CardsMapping();

export type Props = {
  name: CardName;
};

export const Card = (props: Props) => {
  const CorrespondingCard = cardsMapping[props.name];

  return CorrespondingCard ? (
    <StyledCard src={CorrespondingCard} alt=''/>
  ) : null;
};

const StyledCard = styled.img`
  width: 88px;
  height: 129px;
  margin: ${space.s};
`