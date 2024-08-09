import { Typography } from '@common'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { useCharacter } from '@hooks'
import {
	IconButton,
	Paper,
	Card,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Grid,
} from '@mui/material'
import { getArmorSlot, setArmorSlots } from '@data'
import { BodyPart } from 'types/character'

export default function Armor() {
	const { character, setCharacter } = useCharacter()

	const handleAddClick = (key: BodyPart) => {
		const armorSlotKey = getArmorSlot(character, key)

		setCharacter((prev) => {
			return {
				...prev,
				armourSlots: setArmorSlots(prev, armorSlotKey.value + 1, key),
			}
		})
	}

	const handleRemoveClick = (key: BodyPart) => {
		const armorSlotKey = getArmorSlot(character, key)

		if (armorSlotKey.value > 0)
			setCharacter((prev) => {
				return {
					...prev,
					armourSlots: setArmorSlots(prev, armorSlotKey.value - 1, key),
				}
			})
	}

	const rows = character.armourSlots.map((slot) => {
		const { _key, hitDie, name, value } = slot

		return {
			key: _key,
			hitDie: hitDie,
			name: name,
			value: value,
		}
	})

	return (
		<Card sx={{ background: 'white' }}>
			<TableContainer
				variant="outlined"
				component={Paper}
				sx={{ background: 'white' }}
			>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell align="center" colSpan={3}>
								<Typography variant="h4">Armor</Typography>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align="center">D10</TableCell>
							<TableCell align="center">Location</TableCell>
							<TableCell align="center">Value</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => {
							return (
								<TableRow key={row.key}>
									<TableCell align="center" component="th" scope="row">
										{row.hitDie}
									</TableCell>
									<TableCell align="center" component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="center" component="th" scope="row">
										<Grid container alignItems="center">
											<Grid item xs={4}>
												<IconButton
													size="medium"
													onClick={() => handleRemoveClick(row.key)}
												>
													<RemoveIcon fontSize="inherit" />
												</IconButton>
											</Grid>
											<Grid item xs={4}>
												{row.value}
											</Grid>
											<Grid item xs={4}>
												<IconButton
													size="medium"
													onClick={() => handleAddClick(row.key)}
												>
													<AddIcon fontSize="inherit" />
												</IconButton>
											</Grid>
										</Grid>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Card>
	)
}
