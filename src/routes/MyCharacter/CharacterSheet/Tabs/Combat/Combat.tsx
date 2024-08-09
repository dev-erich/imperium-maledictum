import { Avatar, Grid } from '@mui/material'
import { FateTable } from './FateTable'
import { Corruption } from './Corruption'
// import { CriticalWoundsTable } from './CriticalWoundsTable'
import { Button, ConfirmCancelModal, Typography } from '@common'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { useCharacter, useUpdateCharacter } from '@hooks'
import { useState } from 'react'
import { Initiative } from './Initiative'
import { ArmorTable } from './ArmorTable'
import { Wounds } from './Wounds'
import { getCharacterAvatar } from '@data'

export default function Combat() {
	const { character } = useCharacter()
	const { burnFate } = useUpdateCharacter()
	const [openFateModal, setOpenFateModal] = useState(false)

	const handleBurnFate = () => {
		burnFate()
		setOpenFateModal(false)
	}

	return (
		<>
			<Grid container spacing={2}>
				<Grid
					item
					xs={6}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Avatar
						src={getCharacterAvatar(character)}
						sx={{ width: '180px', height: '180px' }}
					/>
				</Grid>
				<Grid item container xs={6} direction="column" spacing={2}>
					{/* <Grid item>
						<Typography variant="h3" sx={{ margin: 0, textAlign: 'center' }}>
							Role
						</Typography>
						<Typography variant="h4" sx={{ margin: 0, textAlign: 'center' }}>
							{character.role}
						</Typography>
					</Grid> */}
					<Grid item>
						<Initiative />
					</Grid>
					<Grid item>
						<Button
							startIcon={<LocalFireDepartmentIcon />}
							aria-label="subtract"
							size="large"
							sx={{ width: '100%' }}
							onClick={() => setOpenFateModal(true)}
							variant="contained"
							color="error"
							disabled={character.fate.total <= 0}
						>
							Fate
						</Button>
					</Grid>
					<Grid item>
						<FateTable />
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<ArmorTable />
				</Grid>
				<Grid item xs={12}>
					<Wounds />
				</Grid>
				<Grid item xs={12}>
					<Corruption />
				</Grid>
				{/* <Grid item xs={6}>
					<WoundsTable />
				</Grid> */}
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
