import { Box } from '@mui/material'

export interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
	type: 'Character'
}

export default function TabPanel(props: TabPanelProps) {
	const { children, value, index, type, ...other } = props
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`${type}-${index}`}
			aria-labelledby={`${type}-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ padding: 1.5 }}>{children}</Box>}
		</div>
	)
}
