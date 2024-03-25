import {
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import { CharacterTabProps } from '..'
import { InputField, TableCell } from '@common'
import { Character, updateCharacteristic } from 'src/components/objects'

interface CharacteristicsTabProps extends CharacterTabProps {
	setFormData: (character: Character) => void
}

export default function Characteristics(props: CharacteristicsTabProps) {
	const { formData, setFormData } = props

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = event.target
		const [key, type] = id.split('.')

		const cleanValue = value.replace(/\D/g, '').replace(/^0+/, '') || '0'
		const newValue = parseInt(cleanValue, 10)

		const updatedCharacteristics = updateCharacteristic(
			formData,
			key,
			type as 'starting' | 'advances',
			newValue
		)

		setFormData({
			...formData,
			characteristics: updatedCharacteristics,
		})
	}

	const createInputField = (
		_key: string,
		value: unknown,
		type: 'starting' | 'advances'
	) => {
		return (
			<InputField
				condensed
				inputProps={{ maxLength: 2 }}
				sx={{ width: '30px' }}
				type="text"
				id={`${_key}.${type}`}
				value={value}
				onChange={handleInputChange}
			/>
		)
	}

	const rows = formData.characteristics.map(({ _key, code, values }) => {
		const { starting, advances } = values
		return {
			characteristic: code,
			starting: createInputField(_key, starting, 'starting'),
			advances: createInputField(_key, advances, 'advances'),
			current: starting + advances, // Assuming starting and advances are numbers
		}
	})

	return (
		<TableContainer variant="outlined" component={Paper}>
			<Table size='small'>
				<TableHead>
					<TableRow>
						<TableCell align="center" variant="head">
							Char.
						</TableCell>
						<TableCell align="center" variant="head">
							Starting
						</TableCell>
						<TableCell align="center" variant="head">
							Adv.
						</TableCell>
						<TableCell align="center" variant="head">
							Current
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.characteristic}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell align="center" component="th" scope="row">
								{row.characteristic}
							</TableCell>
							<TableCell align="center" sx={{ padding: 0 }}>
								{row.starting}
							</TableCell>
							<TableCell align="center" sx={{ padding: 0 }}>
								{row.advances}
							</TableCell>
							<TableCell align="center" component="th" scope="row">
								{row.current}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
