import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

export default function CorruptionTable() {
	return (
		<>
			<TableContainer
				variant="outlined"
				component={Paper}
				sx={{ background: 'white' }}
			>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell align="center" colSpan={3}>
								Mutations & Malignancies
							</TableCell>
							{/* <TableCell align="center" colSpan={1}>
								<Button
									variant="contained"
									onClick={() => openSection('critical-wounds')}
								>
									Details
								</Button>
							</TableCell> */}
						</TableRow>
						<TableRow>
							<TableCell align="center">Location</TableCell>
							<TableCell align="center">Description</TableCell>
							<TableCell align="center">Delete?</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{/* {rows.map((critWound) => {
							return (
								<TableRow key={critWound.id}>
									<TableCell
										align="center"
										component="th"
										scope="row"
										sx={{
											whiteSpace: 'break-spaces',
										}}
									>
										{critWound.location}
									</TableCell>
									<TableCell align="center" component="th" scope="row">
										{critWound.description}
									</TableCell>
									<TableCell align="center" component="th" scope="row">
										<IconButton
											aria-label="delete"
											onClick={() => handleDelete(critWound.id)}
										>
											<RemoveCircleOutlineIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							)
						})} */}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
