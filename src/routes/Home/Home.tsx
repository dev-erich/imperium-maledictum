import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '@hooks'
import { Grid } from '@mui/material'
import { PageWrapper } from '@layout'
import { Button } from '@common'
import EditIcon from '@mui/icons-material/Edit'

export default function Home() {
	const { setNavbarTitle } = useNavbar()

	useEffect(() => {
		setNavbarTitle('Imperium Maledictum', undefined)
	}, [setNavbarTitle])

	return (
		<PageWrapper>
			<Grid container spacing={2} alignItems={'center'}>
				<Grid item xs={8}>
					<Link to={'/my-character'}>
						<Button variant="contained">My Character</Button>
					</Link>
				</Grid>
				<Grid item xs={4}>
					<Link to={'/character-editor'}>
						<Button
							variant="contained"
							color="success"
							startIcon={<EditIcon />}
						>
							Edit
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12}>
					<Link to={'/player-handbook'}>
						<Button variant="contained">Player Handbook</Button>
					</Link>
				</Grid>
			</Grid>
		</PageWrapper>
	)
}
