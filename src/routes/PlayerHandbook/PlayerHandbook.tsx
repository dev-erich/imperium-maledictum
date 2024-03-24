import { useEffect, useState } from 'react'
import { useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import { Typography, Button } from '@common'
import { Sections } from './Sections'
import { Grid } from '@mui/material'
import { useSearchParams } from 'react-router-dom'

export default function PlayerHandbook() {
	const { setNavbarTitle } = useNavbar()
	const [searchParams, setSearchParams] = useSearchParams()
	const [open, setOpen] = useState<boolean>(false)

	useEffect(() => {
		setNavbarTitle('Player Handbook')
	}, [setNavbarTitle])

	const setQueryParameter = (query: string) => {
		setSearchParams({ section: query })
	}

	const handleClose = () => {
		setSearchParams({})
	}

	return (
		<PageWrapper>
			<Typography variant="h2" sx={{ marginBottom: '10px' }}>
				Rules
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Button
						onClick={() => setQueryParameter('combat')}
						variant="contained"
					>
						Combat
					</Button>
				</Grid>
				<Grid item xs={4}>
					<Button
						onClick={() => setQueryParameter('damage-and-wounds')}
						variant="contained"
					>
						Wounds
					</Button>
				</Grid>
			</Grid>
			<Sections
				handleClose={handleClose}
				setOpen={setOpen}
				open={open}
				searchParams={searchParams}
			/>
		</PageWrapper>
	)
}
