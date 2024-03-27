import React from 'react'
import { Alert, Typography } from '@common'
import { criticalWounds } from '@data'
import { Section } from 'types/sections'
import { Grid, SxProps } from '@mui/material'
import CasinoIcon from '@mui/icons-material/Casino'
import { Theme } from '@emotion/react'

const centerItems: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

export const criticalWoundsSection: Section = {
	title: 'Critical Wounds',
	description: [
		{
			summary: 'Head',
			details: criticalWounds.map((critWound) => {
				return (
					<React.Fragment key={critWound.description}>
						<Grid
							container
							sx={{
								border: '1px solid',
								margin: '15px 0',
								paddingBottom: 1,
								paddingTop: 1,
								borderRadius: 1,
							}}
						>
							<Grid item xs={3} sx={centerItems}>
								<Alert severity="info" icon={<CasinoIcon color="primary" />}>
									{critWound.roll}
								</Alert>
							</Grid>
							<Grid
								item
								xs={9}
								sx={{ ...centerItems, justifyContent: 'flex-start' }}
							>
								<Typography variant="h4">{critWound.description}</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body1">
									<b>Effects:</b>
								</Typography>
								{critWound.effects}
							</Grid>
							<Grid item xs={6}>
								<Typography variant="body1">
									<b>Treatment:</b>
								</Typography>
								{critWound.treatment}
							</Grid>
						</Grid>
					</React.Fragment>
				)
			}),
		},
		{
			summary: 'Arms',
			details: <></>,
		},
		{
			summary: 'Legs',
			details: <></>,
		},
		{
			summary: 'Body',
			details: <></>,
		},
	],
}
