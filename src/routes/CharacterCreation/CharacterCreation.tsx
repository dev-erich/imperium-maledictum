import { useEffect, useState } from 'react'
import { useCharacter, useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import { InputField, Select } from '@common'
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	SelectChangeEvent,
} from '@mui/material'
import { Character, Role } from 'types/character'
import _ from 'lodash'

export const RolesObj: Role[] = [
	'Interlocutor',
	'Mystic',
	'Penumbra',
	'Savant',
	'Warrior',
	'Zealot',
] as const

export default function CharacterCreation() {
	const { setNavbarTitle } = useNavbar()
	const { character, setCharacter } = useCharacter()
	const [formData, setFormData] = useState<Character | null>(null)

	useEffect(() => {
		setNavbarTitle('Character Creation')
	}, [setNavbarTitle])

	useEffect(() => {
		setFormData(character)
	}, [character])

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		setFormData((prev) => {
			const updatedFormData = _.cloneDeep(prev) || {}
			_.set(updatedFormData, id, value)
			return updatedFormData
		})
	}

	const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
		const { name, value } = event.target

		setFormData((prev) => {
			const updatedFormData = _.cloneDeep(prev) || {}
			_.set(updatedFormData, name, value)
			return updatedFormData
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setCharacter(formData)
	}

	const handleReset = () => {
		setCharacter(null)
	}

	return (
		<PageWrapper>
			<Box
				component="form"
				// noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				<Grid container>
					<Grid item xs={7}>
						<InputField
							required
							variant="standard"
							id="name"
							label="Name"
							value={formData?.name || ''}
							onChange={handleInputChange}
						/>
					</Grid>
					<Grid item xs={5}>
						<FormControl fullWidth>
							<InputLabel id="role-label">Role</InputLabel>
							<Select
								required
								variant="standard"
								labelId="role-label"
								id="role"
								name="role"
								value={formData?.role || ''}
								label="Role"
								onChange={handleSelectChange}
								menuItems={RolesObj}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<InputField
							required
							variant="standard"
							id="corruption.mutations"
							label="Mutations"
							value={formData?.corruption?.mutations || ''}
							onChange={handleInputChange}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<Button type="submit" variant="contained" color="primary">
							Submit
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button onClick={handleReset} variant="contained" color="primary">
							Reset
						</Button>
					</Grid>
				</Grid>
			</Box>
		</PageWrapper>
	)
}
