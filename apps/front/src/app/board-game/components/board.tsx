import React from 'react';
import styled from 'styled-components'
import { CardName } from '../../components/atoms/cards';
import { space } from '../../style/const';
import { Seat } from './seat';

export const Board = () => {
  const cards: CardName[] = ['kingOfSpades', 'kingOfSpades']
  return (
    <BoardWrapper> 
        <Seat score={19} cards={cards} isDealer />
      <PlayerPart>
        <Seat score={19} cards={cards} gender={'male'} name={'Claude'}/>
        <Seat score={19} cards={cards} gender={'female'} name={'Claudette'}/>
        <Seat score={19} cards={cards} gender={'female'} name={'Claudette'}/>
      </PlayerPart>
    </BoardWrapper>
  )
}

const PlayerPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: ${space.xl};
  width: 100%;
`

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: ${space.m};
  width: 100%;
  padding-bottom: ${space.xl};
`
