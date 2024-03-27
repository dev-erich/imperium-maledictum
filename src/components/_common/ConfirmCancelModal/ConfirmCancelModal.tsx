import { Typography, Button } from '@common'
import { Theme } from '@emotion/react'
import { Box, Grid, SxProps } from '@mui/material'
import Modal, { ModalProps as MUIModalProps } from '@mui/material/Modal'

interface ConfirmCancelModalProps extends MUIModalProps {
	title: string
	description: string | React.ReactNode
	handleConfirm: () => void
	handleCancel: () => void
}

const confirmationModalStyle: SxProps<Theme> = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	minWidth: 300,
	background: '#ededed',
	border: '1.5px solid #000',
	borderRadius: '3px',
	boxShadow: 24,
	padding: 2,
}

export default function ConfirmCancelModal(
	props: Omit<ConfirmCancelModalProps, 'children'>
) {
	const { title, description, handleConfirm, handleCancel, ...other } = props
	return (
		<Modal {...other} onClose={handleCancel}>
			<Box sx={confirmationModalStyle}>
				{typeof title === 'string' ? (
					<Typography variant="h3" component="h2" textAlign="center">
						{title}
					</Typography>
				) : (
					title
				)}
				{typeof description === 'string' ? (
					<Typography variant="body1" component="h2" textAlign="center">
						{description}
					</Typography>
				) : (
					description
				)}
				<Grid container spacing={2} p={2}>
					<Grid item xs={6}>
						<Button onClick={handleConfirm} variant="contained">
							Accept
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button onClick={handleCancel} variant="contained" color="error">
							Deny
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Modal>
	)
}
