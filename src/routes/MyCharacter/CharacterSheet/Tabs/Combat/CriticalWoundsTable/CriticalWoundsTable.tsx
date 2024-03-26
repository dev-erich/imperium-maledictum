import { useCharacter } from '@hooks'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

export default function CriticalWoundsTable() {
	const { character, setCharacter } = useCharacter()

	const handleDelete = (key: string) => {
		const removedCritWound = character.criticalWounds.filter(
			(critWound) => critWound._key !== key
		)
		setCharacter({
			...character,
			criticalWounds: removedCritWound,
		})
	}

	return (
		<TableContainer
			variant="outlined"
			component={Paper}
			sx={{ background: 'white' }}
		>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell align="center" colSpan={3}>
							Critical Wounds
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell align="center">Location</TableCell>
						<TableCell align="center">Description</TableCell>
						<TableCell align="center">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{character.criticalWounds.map((critWound) => {
						return (
							<TableRow key={critWound._key}>
								<TableCell
									align="center"
									component="th"
									scope="row"
									sx={{
										whiteSpace: 'break-spaces',
									}}
								>
									{critWound.location}
								</TableCell>
								<TableCell align="center" component="th" scope="row">
									{critWound.description}
								</TableCell>
								<TableCell align="center" component="th" scope="row">
									<IconButton
										aria-label="delete"
										onClick={() => handleDelete(critWound._key)}
									>
										<RemoveCircleOutlineIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
