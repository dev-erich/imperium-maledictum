import { Typography } from '@common'
import { Theme } from '@emotion/react'
import { Card, Divider, Grid, SxProps } from '@mui/material'

interface CurrentTotalTable {
	title: string
	leftHeader?: string
	leftValue: number
	rightHeader?: string
	rightValue: number
}

const style: SxProps<Theme> = {
	// padding: 1,
	background: 'white',
}

export default function CurrentTotalTable(props: CurrentTotalTable) {
	const { title, leftHeader, rightHeader, leftValue, rightValue } = props

	return (
		<Card sx={style}>
			<Typography
				sx={{ width: '100%', margin: '3px 0', textAlign: 'center' }}
				variant="h4"
			>
				{title}
			</Typography>
			<Grid container spacing={2} alignContent="center">
				<Grid item xs={6}>
					<Typography
						sx={{ textAlign: 'center', marginLeft: '6px' }}
						variant="body1"
					>
						<b>{leftHeader ? leftHeader : 'Current'}</b>
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography
						sx={{ textAlign: 'center', marginLeft: '6px' }}
						variant="body1"
					>
						<b>{rightHeader ? rightHeader : 'Total'}</b>
					</Typography>
				</Grid>
			</Grid>
			<Divider />
			<Grid container spacing={2} alignContent="center">
				<Grid item xs={6}>
					<Typography
						sx={{ textAlign: 'center', marginLeft: '6px' }}
						variant="body1"
					>
						{leftValue}
					</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography
						sx={{ textAlign: 'center', marginLeft: '6px' }}
						variant="body1"
					>
						{rightValue}
					</Typography>
				</Grid>
			</Grid>
		</Card>
	)
}
