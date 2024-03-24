import { useEffect } from 'react'
import { useNavbar, usePlayerHandbook } from '@hooks'
import { PageWrapper } from '@layout'
import { Typography, Button } from '@common'
// import { Sections } from './Sections'
import { Grid } from '@mui/material'
// import { useSearchParams } from 'react-router-dom'

export default function PlayerHandbook() {
	const { setNavbarTitle } = useNavbar()
	const { openSection } = usePlayerHandbook()

	useEffect(() => {
		setNavbarTitle('Player Handbook')
	}, [setNavbarTitle])

	return (
		<PageWrapper>
			<Typography variant="h2" sx={{ marginBottom: '10px' }}>
				Rules
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Button onClick={() => openSection('combat')} variant="contained">
						Combat
					</Button>
				</Grid>
				<Grid item xs={4}>
					<Button
						onClick={() => openSection('damage-and-wounds')}
						variant="contained"
					>
						Wounds
					</Button>
				</Grid>
			</Grid>
		</PageWrapper>
	)
}
