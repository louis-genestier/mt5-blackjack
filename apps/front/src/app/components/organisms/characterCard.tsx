import React from 'react'
import styled from 'styled-components'
import { UiCard } from './UiCard'
import knight  from '../../../assets/characters/knight.png'
import queen  from '../../../assets/characters/queen.png'
import dealer  from '../../../assets/characters/dealer.png'
import { color, space } from '../../style/const'

type Props = {
	name?: string,
	gender?: string,
	isSelected?: boolean,
	isDealer?: boolean

}

export const CharacterCard = ({name, gender, isSelected, isDealer}: Props) => {
    return (
			<StyledCharacterCard selected={isSelected}>
				<CharacterImg src={isDealer ? dealer : gender === 'male' ? knight : queen} alt="" />
				<Name>{isDealer ? `Croupier` : name}</Name>
			</StyledCharacterCard>
		)
}

const StyledCharacterCard = styled.div<{selected: boolean | undefined}>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	flex-direction: column;
	color: ${color.red};
	font-weight: bold;
	width: 136px;
	height: 152px;
	border-radius: ${space.xs};
	padding: ${space.s};
	border ${props => props.selected ? `1px solid ${color.red}` : "1px solid white"};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Name = styled.p`
	margin: ${space.xs} 0;
`

const CharacterImg = styled.img`
	width: 77px;
`