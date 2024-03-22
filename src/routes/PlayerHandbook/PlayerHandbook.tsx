import { useEffect, useState } from 'react'
import { useNavbar } from '@layout/Navbar'
import { PageWrapper } from '@components'
import { SectionSelection, Sections } from './Sections'
import { Button } from '@mui/material'

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
			<Button onClick={() => handleOpen('Combat')} variant="contained">
				Combat
			</Button>
			<Sections handleClose={handleClose} open={open} selection={section} />
		</PageWrapper>
	)
}
