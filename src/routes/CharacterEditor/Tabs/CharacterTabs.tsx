import { TabPanel } from '@common/TabPanel'
import { Characteristics, Details, Skills, Specialisations, Talents } from '.'
import { SelectChangeEvent } from '@mui/material'
import { Character } from 'src/components/objects'

export interface CharacterTabProps {
	formData: Character
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleSelectChange: (event: SelectChangeEvent<unknown>) => void
}

interface CharacterTabsProps extends CharacterTabProps {
	value: number
	setFormData: (character: Character) => void
}

export default function CharacterTabs(props: CharacterTabsProps) {
	const {
		value,
		formData,
		setFormData,
		handleInputChange,
		handleSelectChange,
	} = props

	return (
		<>
			<TabPanel value={value} index={0} type="Character">
				<Details
					formData={formData}
					setFormData={setFormData}
					handleInputChange={handleInputChange}
					handleSelectChange={handleSelectChange}
				/>
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={1} type="Character">
				<Characteristics
					formData={formData}
					setFormData={setFormData}
					handleInputChange={handleInputChange}
					handleSelectChange={handleSelectChange}
				/>
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={2} type="Character">
				<Skills
					formData={formData}
					setFormData={setFormData}
					handleInputChange={handleInputChange}
					handleSelectChange={handleSelectChange}
				/>
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={3} type="Character">
				<Specialisations
					formData={formData}
					setFormData={setFormData}
					handleInputChange={handleInputChange}
					handleSelectChange={handleSelectChange}
				/>
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={4} type="Character">
				<Talents
					formData={formData}
					handleInputChange={handleInputChange}
					handleSelectChange={handleSelectChange}
				/>
				<div style={{ height: '52px' }} />
			</TabPanel>
		</>
	)
}
