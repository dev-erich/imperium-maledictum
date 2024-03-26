import { useCallback, useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { PageWrapper } from '@layout'
import { CharacterSheetTabs } from './Tabs'

export default function CharacterSheet() {
	const [tab, setTab] = useState(0)

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue)
	}

	const a11yProps = useCallback((index: number) => {
		return {
			id: `character-tab-${index}`,
			'aria-controls': `character-tabpanel-${index}`,
		}
	}, [])

	return (
		<Box sx={{ height: '100%', position: 'relative' }}>
			<PageWrapper sx={{ padding: 0 }}>
				<Tabs
					value={tab}
					onChange={handleTabChange}
					sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
					variant="scrollable"
					scrollButtons="auto"
					allowScrollButtonsMobile
				>
					<Tab label="Combat" {...a11yProps(0)} />
					<Tab label="Features" {...a11yProps(1)} />
					<Tab label="Skills & Specialisations" {...a11yProps(2)} />
					<Tab label="Talents" {...a11yProps(3)} />
				</Tabs>
				<CharacterSheetTabs value={tab} />
			</PageWrapper>
		</Box>
	)
}
