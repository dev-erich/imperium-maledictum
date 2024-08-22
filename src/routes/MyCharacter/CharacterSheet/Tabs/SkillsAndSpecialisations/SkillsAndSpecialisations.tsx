import { TableCell } from '@common'
import { getCharacteristic, getSkill } from '@data'
import { useCharacter } from '@hooks'
import {
	Grid,
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'

export default function SkillsAndSpecialisations() {
	const { character } = useCharacter()

	const { skills, characteristics, specialisations } = character

	return (
		<Grid container spacing={1}>
			<Grid item xs={6}>
				<TableContainer
					variant="outlined"
					component={Paper}
					sx={{ background: 'white' }}
				>
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell>Skill</TableCell>
								<TableCell align="center">Total</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{skills.map((skill) => {
								const { _key, name, advances, characteristicKey } = skill
								const refCharacteristic = getCharacteristic(
									character,
									characteristicKey
								)
								return (
									<TableRow key={_key}>
										<TableCell component="th" scope="row">
											{name}
										</TableCell>
										<TableCell align="center" component="th" scope="row">
											{advances * 5 +
												refCharacteristic.values.advances +
												refCharacteristic.values.starting}
										</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
			<Grid
				item
				container
				xs={6}
				sx={{ alignContent: 'flex-start' }}
				spacing={1}
			>
				<Grid item xs={12}>
					<TableContainer
						variant="outlined"
						component={Paper}
						sx={{ background: 'white' }}
					>
						<Table size="small">
							<TableHead>
								<TableRow>
									<TableCell>Characteristic</TableCell>
									<TableCell align="center">Total</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{characteristics.map((char) => {
									const { _key, name, values } = char
									return (
										<TableRow key={_key}>
											<TableCell component="th" scope="row">
												{name}
											</TableCell>
											<TableCell align="center" component="th" scope="row">
												{values.advances + values.starting}
											</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Grid>
			{specialisations.length > 0 && (
				<Grid item xs={12}>
					<TableContainer
						variant="outlined"
						component={Paper}
						sx={{ background: 'white' }}
					>
						<Table size="small">
							<TableHead>
								<TableRow>
									<TableCell>Specialisations</TableCell>
									<TableCell>Skill</TableCell>
									<TableCell align="center">Total</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{specialisations.map((skill) => {
									const { _key, name, advances, skillkey } = skill
									const refSkill = getSkill(character, skillkey)
									const refCharacteristic = getCharacteristic(
										character,
										refSkill.characteristicKey
									)

									return (
										<TableRow key={_key}>
											<TableCell component="th" scope="row">
												{name}
											</TableCell>
											<TableCell component="th" scope="row">
												{refSkill.name}
											</TableCell>
											<TableCell align="center" component="th" scope="row">
												{advances * 5 +
													refSkill.advances * 5 +
													refCharacteristic.values.advances +
													refCharacteristic.values.starting}
											</TableCell>
										</TableRow>
									)
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			)}
		</Grid>
	)
}
