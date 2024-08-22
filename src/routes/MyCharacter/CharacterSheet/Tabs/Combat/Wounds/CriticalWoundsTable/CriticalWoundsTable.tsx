import { InputField, Span, IconButton } from '@common'
import { useCharacter, usePlayerHandbook } from '@hooks'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import {
	Box,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	IconButton as IconButtonMUI,
} from '@mui/material'
import { uid } from '@utils'
import { IoMdInformationCircle } from 'react-icons/io'

export default function CriticalWoundsTable() {
	const { character, setCharacter } = useCharacter()
	const { openSection } = usePlayerHandbook()

	const handleDelete = (id: string) => {
		setCharacter((prev) => {
			const removedCritWound = prev.criticalWounds.filter(
				(critWound) => critWound._id !== id
			)
			return {
				...prev,
				criticalWounds: removedCritWound,
			}
		})
	}

	const handleInputFieldChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value, id } = event.target

		setCharacter((prev) => {
			const newCriticalWounds = prev.criticalWounds.map((critWound) => {
				if (critWound._id === id) {
					return {
						...critWound,
						description: name === 'description' ? value : critWound.description,
						location: name === 'location' ? value : critWound.location,
					}
				}
				return critWound
			})
			return {
				...prev,
				criticalWounds: newCriticalWounds,
			}
		})
	}

	const createInputField = (
		_key: string,
		value: unknown,
		type: 'location' | 'description'
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

	const rows = character.criticalWounds.map((critWound) => {
		const { _id, location, description } = critWound

		return {
			id: _id,
			location: createInputField(_id, location, 'location'),
			description: createInputField(_id, description, 'description'),
		}
	})

	const handleAdd = () => {
		const newCriticalWounds = character.criticalWounds
		newCriticalWounds.push({
			_id: uid(),
			location: '',
			description: '',
		})

		setCharacter((prev) => {
			return {
				...prev,
				criticalWounds: newCriticalWounds,
			}
		})
	}

	return (
		<>
			{/* <Card sx={{ background: 'white' }}> */}
			<TableContainer
				variant="outlined"
				component={Paper}
				sx={{ background: 'white' }}
			>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell align="center" colSpan={3}>
								<Span>Critical Wounds</Span>
								<IconButton onClick={() => openSection('critical-wounds')}>
									<IoMdInformationCircle />
								</IconButton>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell align="center">Location</TableCell>
							<TableCell align="center">Description</TableCell>
							<TableCell align="center">Delete?</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((critWound) => {
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
						})}
					</TableBody>
				</Table>
			</TableContainer>
			{/* </Card> */}
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<IconButtonMUI
					aria-label="delete"
					onClick={handleAdd}
					size="large"
					sx={{ color: 'black' }}
				>
					<AddCircleOutlineIcon fontSize="inherit" />
				</IconButtonMUI>
			</Box>
		</>
	)
}
