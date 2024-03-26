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
import { DropdownSelect, InputField, TableCell } from '@common'
import {
	getCharacteristic,
	getSkill,
	setSpecialisationAdvances,
	setSpecialisationName,
	setSpecialisationReqSkill,
} from 'src/components/objects'
import { CharacterSpecialisation } from 'types/character'
import { uid } from '@utils'
import { useCharacter } from '@hooks'

export default function Specialisations() {
	const { character, setCharacter } = useCharacter()

	const handleDelete = (key: string) => {
		const removedSpec = character.specialisations.filter(
			(spec) => spec._key !== key
		)
		setCharacter({
			...character,
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
		const addedSpec = character.specialisations
		addedSpec.push(newSpec)

		setCharacter({
			...character,
			specialisations: addedSpec,
		})
	}

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		const updatedSpecs = setSpecialisationName(character, id, value)

		setCharacter({
			...character,
			specialisations: updatedSpecs,
		})
	}

	const handleSkillChange = (event: SelectChangeEvent<unknown>) => {
		const { name, value } = event.target

		const updatedSpecs = setSpecialisationReqSkill(
			character,
			name,
			value as string
		)

		setCharacter({
			...character,
			specialisations: updatedSpecs,
		})
	}

	const handleAdvanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		const cleanValue = value.replace(/\D/g, '').replace(/^0+/, '') || '0'
		let newValue = parseInt(cleanValue, 10)
		newValue = Math.max(0, Math.min(newValue, 4))
		const updatedSpecs = setSpecialisationAdvances(character, id, newValue)

		setCharacter({
			...character,
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
				menuItems={character.skills.map((skill) => skill.name)}
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

	const rows = character.specialisations.map(
		({ _key, name, skillkey, advances }) => {
			const refSkill = getSkill(character, skillkey)
			const refCharacteristic = getCharacteristic(
				character,
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
