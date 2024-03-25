import { DropdownSelect, InputField, Typography } from '@common'
import { Grid } from '@mui/material'
import { CharacterTabProps } from '..'
import { CharacterRole } from 'types/character'

export const RolesObj: CharacterRole[] = [
	'Interlocutor',
	'Mystic',
	'Penumbra',
	'Savant',
	'Warrior',
	'Zealot',
] as const

export default function Details(props: CharacterTabProps) {
	const { handleInputChange, handleSelectChange, formData } = props

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
			<Grid item xs={12}>
				<InputField
					id="details.faction"
					label="Faction"
					value={formData?.details?.faction || ''}
					onChange={handleInputChange}
				/>
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
			<Grid item xs={0}>
				
			</Grid>
			<Grid item xs={0}>
				
			</Grid>
		</Grid>
		// {/* <Grid container spacing={1}>
		// 	<Grid item container direction="column" xs={3}>
		// 		<Grid item>
		// 			<Typography variant="h3">Totals:</Typography>
		// 		</Grid>
		// 		<Grid item>
		// 			<InputField
		// 				type="number"
		// 				id="fate.total"
		// 				label="Fate"
		// 				value={formData?.fate?.total || ''}
		// 				onChange={handleInputChange}
		// 			/>
		// 		</Grid>
		// 		<Grid item>
		// 			<InputField
		// 				type="number"
		// 				id="initiative"
		// 				label="Initiative"
		// 				value={formData?.initiative || ''}
		// 				onChange={handleInputChange}
		// 			/>
		// 		</Grid>
		// 		<Grid item>
		// 			<InputField
		// 				type="number"
		// 				id="wounds.total"
		// 				label="Wounds"
		// 				value={formData?.wounds?.total || ''}
		// 				onChange={handleInputChange}
		// 			/>
		// 		</Grid>
		// 		<Grid item>
		// 			<InputField
		// 				type="number"
		// 				id="warp.total"
		// 				label="Warp"
		// 				value={formData?.warp?.total || ''}
		// 				onChange={handleInputChange}
		// 			/>
		// 		</Grid>
		// 	</Grid> */}
		// {/* </Grid> */}
	)
}
