import { CurrentTotalTable, Typography } from '@common'
import { useCharacter } from '@hooks'
import { Box, Card, Grid, IconButton } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
// import { uid } from '@utils'
import { CorruptionTable } from './CorruptionTable'
import { useUpdateCharacter } from '@hooks/CharacterProvider'

export default function Corruption() {
	const { character } = useCharacter()
	const { addCorruptionCount, removeCorruptionCount, addCorruption } =
		useUpdateCharacter()

	return (
		<>
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
						<Typography variant="h6">Corruption</Typography>
					</Grid>
					<Grid item xs={7}>
						<CurrentTotalTable
							leftValue={character.corruptionCount.current}
							rightValue={character.corruptionCount.total}
							rightHeader="Threshold"
							handleAddClick={addCorruptionCount}
							handleSubtractClick={removeCorruptionCount}
							cardProps={{
								sx: { background: 'white', boxShadow: 'none' },
							}}
						/>
					</Grid>
					<Grid item xs={12}>
						<CorruptionTable />
					</Grid>
				</Grid>
			</Card>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<IconButton
					aria-label="delete"
					onClick={() => addCorruption()}
					size="large"
				>
					<AddCircleOutlineIcon fontSize="inherit" />
				</IconButton>
			</Box>
		</>
	)
}
