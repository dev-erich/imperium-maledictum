import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '@layout/Navbar'
import { PageWrapper, Typography } from '@components'
import { Button, Grid, Modal, Paper, SxProps } from '@mui/material'
import { Theme } from '@emotion/react'

const style: SxProps<Theme> = {
	position: 'absolute',
	top: '85px',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '100%',
	height: '100%',
	maxHeight: 'calc(100% - 125px)',
	maxWidth: 'calc(100vw - 20px)',
	p: 2,
	overflow: 'auto',
}

export default function Home() {
	const { setNavbarTitle } = useNavbar()
	const [danielModal, setDanielModal] = useState<boolean>(true)

	const handleClose = () => setDanielModal(false)
	useEffect(() => {
		setNavbarTitle('Imperium Maledictum')
	}, [setNavbarTitle])

	useEffect(() => {
		setDanielModal(true)
	}, [])

	return (
		<PageWrapper>
			<AreYouDaniel />
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

	function AreYouDaniel() {
		const [isDaniel, setIsDaniel] = useState<boolean>(false)

		return (
			<Modal open={danielModal} onClose={handleClose}>
				<Paper sx={style}>
					<Grid container spacing={4}>
						<Grid item xs={12}>
							<Typography textAlign={'center'}>Are you Daniel?</Typography>
						</Grid>
						<Grid item xs={12}>
							<Button onClick={() => setIsDaniel(true)} variant="contained">
								Yes
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button onClick={() => setDanielModal(false)} variant="contained">
								No
							</Button>
						</Grid>
						{isDaniel && (
							<Grid item xs={12}>
								<img src="https://media1.tenor.com/m/J4A_2BiQj5MAAAAC/overlord-wenpurge.gif" />
							</Grid>
						)}
					</Grid>
				</Paper>
			</Modal>
		)
	}
}
