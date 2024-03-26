import { CurrentTotalTable } from '@common'
import { useCharacter } from '@hooks'
import { Grid } from '@mui/material'

export default function Combat() {
	const { character } = useCharacter()

	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<CurrentTotalTable
					title={'Fate'}
					leftValue={character.fate.current}
					rightValue={character.fate.total}
				/>
			</Grid>
			<Grid item xs={6}>
				<CurrentTotalTable title={'Wounds'} leftValue={20} rightValue={20} />
			</Grid>
		</Grid>
	)
}
