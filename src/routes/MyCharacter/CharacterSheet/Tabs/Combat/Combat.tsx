import { Grid } from '@mui/material'
import { FateTable } from './FateTable'
import { WoundsTable } from './WoundsTable'
import { CriticalWoundsTable } from './CriticalWoundsTable'
import { Button, ConfirmCancelModal, Typography } from '@common'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { useCharacter } from '@hooks'
import { useState } from 'react'

export default function Combat() {
	const { character, setCharacter } = useCharacter()
	const [openFateModal, setOpenFateModal] = useState(false)

	const handleBurnFate = () => {
		setCharacter((prev) => {
			return {
				...prev,
				fate: {
					current:
						prev.fate.current >= prev.fate.total - 1
							? (prev.fate.current -= 1)
							: prev.fate.current,
					total: (prev.fate.total -= 1),
				},
			}
		})
		setOpenFateModal(false)
	}

	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Button
						startIcon={<LocalFireDepartmentIcon />}
						aria-label="subtract"
						size="large"
						sx={{ width: '100%' }}
						onClick={() => setOpenFateModal(true)}
						variant="contained"
						disabled={character.fate.total <= 0}
					>
						Fate
					</Button>
				</Grid>
				<Grid item xs={6} />
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
			<ConfirmCancelModal
				title="Fate’s Final Forge"
				description={
					<Typography variant="body1" component="h2" textAlign="center">
						In the dark imperium where Fate weaves the thin line between
						salvation and damnation, to burn one’s Fate is to make an
						irreversible choice.
						<br />
						<br />
						Confirm if you are ready to alter the unyielding tapestry of
						destiny.
						<br />
						<br />
						<b style={{ color: '#b93131' }}>THIS ACTION CANNOT BE UNDONE.</b>
					</Typography>
				}
				open={openFateModal}
				handleCancel={() => setOpenFateModal(false)}
				handleConfirm={handleBurnFate}
			/>
		</>
	)
}
