import { Alert, Typography } from '@common'
import { CriticalWound } from '@data'
import { Grid, Paper, SxProps } from '@mui/material'
import CasinoIcon from '@mui/icons-material/Casino'
import { Theme } from '@emotion/react'

const centerItems: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

interface CriticalWoundsCardProps {
	criticalWounds: CriticalWound[]
}

export default function CriticalWoundCards({
	criticalWounds,
}: CriticalWoundsCardProps) {
	return criticalWounds.map((critWound) => {
		const { roll, description, effects, treatment } = critWound
		return (
			<Paper
				key={description}
				sx={{
					margin: '15px 0',
					background: '#fff',
					padding: '12px',
				}}
			>
				<Grid container>
					<Grid item xs={4} sx={centerItems}>
						<Alert
							severity="info"
							icon={<CasinoIcon color="primary" fontSize="large" />}
						>
							<Typography
								variant="body1"
								sx={{ marginLeft: '6px', textWrap: 'nowrap' }}
							>
								{roll}
							</Typography>
						</Alert>
					</Grid>
					<Grid
						item
						xs={8}
						sx={{ ...centerItems, justifyContent: 'flex-start' }}
					>
						<Typography variant="h4">{description}</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body1">
							<b>Effects:</b>
						</Typography>
						{effects}
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body1">
							<b>Treatment:</b>
						</Typography>
						{treatment}
					</Grid>
				</Grid>
			</Paper>
		)
	})
}
