import { useEffect, useState } from 'react'
import { useCharacter, useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import { InputField, DropdownSelect, Button } from '@common'
import { Box, Grid, SelectChangeEvent } from '@mui/material'
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
				autoComplete="off"
				onSubmit={handleSubmit}
				sx={{ height: '100%', position: 'relative' }}
			>
				<Grid container spacing={2}>
					<Grid item xs={7}>
						<InputField
							required
							id="name"
							label="Name"
							value={formData?.name || ''}
							onChange={handleInputChange}
						/>
					</Grid>
					<Grid item xs={5}>
						<DropdownSelect
							required
							labelId="role-label"
							id="role"
							name="role"
							value={formData?.role || ''}
							label="Role"
							onChange={handleSelectChange}
							menuItems={RolesObj}
						/>
					</Grid>
					<Grid item xs={12}>
						<InputField
							required
							id="corruption.mutations"
							label="Mutations"
							value={formData?.corruption?.mutations || ''}
							onChange={handleInputChange}
						/>
					</Grid>
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
