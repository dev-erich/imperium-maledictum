import { Alert } from '.'
import LockIcon from '@mui/icons-material/Lock'
import { Typography } from '@common'

interface Requirements {
	text: string
}

export default function Requirements(props: Requirements) {
	const { text } = props

	return (
		<Alert
			icon={<LockIcon fontSize="large" />}
			severity="info"
			sx={{ marginBottom: '15px' }}
		>
			<Typography>
				<b>Requirements: </b> {text}
			</Typography>
		</Alert>
	)
}
