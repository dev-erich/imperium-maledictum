import { IconButton, Modal, Paper, SxProps, Theme } from '@mui/material'
import { Combat, DamageAndWounds } from '.'
import CloseIcon from '@mui/icons-material/Close'
import { Typography } from '@common'

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
	open: boolean
	selection: SectionSelection
	title?: string
}

export type SectionSelection = undefined | 'Combat' | 'DamageAndWounds'

export default function Sections(props: SectionsProps) {
	const { handleClose, open, selection, title } = props

	return (
		<Modal open={open} onClose={handleClose}>
			<Paper sx={paperStyles} elevation={5}>
				<Typography variant="h2" align="center" sx={{ marginBottom: '20px' }}>
					{title ? title : 'Section'}
				</Typography>
				<IconButton sx={closeIconStyles} size="large" onClick={handleClose}>
					<CloseIcon fontSize="inherit" />
				</IconButton>
				{getSection(selection)}
			</Paper>
		</Modal>
	)
}

function getSection(sectionSelection: SectionSelection) {
	switch (sectionSelection) {
		case 'Combat':
			return <Combat />
		case 'DamageAndWounds':
			return <DamageAndWounds />
	}
}
