import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '@hooks'
import { Button, Grid } from '@mui/material'
import { PageWrapper } from '@layout'

export default function Home() {
	const { setNavbarTitle } = useNavbar()

	useEffect(() => {
		setNavbarTitle('Imperium Maledictum')
	}, [setNavbarTitle])

	return (
		<PageWrapper>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Link to={'/player-handbook'}>
						<Button variant="contained">Player Handbook</Button>
					</Link>
				</Grid>
				<Grid item xs={12}>
					<Link to={'/character-creation'}>
						<Button variant="contained">Character Creation</Button>
					</Link>
				</Grid>
				<Grid item xs={12}>
					<Link to={'/session-tracker'}>
						<Button variant="contained">Session Tracker</Button>
					</Link>
				</Grid>
			</Grid>
		</PageWrapper>
	)
}
