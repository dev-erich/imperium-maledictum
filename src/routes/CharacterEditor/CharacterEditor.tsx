import { useCallback, useEffect, useState } from 'react'
import { useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import { Box, Tab, Tabs } from '@mui/material'
import { CharacterControls } from '.'
import { CharacterTabs } from './Tabs'

export default function CharacterEditor() {
	const { setNavbarTitle } = useNavbar()
	const [tab, setTab] = useState(0)

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue)
	}

	useEffect(() => {
		setNavbarTitle('Character Editor', undefined)
	}, [setNavbarTitle])

	const a11yProps = useCallback((index: number) => {
		return {
			id: `character-tab-${index}`,
			'aria-controls': `character-tabpanel-${index}`,
		}
	}, [])

	return (
		<Box
			component="form"
			autoComplete="off"
			sx={{ height: '100%', position: 'relative' }}
		>
			<PageWrapper sx={{ padding: 0 }}>
				<Tabs
					value={tab}
					onChange={handleTabChange}
					sx={{ background: 'rgba(0, 0, 0, 0.1)' }}
					variant="scrollable"
					scrollButtons="auto"
					allowScrollButtonsMobile
				>
					<Tab label="Details" {...a11yProps(0)} />
					<Tab label="Characteristics" {...a11yProps(1)} />
					<Tab label="Skills" {...a11yProps(2)} />
					<Tab label="Specialisations" {...a11yProps(3)} />
					<Tab label="Talents" {...a11yProps(4)} />
				</Tabs>
				<CharacterTabs value={tab} />
			</PageWrapper>
			<CharacterControls />
		</Box>
	)
}
