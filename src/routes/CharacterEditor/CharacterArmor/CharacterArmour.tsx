import { InputField, Typography } from '@common'
import {
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import _ from 'lodash'
import { Character } from 'types/character'

function createData(dice: string, location: string, armour: React.ReactNode) {
	return { dice, location, armour }
}

interface CharacterArmour {
	formData: Character | null
	setFormData: React.Dispatch<React.SetStateAction<Character | null>>
}

export default function CharacterArmour(props: CharacterArmour) {
	const { formData, setFormData } = props

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		setFormData((prev) => {
			const updatedFormData = _.cloneDeep(prev) || {}
			_.set(updatedFormData, id, value)
			return updatedFormData
		})
	}

	const rows = [
		createData(
			'1',
			'Head',
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				required
				type="number"
				id="armour.head.total"
				value={formData?.armour?.head?.total || ''}
				onChange={handleInputChange}
			/>
		),
		createData(
			'2',
			'Left Arm',
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				required
				type="number"
				id="armour.leftArm.total"
				value={formData?.armour?.leftArm?.total || ''}
				onChange={handleInputChange}
			/>
		),
		createData(
			'3',
			'Right Arm',
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				required
				type="number"
				id="armour.rightArm.total"
				value={formData?.armour?.rightArm?.total || ''}
				onChange={handleInputChange}
			/>
		),
		createData(
			'4',
			'Left Leg',
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				required
				type="number"
				id="armour.leftLeg.total"
				value={formData?.armour?.leftLeg?.total || ''}
				onChange={handleInputChange}
			/>
		),
		createData(
			'5',
			'Right Leg',
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				required
				type="number"
				id="armour.rightLeg.total"
				value={formData?.armour?.rightLeg?.total || ''}
				onChange={handleInputChange}
			/>
		),
		createData(
			'6-0',
			'Body',
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				required
				type="number"
				id="armour.body.total"
				value={formData?.armour?.body?.total || ''}
				onChange={handleInputChange}
			/>
		),
	]

	return (
		<Grid item container spacing={0.8}>
			<Grid item xs={12}>
				<Typography variant="h3">Armour:</Typography>
			</Grid>
			<Grid item xs={12}>
				<TableContainer variant="outlined" component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>D10</TableCell>
								<TableCell>Location</TableCell>
								<TableCell>Armour</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.location}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell align="center" component="th" scope="row">
										{row.dice}
									</TableCell>
									<TableCell align="center">{row.location}</TableCell>
									<TableCell align="center" sx={{ padding: 0 }}>
										{row.armour}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	)
}
