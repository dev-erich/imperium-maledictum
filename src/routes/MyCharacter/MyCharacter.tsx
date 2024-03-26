import { useCharacter, useNavbar } from '@hooks'
import { useEffect } from 'react'
import { CharacterNotFound } from '.'
import { CharacterSheet } from './CharacterSheet'

export interface SessionTrackerProps {}

export default function MyCharacter() {
	const { setNavbarTitle } = useNavbar()
	const { character } = useCharacter()

	useEffect(() => {
		if (character.name && character.role)
			setNavbarTitle(character.name, character.role)
		else setNavbarTitle('Character', undefined)
	}, [setNavbarTitle, character])

	if (!character.name && !character.role) return <CharacterNotFound />
	else return <CharacterSheet />
}
