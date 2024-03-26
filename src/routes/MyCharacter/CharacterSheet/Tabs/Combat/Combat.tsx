import { Grid } from '@mui/material'
import { FateTable } from './FateTable'
import { WoundsTable } from './WoundsTable'
import { CriticalWoundsTable } from './CriticalWoundsTable'

export default function Combat() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={6}>
				<FateTable />
			</Grid>
			<Grid item xs={6}>
				<WoundsTable />
			</Grid>
			<Grid item xs={12}>
				<CriticalWoundsTable />
			</Grid>
		</Grid>
	)
}
