import React from 'react'
import styled from 'styled-components'
import { color, space } from '../../style/const'

type Props = { 
	children: React.ReactNode, 
	isSelected?: boolean 
	onClick?: () => any
}

export const UiCard = ({children, isSelected, onClick}: Props) => {
	return (
			<StyledUiCard onClick={onClick} selected={isSelected}>{children}</StyledUiCard>
	)
}



const StyledUiCard = styled.div<{selected: boolean | undefined}>`
	background-color: white;
	max-width: 482px;
	padding: ${space.s};
	margin: ${space.m} 0;
	border-radius: ${space.xs};
	border ${props => props.selected ? `1px solid ${color.red}` : "1px solid white"};
`