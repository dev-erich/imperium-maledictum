import { WarhammerIcon } from '@icons'
import { Box, Container, Grid, Typography } from '@mui/material'
import { createContext, useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarContextState {
	navbarTitle: string
	setNavbarTitle: (title: string) => void
}

const initialState: NavbarContextState = {
	navbarTitle: '',
	setNavbarTitle: () => {},
}

const NavbarContext = createContext<NavbarContextState>(initialState)

interface NavbarProviderProps {
	children?: React.ReactNode
}

export default function NavbarProvider({ children }: NavbarProviderProps) {
	const [navbarTitle, setNavbarTitle] = useState<string>(
		initialState.navbarTitle
	)

	const handleSetNavbarTitle = useCallback((title: string) => {
		setNavbarTitle(title)
	}, [])

	return (
		<NavbarContext.Provider
			value={{ navbarTitle, setNavbarTitle: handleSetNavbarTitle }}
		>
			<Container
				sx={{
					background:
						"url('https://www.toptal.com/designers/subtlepatterns/uploads/carbon_fibre.png') repeat fixed 0 0",
					height: 'var(--navbarHeight)',
					position: 'fixed',
					boxShadow: 3,
					zIndex: 100,
				}}
			>
				<Grid container alignItems="center" sx={{ padding: '8px 0' }}>
					<Grid item xs={10}>
						<Typography variant="h1">{navbarTitle}</Typography>
					</Grid>
					<Grid item xs={2}>
						<Link to="/">
							<WarhammerIcon />
						</Link>
					</Grid>
				</Grid>
			</Container>
			<Box sx={{ height: '73px' }} />
			{children}
		</NavbarContext.Provider>
	)
}

export const useNavbar = () => {
	const context = useContext(NavbarContext)
	if (context === undefined) {
		throw new Error('useNavbar must be used within a NavbarProvider')
	}
	return context
}
