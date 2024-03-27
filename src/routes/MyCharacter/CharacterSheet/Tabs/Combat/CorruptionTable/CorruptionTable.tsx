import { CurrentTotalTable, Typography } from '@common'
import { useCharacter } from '@hooks'
import { Card, Grid } from '@mui/material'
import { useCallback } from 'react'

export default function CorruptionTable() {
	const { character, setCharacter } = useCharacter()

	const handleAddCorruptionClick = useCallback(() => {
		setCharacter((prev) => {
			console.log('🚀 \n prev:', prev)
			return {
				...prev,
				corruption: {
					...prev.corruption,
					current: prev.corruption.current + 1,
				},
			}
		})
	}, [setCharacter])

	const handleSubtractCorruptionClick = useCallback(() => {
		if (character.corruption.current > 0)
			setCharacter((prev) => {
				return {
					...prev,
					corruption: {
						...prev.corruption,
						current: prev.corruption.current - 1,
					},
				}
			})
	}, [character, setCharacter])

	return (
		<Card sx={{ background: 'white' }}>
			<Grid container spacing={2}>
				<Grid
					item
					xs={5}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography variant="h4">Corruption</Typography>
				</Grid>
				<Grid item xs={7}>
					<CurrentTotalTable
						leftValue={character.corruption.current}
						rightValue={character.corruption.total}
						rightHeader="Threshold"
						handleAddClick={handleAddCorruptionClick}
						handleSubtractClick={handleSubtractCorruptionClick}
						cardProps={{
							sx: { background: 'white', boxShadow: 'none' },
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="body1">Mutations & Malignancies Table</Typography>
					<Typography variant="body1">Under construction...</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}
