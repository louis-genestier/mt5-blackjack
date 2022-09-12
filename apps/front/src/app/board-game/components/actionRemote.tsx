import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components/atoms/button'
import { space } from '../../style/const'
import { IoCheckmarkSharp } from "react-icons/io5";

export const ActionRemote = () => {
  return (
		<ChooseAmount>
			<StyledInput placeholder="Montant a parier" type='number' />
			<Button  label='Vailder' icon={<IoCheckmarkSharp />}/>
		</ChooseAmount>
	) 
}

const ChooseAmount = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	row-gap: ${space.m};
`


const StyledInput = styled.input`
	width: 297px;
	height: 58px;
	padding: 0 ${space.s};
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	border: 0;
`