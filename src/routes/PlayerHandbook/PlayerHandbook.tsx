import { useEffect, useState } from 'react'
import { useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import { Typography, Button } from '@common'
import { SectionSelection, Sections } from './Sections'
import { Grid } from '@mui/material'

export default function PlayerHandbook() {
	const { setNavbarTitle } = useNavbar()
	useEffect(() => {
		setNavbarTitle('Player Handbook')
	}, [setNavbarTitle])

	const [open, setOpen] = useState<boolean>(false)
	const [section, setSelection] = useState<SectionSelection>()
	const [sectionTitle, setSectionTitle] = useState<string>()
	const handleOpen = (selection: SectionSelection, title?: string) => {
		setOpen(true)
		setSelection(selection)
		setSectionTitle(title ? title : selection)
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
						onClick={() => handleOpen('DamageAndWounds', 'Damage & Wounds')}
						variant="contained"
					>
						Wounds
					</Button>
				</Grid>
			</Grid>
			<Sections
				handleClose={handleClose}
				open={open}
				selection={section}
				title={sectionTitle}
			/>
		</PageWrapper>
	)
}
