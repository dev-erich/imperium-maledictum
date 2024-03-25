import {
	Box,
	IconButton,
	Paper,
	SelectChangeEvent,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { CharacterTabProps } from '..'
import { DropdownSelect, InputField, TableCell } from '@common'
import {
	Character,
	getCharacteristic,
	getSkill,
	updateSpecialisationAdvances,
	updateSpecialisationName,
	updateSpecialisationReqSkill,
} from 'src/components/objects'
import { CharacterSpecialisation } from 'types/character'
import { uid } from '@utils'

interface SpecialisationsTabProps extends CharacterTabProps {
	setFormData: (character: Character) => void
}

export default function Specialisations(props: SpecialisationsTabProps) {
	const { formData, setFormData } = props

	const handleDelete = (key: string) => {
		const removedSpec = formData.specialisations.filter(
			(spec) => spec._key !== key
		)
		setFormData({
			...formData,
			specialisations: removedSpec,
		})
	}

	const handleAdd = () => {
		const newSpec: CharacterSpecialisation = {
			_key: uid(),
			advances: 0,
			name: 'Name',
			skillkey: 'athletics',
		}
		const addedSpec = formData.specialisations
		addedSpec.push(newSpec)

		setFormData({
			...formData,
			specialisations: addedSpec,
		})
	}

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		const updatedSpecs = updateSpecialisationName(formData, id, value)

		setFormData({
			...formData,
			specialisations: updatedSpecs,
		})
	}

	const handleSkillChange = (event: SelectChangeEvent<unknown>) => {
		const { name, value } = event.target

		const updatedSpecs = updateSpecialisationReqSkill(
			formData,
			name,
			value as string
		)

		setFormData({
			...formData,
			specialisations: updatedSpecs,
		})
	}

	const handleAdvanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		const cleanValue = value.replace(/\D/g, '').replace(/^0+/, '') || '0'
		let newValue = parseInt(cleanValue, 10)
		newValue = Math.max(0, Math.min(newValue, 4))
		const updatedSpecs = updateSpecialisationAdvances(formData, id, newValue)

		setFormData({
			...formData,
			specialisations: updatedSpecs,
		})
	}

	const createNameInputField = (_key: string, value: unknown) => {
		return (
			<InputField
				condensed
				sx={{ minWidth: '100px' }}
				type="text"
				id={`${_key}`}
				value={value}
				onChange={handleNameChange}
			/>
		)
	}

	const createSkillDropdownSelect = (_key: string, value: unknown) => {
		return (
			<DropdownSelect
				size="small"
				id={_key}
				name={_key}
				value={value}
				onChange={handleSkillChange}
				menuItems={formData.skills.map((skill) => skill.name)}
			/>
		)
	}

	const createAdvanceInputField = (_key: string, value: unknown) => {
		return (
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				type="text"
				id={`${_key}`}
				value={value}
				onChange={handleAdvanceChange}
			/>
		)
	}

	const rows = formData.specialisations.map(
		({ _key, name, skillkey, advances }) => {
			const refSkill = getSkill(formData, skillkey)
			const refCharacteristic = getCharacteristic(
				formData,
				refSkill.characteristicKey
			)

			const totalPoints =
				refSkill.advances * 5 +
				advances * 5 +
				refCharacteristic.values.advances +
				refCharacteristic.values.starting

			return {
				id: _key,
				specialisation: createNameInputField(_key, name),
				// skill: refSkill.name,
				skill: createSkillDropdownSelect(_key, refSkill.name),
				advances: createAdvanceInputField(_key, advances),
				current: totalPoints,
			}
		}
	)

	return (
		<>
			<TableContainer variant="outlined" component={Paper}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell align="center">Spec.</TableCell>
							<TableCell align="center">Skill</TableCell>
							<TableCell align="center">Adv.</TableCell>
							<TableCell align="center">Current</TableCell>
							<TableCell align="center">Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow
								key={row.id}
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
									{row.specialisation}
								</TableCell>
								<TableCell
									align="center"
									sx={{ padding: 0, whiteSpace: 'break-spaces' }}
								>
									{row.skill}
								</TableCell>
								<TableCell align="center" sx={{ padding: 0 }}>
									{row.advances}
								</TableCell>
								<TableCell align="center" component="th" scope="row">
									{row.current}
								</TableCell>
								<TableCell align="center" component="th" scope="row">
									<IconButton
										aria-label="delete"
										onClick={() => handleDelete(row.id)}
									>
										<RemoveCircleOutlineIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>{' '}
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<IconButton aria-label="delete" onClick={handleAdd} size="large">
					<AddCircleOutlineIcon fontSize="inherit" />
				</IconButton>
			</Box>
		</>
	)
}
