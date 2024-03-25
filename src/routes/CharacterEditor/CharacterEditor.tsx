import { useCallback, useEffect, useState } from 'react'
import { useCharacter, useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import { Box, SelectChangeEvent, Tab, Tabs } from '@mui/material'
import _ from 'lodash'
import { CharacterControls } from '.'
import { Character } from 'src/components/objects'
import { CharacterTabs } from './Tabs'

export default function CharacterEditor() {
	const { setNavbarTitle } = useNavbar()
	const { character, setCharacter } = useCharacter()
	const [formData, setFormData] = useState<Character>(character)
	const [tab, setTab] = useState(0)

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setTab(newValue)
	}

	useEffect(() => {
		setNavbarTitle('Character Editor')
	}, [setNavbarTitle])

	useEffect(() => {
		setFormData(character)
	}, [character])

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target

		setFormData((prev) => {
			const updatedFormData = _.cloneDeep(prev) || {}
			_.set(updatedFormData, id, value)
			return updatedFormData
		})
	}

	const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
		const { name, value } = event.target

		setFormData((prev) => {
			const updatedFormData = _.cloneDeep(prev) || {}
			_.set(updatedFormData, name, value)
			return updatedFormData
		})
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setCharacter(formData)
	}

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
			onSubmit={handleSubmit}
			sx={{ height: '100%', position: 'relative' }}
		>
			<PageWrapper sx={{ padding: 0 }}>
				<Tabs
					value={tab}
					onChange={handleTabChange}
					sx={{ background: 'rgba(0,0,0,0.1)' }}
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
				<CharacterTabs
					value={tab}
					formData={formData}
					setFormData={setFormData}
					handleInputChange={handleInputChange}
					handleSelectChange={handleSelectChange}
				/>
			</PageWrapper>
			<CharacterControls />
		</Box>
	)
}
