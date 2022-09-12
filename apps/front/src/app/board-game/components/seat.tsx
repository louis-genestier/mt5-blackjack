import React from 'react'
import styled from 'styled-components'
import { Card, CardName } from '../../components/atoms/cards';
import { CharacterCard } from '../../components/organisms/characterCard';
import { color, space } from '../../style/const';
import token from '../../../assets/token.png';

type Props = {
	isDealer?: boolean
	gender?: string
	isSelected?: boolean
	name?: string
	score: number,
	cards: CardName[],
	tokenValue?: number
}

export const Seat = ({ isDealer, gender, isSelected, name, score, cards, tokenValue }: Props) => {
  return (
		<StyledDealerSeat isDealer={isDealer}>
			<Score isDealer={isDealer}>{score}</Score>
			<StyledDealerCards>
				{cards.map(card => 	<Card name={card} />)}
			</StyledDealerCards>
			<Userinfo>
			{!isDealer && 
			<div>
				<TokenImage src={token} alt=''/>
				<TokenContent>{tokenValue}€</TokenContent>
			</div>}
				<CharacterCard name={name} isDealer={isDealer} gender={gender} isSelected={isSelected} />
			</Userinfo>
		</StyledDealerSeat>
	)
}

const TokenImage = styled.img`
	width: 100px;
`
const TokenContent = styled.p`
	position: absolute;
	font-size: 21px;
	color: white;
	transform: translateX(30px) translateY(-83px);
`

const Userinfo = styled.div`
	display: flex;
	align-items: center;
	column-gap: ${space.s};
`

const StyledDealerSeat = styled.div<{isDealer: boolean | undefined}>`
	display: flex;
	flex-direction: ${props => props.isDealer ? 'column-reverse' : 'column'};
	align-items: center;
`

const StyledDealerCards = styled.div``

const Score = styled.div<{isDealer: boolean | undefined}>`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${props => props.isDealer ? '42px' : '21px'};
	color: white;
	width: ${props => props.isDealer ? '120px' : '67px'};
	height: ${props => props.isDealer ? '120px' : '67px'};
	background: ${color.red};
	border: 1px solid #000000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
`