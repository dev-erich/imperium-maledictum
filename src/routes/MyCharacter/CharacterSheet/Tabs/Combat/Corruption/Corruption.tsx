import { CurrentTotalTable, Typography } from '@common'
import { useCharacter } from '@hooks'
import { Box, Card, Grid, IconButton } from '@mui/material'
import { useCallback } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { uid } from '@utils'
import { CorruptionTable } from './CorruptionTable'

export default function Corruption() {
	const { character, setCharacter } = useCharacter()

	const handleAddCorruptionClick = useCallback(() => {
		setCharacter((prev) => {
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

	const handleAdd = () => {
		const newCriticalWounds = character.criticalWounds
		newCriticalWounds.push({
			_id: uid(),
			location: '',
			description: '',
		})

		setCharacter((prev) => {
			return {
				...prev,
				criticalWounds: newCriticalWounds,
			}
		})
	}

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
						<CorruptionTable />
					</Grid>
				</Grid>
			</Card>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<IconButton aria-label="delete" onClick={handleAdd} size="large">
					<AddCircleOutlineIcon fontSize="inherit" />
				</IconButton>
			</Box>
		</>
	)
}
