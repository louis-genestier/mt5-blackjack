import React, { useState } from 'react'
import styled from 'styled-components'
import { UiCard } from '../components/organisms/UiCard'
import { space } from '../style/const'
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from '../components/atoms/button';
import knight  from '../../assets/characters/knight.png'
import queen  from '../../assets/characters/queen.png'

type Props = { 
	username: string | null, 
	selectedGender: string | null
	setSelectedGender: (gender: string) => any
	setUsername: (inputValue: string) => any
}

export const CreateUserPage = ({ username, selectedGender, setSelectedGender, setUsername }: Props) => {
	const [inputValue, setInputValue] = useState<string>('')
    return (
			<StyledCreateUserPage>
				<RulesSection>
					<UiCard>
						<h2>Règles</h2>
						<p>La partie oppose individuellement chaque joueur contre la banque. Le but est de battre le croupier sans dépasser le score de 21. Dès qu'un joueur fait plus que 21, on dit qu'il « brûle » et il perd sa mise initiale.</p>
					</UiCard>
					<UiCard>
						<h2>Valeur des cartes</h2>
						<ul>
							<BulletPoint>Du 2 au 9 : chaque carte a sa propre valeur nominale.</BulletPoint>
							<BulletPoint>Les 10, Valets, Dames et Rois valent 10 et sont appelés les « Bûches ».</BulletPoint>
							<BulletPoint>
								Les As équivalent à 1 ou à 11 selon le jeu du joueur. Si votre main ne dépasse pas 21, l’as compte 11.
								Si au contraire elle le dépasse, l’As compte pour 1 a valeur de l’As étant toujours calculée à votre avantage
							</BulletPoint>
							<BulletPoint>
								La main appelée « Blackjack » est composée d’un 
								As et d’une carte valant 10, pour un total de 21,
								reçues dès le début
							</BulletPoint>
						</ul>
					</UiCard>
				</RulesSection>
				{!username ? 	
					<InputSection onSubmit={() => {
						setUsername(inputValue)
					}}>
						<Characters>
							<UiCard onClick={() => {setSelectedGender('male')}} isSelected={selectedGender === 'male' ? true : false}>
								<CharacterImg src={knight} alt="" />
							</UiCard>
							<UiCard onClick={() => {setSelectedGender('female')}} isSelected={selectedGender === 'female' ? true : false}>
								<CharacterImg src={queen} alt="" />
							</UiCard>
						</Characters>
						<StyledInput placeholder='Nom du joueur' value={inputValue} onChange={(e) => {
							setInputValue(e.currentTarget.value)
						}} required/>
						<Button label={"Valider"} icon={<IoCheckmarkSharp />}/>
					</InputSection> 
					: 
					<RoomSection>
						<Button label={"Valider"} icon={<IoCheckmarkSharp />}/>
					</RoomSection>
				}
			</StyledCreateUserPage>
    )
}


const StyledCreateUserPage = styled.div`
	display: flex;
	justify-content: center;
	column-gap: ${space.xl};
	width: 100%;
`

const BulletPoint = styled.li`
	margin: ${space.s};
`
const CharacterImg = styled.img`
	width: 133px;
	height: 133px;
`

const Characters = styled.div`
	display: flex;
	column-gap: ${space.m};
`

const InputSection = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: ${space.l};
	padding: ${space.m};
	margin: ${space.m} 0;
`

const RoomSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: ${space.l};
	padding: ${space.m};
	margin: ${space.m} 0;
`

const RulesSection = styled.div`
	padding: ${space.m};
`

const StyledInput = styled.input`
	width: 476px;
	height: 58px;
	padding: 0 ${space.s};
	background: #FFFFFF;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	border: 0;
`


