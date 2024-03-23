import { useEffect, useState } from 'react'
import { useCharacter, useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import { InputField, DropdownSelect, Button, Typography } from '@common'
import { Box, Grid, SelectChangeEvent, SxProps } from '@mui/material'
import { Character, Role } from 'types/character'
import _ from 'lodash'
import { Theme } from '@emotion/react'
import { CharacterArmour } from './CharacterArmor'
import { DeleteForever } from '@mui/icons-material'

export const RolesObj: Role[] = [
	'Interlocutor',
	'Mystic',
	'Penumbra',
	'Savant',
	'Warrior',
	'Zealot',
] as const

export default function CharacterEditor() {
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
		setFormData(null)
	}

	return (
		<Box
			component="form"
			autoComplete="off"
			onSubmit={handleSubmit}
			sx={{ height: '100%', position: 'relative' }}
		>
			<PageWrapper>
				<div style={{ overflowY: 'auto' }}>
					<Typography variant="h3">Details:</Typography>
					<Grid container spacing={1}>
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
					</Grid>
					<Grid container spacing={1}>
						<Grid item container direction="column" xs={3}>
							<Grid item>
								<Typography variant="h3">Totals:</Typography>
							</Grid>
							<Grid item>
								<InputField
									required
									type="number"
									id="fate.total"
									label="Fate"
									value={formData?.fate?.total || ''}
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item>
								<InputField
									required
									type="number"
									id="initiative"
									label="Initiative"
									value={formData?.initiative || ''}
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item>
								<InputField
									required
									type="number"
									id="wounds.total"
									label="Wounds"
									value={formData?.wounds?.total || ''}
									onChange={handleInputChange}
								/>
							</Grid>
							<Grid item>
								<InputField
									required
									type="number"
									id="warp.total"
									label="Warp"
									value={formData?.warp?.total || ''}
									onChange={handleInputChange}
								/>
							</Grid>
						</Grid>
						<Grid item xs={9}>
							<CharacterArmour formData={formData} setFormData={setFormData} />
						</Grid>
					</Grid>
				</div>
			</PageWrapper>
			<Grid container spacing={1} sx={submissionControlStyles}>
				<Grid item xs={9}>
					<Button
						type="submit"
						variant="contained"
						color="success"
						sx={{
							height: '100%',
							fontSize: '20px',
							lineHeight: '16px',
							letterSpacing: '2px',
						}}
					>
						Save
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={handleReset}
						variant="contained"
						color="error"
						sx={{ height: '100%' }}
					>
						<DeleteForever fontSize="large" />
					</Button>
				</Grid>
			</Grid>
		</Box>
	)
}

const submissionControlStyles: SxProps<Theme> = {
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	height: '54px',
	paddingLeft: '8px',
	paddingRight: '8px',
	paddingBottom: '8px',
	background: '#FFF',
	zIndex: 10,
	backgroundImage:
		"url('https://www.toptal.com/designers/subtlepatterns/uploads/carbon_fibre.png')",
	backgroundRepeat: 'repeat',
	backgroundAttachment: 'fixed',
	backgroundPosition: '0 0',
}
