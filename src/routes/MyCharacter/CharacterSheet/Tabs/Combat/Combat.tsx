import { CurrentTotalTable } from '@common'
import { useCharacter } from '@hooks'
import { Grid } from '@mui/material'
import { useCallback } from 'react'

export default function Combat() {
	const { character, setCharacter } = useCharacter()

	const handleAddClickFate = useCallback(() => {
		if (character.fate.current < character.fate.total)
			setCharacter({
				...character,
				fate: {
					...character.fate,
					current: character.fate.current + 1,
				},
			})
	}, [character, setCharacter])

	const handleSubtractClickFate = useCallback(() => {
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
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<CurrentTotalTable
					title={'Fate'}
					leftValue={character.fate.current}
					rightValue={character.fate.total}
					handleAddClick={handleAddClickFate}
					handleSubtractClick={handleSubtractClickFate}
				/>
			</Grid>
			<Grid item xs={6}>
				{/* <CurrentTotalTable title={'Wounds'} leftValue={20} rightValue={20} /> */}
			</Grid>
		</Grid>
	)
}
