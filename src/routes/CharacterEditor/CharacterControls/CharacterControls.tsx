import { Button } from '@common'
import { Theme } from '@emotion/react'
import { DeleteForever } from '@mui/icons-material'
import { Grid, SxProps } from '@mui/material'

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

interface CharacterControlsProps {
	handleReset: () => void
}

export default function CharacterControls(props: CharacterControlsProps) {
	const { handleReset } = props

	return (
		<>
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
		</>
	)
}
