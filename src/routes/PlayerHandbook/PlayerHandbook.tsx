import { useEffect, useState } from 'react'
import { useNavbar } from '@layout/Navbar'
import { PageWrapper } from '@layout'
import { Typography } from '@common'
import { SectionSelection, Sections } from './Sections'
import { Button, Grid } from '@mui/material'

export default function PlayerHandbook() {
	const { setNavbarTitle } = useNavbar()
	useEffect(() => {
		setNavbarTitle('Player Handbook')
	}, [setNavbarTitle])

	const [open, setOpen] = useState<boolean>(false)
	const [section, setSelection] = useState<SectionSelection>()
	const handleOpen = (selection: SectionSelection) => {
		setOpen(true)
		setSelection(selection)
	}
	const handleClose = () => setOpen(false)

	return (
		<PageWrapper>
			<Typography variant="h2" sx={{ marginBottom: '10px' }}>
				Rules
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Button onClick={() => handleOpen('Combat')} variant="contained">
						Combat
					</Button>
				</Grid>
				<Grid item xs={4}>
					<Button
						onClick={() => handleOpen('DamageAndWounds')}
						variant="contained"
					>
						Wounds
					</Button>
				</Grid>
			</Grid>
			<Sections handleClose={handleClose} open={open} selection={section} />
		</PageWrapper>
	)
}
