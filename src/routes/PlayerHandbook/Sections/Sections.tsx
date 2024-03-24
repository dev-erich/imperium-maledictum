import { IconButton, Modal, Paper, SxProps, Theme } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { SectionAccordion, Typography } from '@common'
import { useEffect, useState } from 'react'
import { Section } from 'types/sections'
import { combatSection, damageAndWoundsSection } from './'

const paperStyles: SxProps<Theme> = {
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

const closeIconStyles: SxProps<Theme> = {
	position: 'absolute',
	top: '5px',
	right: '5px',
}

interface SectionsProps {
	handleClose: () => void
	setOpen: (open: boolean) => void
	open: boolean
	searchParams: URLSearchParams
	// selection: SectionSelection
	// title?: string
}

export default function Sections(props: SectionsProps) {
	const { handleClose, setOpen, open, searchParams } = props
	// const [searchParams] = useSearchParams()
	const [section, setSection] = useState<Section | undefined>(undefined)

	useEffect(() => {
		const query = searchParams.get('section') || undefined
		if (query) setOpen(true)
		if (!query) setOpen(false)
	}, [searchParams, setOpen])

	useEffect(() => {
		const query = searchParams.get('section') || undefined
		if (query) setSection(getSection(query))
	}, [searchParams])

	return (
		<Modal open={open} onClose={handleClose}>
			<Paper sx={paperStyles} elevation={5}>
				<Typography variant="h2" align="center" sx={{ marginBottom: '20px' }}>
					{section ? section.title : 'Section'}
				</Typography>
				<IconButton sx={closeIconStyles} size="large" onClick={handleClose}>
					<CloseIcon fontSize="inherit" />
				</IconButton>
				{section && (
					<SectionAccordion sectionDescription={section.description} />
				)}
			</Paper>
		</Modal>
	)
}

export type SectionSelection = undefined | 'combat' | 'damage-and-wounds'

function getSection(searchParam: string): Section | undefined {
	switch (searchParam) {
		case 'combat':
			return combatSection

		case 'damage-and-wounds':
			return damageAndWoundsSection

		default:
			return undefined
	}
}
