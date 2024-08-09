import { CurrentTotalTable, Typography } from '@common'
import { useCharacter } from '@hooks'
import { Box, Card, Grid, IconButton as IconButtonMUI } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useUpdateCharacter } from '@hooks/CharacterProvider'
import { CriticalWoundsTable } from './CriticalWoundsTable'
import { useCallback } from 'react'

export default function Wounds() {
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
						<Typography variant="h6">Wounds</Typography>
					</Grid>
					<Grid item xs={7}>
						<CurrentTotalTable
							leftValue={character.corruptionCount.current}
							rightValue={character.corruptionCount.total}
							rightHeader="Threshold"
							handleAddClick={handleAddClick}
							handleSubtractClick={handleSubtractClick}
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
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<IconButtonMUI
					aria-label="delete"
					// onClick={() => addCorruption()}
					size="large"
					sx={{ color: 'black' }}
				>
					<AddCircleOutlineIcon fontSize="inherit" />
				</IconButtonMUI>
			</Box>
		</>
	)

	// return (
	// 	<CurrentTotalTable
	// 		title={'Wounds'}
	// 		leftValue={character.wounds.current}
	// 		rightValue={character.wounds.total}
	// 		handleAddClick={handleAddClick}
	// 		handleSubtractClick={handleSubtractClick}
	// 	/>
	// )
}
