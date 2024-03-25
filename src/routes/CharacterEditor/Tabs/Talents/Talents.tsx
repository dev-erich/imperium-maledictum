import { Grid } from '@mui/material'
import { CharacterTabProps } from '..'
// import { InputField } from '@common'

export default function Talents(props: CharacterTabProps) {
	const { handleInputChange, formData } = props
	console.log('🚀 \n formData:', formData)
	console.log('🚀 \n handleInputChange:', handleInputChange)

	return (
		<Grid container spacing={1}>
			<Grid item>

			</Grid>
		</Grid>
	)
}
