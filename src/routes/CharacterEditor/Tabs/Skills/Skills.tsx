import {
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import { CharacterTabProps } from '..'
import { InputField, TableCell } from '@common'
import {
	Character,
	getCharacteristic,
	updateSkill,
} from 'src/components/objects'

interface SkillsTabProps extends CharacterTabProps {
	setFormData: (character: Character) => void
}

export default function Skills(props: SkillsTabProps) {
	const { formData, setFormData } = props

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		const cleanValue = value.replace(/\D/g, '').replace(/^0+/, '') || '0'
		let newValue = parseInt(cleanValue, 10)
		newValue = Math.max(0, Math.min(newValue, 4))
		const updatedSkills = updateSkill(formData, id, newValue)

		setFormData({
			...formData,
			skills: updatedSkills,
		})
	}

	const createInputField = (_key: string, value: unknown) => {
		return (
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				type="text"
				id={`${_key}`}
				value={value}
				onChange={handleInputChange}
			/>
		)
	}

	const rows = formData.skills.map(
		({ _key, name, characteristicKey, advances }) => {
			const refCharacteristic = getCharacteristic(formData, characteristicKey)

			const totalPoints =
				refCharacteristic.values.advances +
				refCharacteristic.values.starting +
				advances * 5

			return {
				skill: name,
				characteristicCode: refCharacteristic.code,
				advances: createInputField(_key, advances),
				current: totalPoints,
			}
		}
	)

	return (
		<TableContainer variant="outlined" component={Paper}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell align="center">Skill</TableCell>
						<TableCell align="center">Char.</TableCell>
						<TableCell align="center">Adv.</TableCell>
						<TableCell align="center">Current</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.skill}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell
								align="center"
								component="th"
								scope="row"
								sx={{
									whiteSpace: 'break-spaces',
								}}
							>
								{row.skill}
							</TableCell>
							<TableCell align="center" sx={{ padding: 0 }}>
								{row.characteristicCode}
							</TableCell>
							<TableCell align="center" sx={{ padding: 0 }}>
								{row.advances}
							</TableCell>
							<TableCell align="center" component="th" scope="row">
								{row.current}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}