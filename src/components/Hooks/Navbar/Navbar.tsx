import { WarhammerIcon } from '@icons'
import { Box, Container, Grid, Typography } from '@mui/material'
import { createContext, useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

interface NavbarContextState {
	navbarContent: { title: string; subtitle: string | undefined }
	setNavbarTitle: (title: string, subtitle: string | undefined) => void
}

const initialState: NavbarContextState = {
	navbarContent: { title: '', subtitle: '' },
	setNavbarTitle: () => {},
}

const NavbarContext = createContext<NavbarContextState>(initialState)

interface NavbarProviderProps {
	children?: React.ReactNode
}

export default function NavbarProvider({ children }: NavbarProviderProps) {
	const [navbarContent, setNavbarContent] = useState<{
		title: string
		subtitle: string | undefined
	}>(initialState.navbarContent)

	const handleSetNavbarTitle = useCallback(
		(title: string, subtitle?: string) => {
			setNavbarContent({ title: title, subtitle: subtitle })
		},
		[]
	)

	return (
		<NavbarContext.Provider
			value={{ navbarContent, setNavbarTitle: handleSetNavbarTitle }}
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
						<Typography variant="h1">{navbarContent.title}</Typography>
						{navbarContent.subtitle && (
							<Typography
								variant="body1"
								sx={{ marginLeft: 0, color: 'white' }}
							>
								the {navbarContent.subtitle}
							</Typography>
						)}
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
