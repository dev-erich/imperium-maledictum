import { CurrentTotalTable } from '@common'
import { useCharacter } from '@hooks'
import { useCallback } from 'react'

export default function WoundsTable() {
	const { character, setCharacter } = useCharacter()

	const handleAddClick = useCallback(() => {
		if (character.wounds.current < character.wounds.total)
			setCharacter((prev) => {
				return {
					...prev,
					wounds: {
						...prev.wounds,
						current: prev.wounds.current + 1,
					},
				}
			})
	}, [character, setCharacter])

	const handleSubtractClick = useCallback(() => {
		if (character.wounds.current > 0)
			setCharacter((prev) => {
				return {
					...prev,
					wounds: {
						...prev.wounds,
						current: prev.wounds.current - 1,
					},
				}
			})
	}, [character, setCharacter])

	return (
		<CurrentTotalTable
			title={'Wounds'}
			leftValue={character.wounds.current}
			rightValue={character.wounds.total}
			handleAddClick={handleAddClick}
			handleSubtractClick={handleSubtractClick}
		/>
	)
}
