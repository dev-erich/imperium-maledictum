import { CurrentTotalTable } from '@common'
import { useCharacter } from '@hooks'
import { useUpdateCharacter } from '@hooks/CharacterProvider'

export default function FateTable() {
	const { character } = useCharacter()
	const { addFateCurrent, removeFateCurrent } = useUpdateCharacter()

	return (
		<CurrentTotalTable
			title={'Fate'}
			leftValue={character.fate.current}
			rightValue={character.fate.total}
			handleAddClick={addFateCurrent}
			handleSubtractClick={removeFateCurrent}
		/>
	)
}
