import { DropdownSelect, InputField, Typography } from '@common'
import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'
import { CharacterTabProps } from '..'
import { CharacterRole } from 'types/character'
import { Character } from 'src/components/objects'

export const RolesObj: CharacterRole[] = [
	'Interlocutor',
	'Mystic',
	'Penumbra',
	'Savant',
	'Warrior',
	'Zealot',
] as const

interface DetailsTabProps extends CharacterTabProps {
	setFormData: (character: Character) => void
}

export default function Details(props: DetailsTabProps) {
	const { handleInputChange, handleSelectChange, formData, setFormData } = props

	const handleFatedChange = (
		_event: React.SyntheticEvent<Element, Event>,
		checked: boolean
	) => {
		if (checked)
			setFormData({
				...formData,
				fate: {
					current: 0,
					total: 4,
				},
			})
		else
			setFormData({
				...formData,
				fate: {
					current: 0,
					total: 3,
				},
			})
	}

	return (
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
					labelId="role-label"
					id="role"
					name="role"
					value={formData?.role || ''}
					label="Role"
					onChange={handleSelectChange}
					menuItems={RolesObj as string[]}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.origin"
					label="Origin"
					value={formData?.details?.origin || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.patron"
					label="Patron"
					value={formData?.details?.patron || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={7}>
				<InputField
					id="details.faction"
					label="Faction"
					value={formData?.details?.faction || ''}
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
					value={formData?.details?.age || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={4}>
				<InputField
					id="details.eyes"
					label="Eyes"
					value={formData?.details?.eyes || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.hair"
					label="Hair"
					value={formData?.details?.hair || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={3}>
				<InputField
					id="details.height"
					label="Height"
					value={formData?.details?.height || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={3}>
				<InputField
					id="details.weight"
					label="Weight"
					value={formData?.details?.weight || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<InputField
					id="details.handedness"
					label="Handedness"
					value={formData?.details?.handedness || ''}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<InputField
					id="details.distinguishingFeatures"
					label="Distinguishing Features"
					value={formData?.details?.distinguishingFeatures || ''}
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
