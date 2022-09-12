import React from 'react'
import styled from 'styled-components'
import { ActionRemote } from './components/actionRemote'
import { Board } from './components/board'

export const BoardGamePage = () => {
    return (
			<StyledBoardGamePage>
				<Board />
				<ActionRemote />
			</StyledBoardGamePage>
    )
}

const StyledBoardGamePage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 90%;
`