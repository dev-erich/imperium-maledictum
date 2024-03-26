import { useEffect } from 'react'
import { useNavbar, usePlayerHandbook } from '@hooks'
import { PageWrapper } from '@layout'
import { Typography, Button } from '@common'
import { Grid } from '@mui/material'

export default function PlayerHandbook() {
	const { setNavbarTitle } = useNavbar()
	const { openSection } = usePlayerHandbook()

	useEffect(() => {
		setNavbarTitle('Player Handbook', undefined)
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
			<Typography variant="h2" sx={{ marginBottom: '10px' }}>
				Skills and Talents
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Button onClick={() => openSection('talents')} variant="contained">
						Talents
					</Button>
				</Grid>
			</Grid>
		</PageWrapper>
	)
}
