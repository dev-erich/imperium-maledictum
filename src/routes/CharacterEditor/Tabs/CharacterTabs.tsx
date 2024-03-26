import { TabPanel } from '@common/TabPanel'
import { Characteristics, Details, Skills, Specialisations, Talents } from '.'

interface CharacterTabsProps {
	value: number
}

export default function CharacterTabs(props: CharacterTabsProps) {
	const { value } = props

	return (
		<>
			<TabPanel value={value} index={0} type="Character">
				<Details />
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={1} type="Character">
				<Characteristics />
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={2} type="Character">
				<Skills />
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={3} type="Character">
				<Specialisations />
				<div style={{ height: '52px' }} />
			</TabPanel>
			<TabPanel value={value} index={4} type="Character">
				<Talents />
				<div style={{ height: '52px' }} />
			</TabPanel>
		</>
	)
}
