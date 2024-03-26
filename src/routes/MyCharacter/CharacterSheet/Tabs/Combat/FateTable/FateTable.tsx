import { CurrentTotalTable } from '@common'
import { useCharacter } from '@hooks'
import { useCallback } from 'react'

export default function FateTable() {
	const { character, setCharacter } = useCharacter()

	const handleAddClick = useCallback(() => {
		if (character.fate.current < character.fate.total)
			setCharacter({
				...character,
				fate: {
					...character.fate,
					current: character.fate.current + 1,
				},
			})
	}, [character, setCharacter])

	const handleSubtractClick = useCallback(() => {
		if (character.fate.current > 0)
			setCharacter({
				...character,
				fate: {
					...character.fate,
					current: character.fate.current - 1,
				},
			})
	}, [character, setCharacter])

	return (
			<CurrentTotalTable
				title={'Fate'}
				leftValue={character.fate.current}
				rightValue={character.fate.total}
				handleAddClick={handleAddClick}
				handleSubtractClick={handleSubtractClick}
			/>
	)
}
