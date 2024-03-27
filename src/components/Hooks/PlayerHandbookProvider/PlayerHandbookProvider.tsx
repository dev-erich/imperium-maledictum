import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Drawer, IconButton, Paper, SxProps, Theme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SectionAccordion, Typography } from '@common'
import { Section } from 'types/sections'
import {
	combatSection,
	criticalWoundsSection,
	damageAndWoundsSection,
	talentsSection,
} from '@common/Handbook/Sections'

const PlayerHandbookContext = createContext<{
	openSection: (val: string) => void
}>({
	openSection: () => {},
})

interface PlayerHandbookProviderProps {
	children?: React.ReactNode
}

export default function PlayerHandbookProvider({
	children,
}: PlayerHandbookProviderProps) {
	const [open, setOpen] = useState<boolean>(false)
	const [searchParams, setSearchParams] = useSearchParams()
	const [section, setSection] = useState<Section | undefined>(undefined)

	const closeDrawer = () => {
		setSearchParams({})
	}

	const openSection = useCallback(
		(sectionParam: string) => {
			setSearchParams({ section: sectionParam })
		},
		[setSearchParams]
	)

	useEffect(() => {
		const query = searchParams.get('section') || undefined
		if (query) {
			setSection(getSection(query))
			setOpen(true)
		} else {
			setOpen(false)
		}
	}, [searchParams, setOpen])

	return (
		<PlayerHandbookContext.Provider value={{ openSection }}>
			<Drawer open={open} onClose={closeDrawer}>
				<Box sx={{ width: '100vw', maxWidth: '800px' }} role="sections">
					<Box sx={headerStyles}>
						<Typography variant="h2" align="center" sx={{ color: '#d4d4d4' }}>
							{section ? section.title : 'Section'}
						</Typography>
					</Box>
					<IconButton sx={closeIconStyles} size="large" onClick={closeDrawer}>
						<CloseIcon fontSize="inherit" sx={{ color: '#d4d4d4' }} />
					</IconButton>
				</Box>
				<div
					style={{
						width: '100vw',
						maxWidth: '800px',
						height: 'var(--navbarHeight)',
					}}
				/>
				<Paper sx={paperStyles} elevation={0}>
					{section && (
						<SectionAccordion sectionDescription={section.description} />
					)}
				</Paper>
			</Drawer>
			{children}
		</PlayerHandbookContext.Provider>
	)
}

export const usePlayerHandbook = () => useContext(PlayerHandbookContext)

function getSection(searchParam: string): Section | undefined {
	switch (searchParam) {
		case 'combat':
			return combatSection

		case 'damage-and-wounds':
			return damageAndWoundsSection

		case 'talents':
			return talentsSection

		case 'critical-wounds':
			return criticalWoundsSection

		default:
			return undefined
	}
}

const paperStyles: SxProps<Theme> = {
	padding: 1,
	overflow: 'auto',
	maxHeight: 'calc(100svh - var(--navbarHeight))',
	maxWidth: '800px',
}

const closeIconStyles: SxProps<Theme> = {
	position: 'absolute',
	top: '15px',
	right: '5px',
	zIndex: 11,
}

const headerStyles: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100vw',
	background: '#393939',
	height: 'var(--navbarHeight)',
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	boxShadow: 3,
	zIndex: 10,
	maxWidth: '800px',
}
