import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '@layout/Navbar'
import { PageWrapper } from '@components'
import { Button, Grid } from '@mui/material'

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
			</Grid>
		</PageWrapper>
	)
}
