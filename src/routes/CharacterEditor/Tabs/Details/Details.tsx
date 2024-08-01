import { DropdownSelect, InputField, Typography } from '@common'
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Grid,
	SelectChangeEvent,
} from '@mui/material'
import { CharacterRole } from 'types/character'
import { useCharacter, useUpdateCharacter } from '@hooks'
import { useCallback } from 'react'
import _ from 'lodash'

export const RolesObj: CharacterRole[] = [
	'Interlocutor',
	'Mystic',
	'Penumbra',
	'Savant',
	'Warrior',
	'Zealot',
] as const

export default function Details() {
	const { character, setCharacter } = useCharacter()
	const { setIsFated } = useUpdateCharacter()

	const handleInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { id, value } = event.target

			setCharacter((prev) => {
				const updatedCharacter = _.cloneDeep(prev) || {}
				_.set(updatedCharacter, id, value)
				return updatedCharacter
			})
		},
		[setCharacter]
	)

	const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
		const { name, value } = event.target

		setCharacter((prev) => {
			const updatedFormData = _.cloneDeep(prev) || {}
			_.set(updatedFormData, name, value)
			return updatedFormData
		})
	}

	const handleFatedChange = (
		_event: React.SyntheticEvent<Element, Event>,
		checked: boolean
	) => {
		setIsFated(checked)
	}

	return (
		<Grid container spacing={1}>
			<Grid item xs={7}>
				<InputField
					required
					id="name"
					label="Name"
					value={character.name || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={5}>
				<DropdownSelect
					labelId="role-label"
					id="role"
					name="role"
					value={character.role || ''}
					label="Role"
					onChange={handleSelectChange}
					menuItems={RolesObj as string[]}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.origin"
					label="Origin"
					value={character.details.origin || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.patron"
					label="Patron"
					value={character.details.patron || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={7}>
				<InputField
					id="details.faction"
					label="Faction"
					value={character.details.faction || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }} />
						}
						sx={{ margin: 0 }}
						checked={character.isFated}
						value={character.isFated}
						label="Fated Talent"
						onChange={handleFatedChange}
					/>
				</FormGroup>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">Character Appearance</Typography>
			</Grid>
			<Grid item xs={2}>
				<InputField
					type="number"
					id="details.age"
					label="Age"
					value={character.details.age || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={4}>
				<InputField
					id="details.eyes"
					label="Eyes"
					value={character.details.eyes || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.hair"
					label="Hair"
					value={character.details.hair || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={3}>
				<InputField
					id="details.height"
					label="Height"
					value={character.details.height || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={3}>
				<InputField
					id="details.weight"
					label="Weight"
					value={character.details.weight || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.handedness"
					label="Handedness"
					value={character.details.handedness || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<InputField
					id="details.distinguishingFeatures"
					label="Distinguishing Features"
					value={character.details.distinguishingFeatures || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h4">Other</Typography>
			</Grid>
			<Grid item xs={0}></Grid>
			<Grid item xs={0}></Grid>
		</Grid>
	)
}
