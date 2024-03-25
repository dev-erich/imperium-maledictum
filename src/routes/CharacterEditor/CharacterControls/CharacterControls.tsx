import { Button, Typography } from '@common'
import { Theme } from '@emotion/react'
import { useCharacter } from '@hooks'
import { DeleteForever } from '@mui/icons-material'
import { Box, Grid, Modal, SxProps } from '@mui/material'
import { useState } from 'react'

const submissionControlStyles: SxProps<Theme> = {
	position: 'fixed',
	bottom: 0,
	left: 0,
	right: 0,
	height: '54px',
	paddingLeft: '8px',
	paddingRight: '8px',
	paddingBottom: '8px',
	background: '#393939',
	zIndex: 10,
}

export default function CharacterControls() {
	const { resetCharacter } = useCharacter()
	const [openConfirmation, setOpenConfirmation] = useState<boolean>(false)
	const handleOpenModal = () => setOpenConfirmation(true)
	const handleCloseModal = () => setOpenConfirmation(false)

	const handleConfirm = () => {
		resetCharacter()
		handleCloseModal()
	}

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
						onClick={handleOpenModal}
						variant="contained"
						color="error"
						sx={{ height: '100%' }}
					>
						<DeleteForever fontSize="large" />
					</Button>
				</Grid>
			</Grid>
			<Modal open={openConfirmation} onClose={handleCloseModal}>
				<Box sx={confirmationModalStyle}>
					<Typography variant="h3" component="h2" textAlign="center">
						Confirm Deletion
					</Typography>
					<Typography variant="body1" component="h2" textAlign="center">
						Are you certain you wish to walk this path? Deleting your character
						will erase their saga from the annals of the Imperium, as if they
						never existed. This action is irreversible.
						<br />
						<br />
						Consider well; if you are prepared to let their memory fade into
						oblivion, proceed.
					</Typography>
					<Grid container spacing={2} p={2}>
						<Grid item xs={6}>
							<Button onClick={handleConfirm} variant="contained">
								Accept
							</Button>
						</Grid>
						<Grid item xs={6}>
							<Button
								onClick={handleCloseModal}
								variant="contained"
								color="error"
							>
								Deny
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</>
	)
}

const confirmationModalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	minWidth: 300,
	background: '#ededed',
	border: '1.5px solid #000',
	borderRadius: '3px',
	boxShadow: 24,
	p: 2,
}
