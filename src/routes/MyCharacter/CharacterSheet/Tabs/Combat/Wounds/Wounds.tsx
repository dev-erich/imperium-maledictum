import { CurrentTotalTable, Typography } from '@common'
import { useCharacter, useUpdateCharacter } from '@hooks'
import { Card, Grid } from '@mui/material'
import { CriticalWoundsTable } from './CriticalWoundsTable'

export default function Wounds() {
	const { character } = useCharacter()
	const { addWoundCurrent, removeWoundCurrent } = useUpdateCharacter()

	return (
		<Card sx={{ background: 'white' }}>
			<Grid container spacing={2} sx={{ padding: '10px' }}>
				<Grid
					item
					xs={5}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography variant="h6">Wounds</Typography>
				</Grid>
				<Grid item xs={7}>
					<CurrentTotalTable
						leftValue={character.wounds.current}
						rightValue={character.wounds.total}
						rightHeader="Threshold"
						handleAddClick={addWoundCurrent}
						handleSubtractClick={removeWoundCurrent}
						cardProps={{
							sx: { background: 'white', boxShadow: 'none' },
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<CriticalWoundsTable />
				</Grid>
			</Grid>
		</Card>
	)
}
