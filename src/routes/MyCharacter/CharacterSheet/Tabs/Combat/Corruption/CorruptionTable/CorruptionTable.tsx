import { InputField, Span, IconButton } from '@common'
import { useCharacter, usePlayerHandbook, useUpdateCharacter } from '@hooks'
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
import { GiBrain, GiSuckeredTentacle } from 'react-icons/gi'
import { CorruptionKey } from 'types/character'
import { IoMdInformationCircle } from 'react-icons/io'

export default function CorruptionTable() {
	const { character } = useCharacter()
	const { updateCorruption, removeCorruption, getMutation, addCorruption } =
		useUpdateCharacter()
	const { openSection } = usePlayerHandbook()

	const handleInputFieldChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { id, name, value } = event.target
		updateCorruption(id, name, value)
	}

	const handleToggleButtonChange = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		const { id, name } = event.currentTarget
		const mutation = getMutation(id)
		if (mutation?._type === 'mutation') {
			updateCorruption(id, name, 'malignance' as CorruptionKey)
		} else {
			updateCorruption(id, name, 'mutation' as CorruptionKey)
		}
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

	const toggleButton = (id: string, type: CorruptionKey) => {
		return (
			<IconButton onClick={handleToggleButtonChange} id={id} name="type">
				{type === 'mutation' ? <GiSuckeredTentacle /> : <GiBrain />}
			</IconButton>
		)
	}

	const rows = character.corruptions.map((corruption) => {
		const { _id, _type, description } = corruption
		return {
			id: _id,
			type: toggleButton(_id, _type),
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
								<Span>Mutations & Malignancies</Span>
								<IconButton onClick={() => openSection('corruption')}>
									<IoMdInformationCircle />
								</IconButton>
							</TableCell>
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
										{corruption.description}
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
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
				<IconButtonMUI
					aria-label="delete"
					onClick={addCorruption}
					size="large"
					sx={{ color: 'black' }}
				>
					<AddCircleOutlineIcon fontSize="inherit" />
				</IconButtonMUI>
			</Box>
		</>
	)
}
