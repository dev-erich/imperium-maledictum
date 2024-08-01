import { Box, type BoxProps } from '@mui/material'
import { SxProps } from '@mui/material'

export interface TabPanelProps extends BoxProps {
	children?: React.ReactNode
	index: number
	value: number
	type: 'Character'
}

const panelStyles: SxProps = {
	height: '100%',
	overflow: 'auto',
	position: 'relative',
}

const shadowEffect: SxProps = {
	position: 'fixed',
	backgroundColor: 'transparent',
	boxShadow: 'inset 1px 4px 9px -6px;',
	top: '120px',
	left: '0',
	width: '100%',
	height: '9px',
}

export default function TabPanel(props: TabPanelProps) {
	const { children, value, index, type, ...other } = props
	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`${type}-${index}`}
			aria-labelledby={`${type}-tab-${index}`}
			sx={panelStyles}
			{...other}
		>
			{value === index && <Box sx={{ padding: 1.5 }}>{children}</Box>}
			<Box sx={shadowEffect} />
		</Box>
	)
}
