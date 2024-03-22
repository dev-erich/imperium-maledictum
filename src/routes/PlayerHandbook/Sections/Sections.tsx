import { Modal, Paper, SxProps, Theme } from '@mui/material'
import { Combat, DamageAndWounds } from '.'

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

interface SectionsProps {
	handleClose: () => void
	open: boolean
	selection: SectionSelection
}

export type SectionSelection = undefined | 'Combat' | 'DamageAndWounds'

export default function Sections(props: SectionsProps) {
	const { handleClose, open, selection } = props

	return (
		<Modal open={open} onClose={handleClose}>
			<Paper sx={style} elevation={5}>
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
