import { TabPanel } from '@common/TabPanel'
import { Combat } from '.'

interface CharacterSheetTabsProps {
	value: number
}

export default function CharacterSheetTabs(props: CharacterSheetTabsProps) {
	const { value } = props

	return (
		<>
			<TabPanel value={value} index={0} type="Character">
				<Combat />
			</TabPanel>
		</>
	)
}
