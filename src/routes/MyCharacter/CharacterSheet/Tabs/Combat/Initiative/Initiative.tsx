import { Typography } from '@common'
import { Theme } from '@emotion/react'
import { useCharacter } from '@hooks'
import { Card, SxProps } from '@mui/material'

const style: SxProps<Theme> = {
	background: 'white',
	height: '50px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

export default function Initiative() {
	const { character } = useCharacter()

	return (
		<Card sx={style}>
			<Typography variant="body1" textAlign="center">
				<b>Initiative:</b> {character.initiative}
			</Typography>
		</Card>
	)
}
