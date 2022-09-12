import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.png' 


export const Header = () => {
    return (
      <StyledHeader>
        <StyledLogo src={Logo} />
      </StyledHeader>
    )
}

const StyledHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10%;
`

const StyledLogo = styled.img`
    height: 99px;
    width: 276px;
`