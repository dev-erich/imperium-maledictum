import { TabPanel } from '@common/TabPanel'
import { Combat } from '.'
import { Grid } from '@mui/material'

interface CharacterSheetTabsProps {
	value: number
}

export default function CharacterSheetTabs(props: CharacterSheetTabsProps) {
	const { value } = props

	return (
		<>
			<TabPanel value={value} index={0} type="Character">
				<Grid
					container
					sx={{ marginBottom: '10px', paddingTop: '6px' }}
					spacing={2}
				></Grid>
				<Combat />
			</TabPanel>
		</>
	)
}
