import { Typography } from '@common'
import { Theme } from '@emotion/react'
import {
	Card,
	CardProps,
	Divider,
	Grid,
	IconButton,
	SxProps,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

interface CurrentTotalTable {
	title?: string
	leftHeader?: string
	leftValue: number
	rightHeader?: string
	rightValue: number
	handleSubtractClick: () => void
	handleAddClick: () => void
	cardProps?: CardProps
}

const style: SxProps<Theme> = {
	background: 'white',
}

export default function CurrentTotalTable(props: CurrentTotalTable) {
	const {
		title,
		leftHeader,
		rightHeader,
		leftValue,
		rightValue,
		handleSubtractClick,
		handleAddClick,
		cardProps,
	} = props

	return (
		<Card sx={style} {...cardProps}>
			<Grid container alignItems="center">
				<Grid item xs={4}>
					<IconButton
						aria-label="subtract"
						size="small"
						sx={{ width: '100%' }}
						onClick={handleSubtractClick}
					>
						<RemoveIcon />
					</IconButton>
				</Grid>
				<Grid item xs={4}>
					<Typography
						sx={{ width: '100%', margin: '3px 0', textAlign: 'center' }}
						variant="h4"
					>
						{title}
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<IconButton
						aria-label="add"
						size="small"
						sx={{ width: '100%' }}
						onClick={handleAddClick}
					>
						<AddIcon />
					</IconButton>
				</Grid>
			</Grid>
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
