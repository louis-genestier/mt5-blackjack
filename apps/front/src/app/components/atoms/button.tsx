import React from 'react'
import styled from 'styled-components'
import { color, space } from '../../style/const'

type Props = {
  label: string,
  icon?: React.ReactNode
  onClick?: () => any 
}

export const Button = ({label, icon, onClick}: Props) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <ButtonText>{label}</ButtonText>  
      {icon}
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 297px;
  height: 56px;
  background: ${color.red};
  border-radius: 10px;
  border: 0;
  color: white;
  font-size: 18px;

  :hover{
    background: ${color.variantRed};
  }
`

const ButtonText = styled.p`
  margin: 0 ${space.s};
`