import { CurrentTotalTable } from '@common'
import { useCharacter } from '@hooks'
import { useCallback } from 'react'

export default function FateTable() {
	const { character, setCharacter } = useCharacter()

	const handleAddFateClick = useCallback(() => {
		if (character.fate.current < character.fate.total)
			setCharacter((prev) => {
				return {
					...prev,
					fate: {
						...prev.fate,
						current: prev.fate.current + 1,
					},
				}
			})
	}, [character, setCharacter])

	const handleSubtractFateClick = useCallback(() => {
		if (character.fate.current > 0)
			setCharacter((prev) => {
				return {
					...prev,
					fate: {
						...prev.fate,
						current: prev.fate.current - 1,
					},
				}
			})
	}, [character, setCharacter])

	return (
		<CurrentTotalTable
			title={'Fate'}
			leftValue={character.fate.current}
			rightValue={character.fate.total}
			handleAddClick={handleAddFateClick}
			handleSubtractClick={handleSubtractFateClick}
		/>
	)
}
