import { InputField, Span } from '@common'
import { useCharacter, useUpdateCharacter } from '@hooks'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

export default function CorruptionTable() {
	const { character } = useCharacter()
	const { updateCorruption, removeCorruption } = useUpdateCharacter()

	// const handleDelete = (id: string) => {
	// 	// setCharacter((prev) => {
	// 	// 	const removedCritWound = prev.criticalWounds.filter(
	// 	// 		(critWound) => critWound._id !== id
	// 	// 	)
	// 	// 	return {
	// 	// 		...prev,
	// 	// 		criticalWounds: removedCritWound,
	// 	// 	}
	// 	// })
	// }

	const handleInputFieldChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { id, name, value } = event.target

		updateCorruption(id, name, 'malignance')

		// setCharacter((prev) => {
		// 	const newCriticalWounds = prev.criticalWounds.map((critWound) => {
		// 		if (critWound._id === id) {
		// 			return {
		// 				...critWound,
		// 				description: name === 'description' ? value : critWound.description,
		// 				location: name === 'location' ? value : critWound.location,
		// 			}
		// 		}
		// 		return critWound
		// 	})
		// 	return {
		// 		...prev,
		// 		criticalWounds: newCriticalWounds,
		// 	}
		// })
	}

	const createInputField = (
		_key: string,
		value: unknown,
		type: 'type' | 'description'
	) => {
		return (
			<InputField
				condensed
				autoComplete="off"
				type="text"
				name={type}
				id={`${_key}`}
				value={value}
				onChange={handleInputFieldChange}
			/>
		)
	}

	const rows = character.corruptions.map((corruption) => {
		const { _id, _type, description } = corruption
		// TODO - Create a dropdown field or something to change the corruption type
		return {
			id: _id,
			type: _type.toUpperCase().substring(0, 5),
			description: createInputField(_id, description, 'description'),
		}
	})

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
							<TableCell align="center">Type</TableCell>
							<TableCell align="center">Description</TableCell>
							<TableCell align="center">Delete?</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((corruption) => {
							return (
								<TableRow key={corruption.id}>
									<TableCell
										align="center"
										component="th"
										scope="row"
										sx={{
											whiteSpace: 'break-spaces',
										}}
									>
										{corruption.type}
									</TableCell>
									<TableCell align="center" component="th" scope="row">
										<Span>{corruption.description}</Span>
									</TableCell>
									<TableCell align="center" component="th" scope="row">
										<IconButton
											aria-label="delete"
											onClick={() => removeCorruption(corruption.id)}
										>
											<RemoveCircleOutlineIcon />
										</IconButton>
									</TableCell>
								</TableRow>
							)
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}
