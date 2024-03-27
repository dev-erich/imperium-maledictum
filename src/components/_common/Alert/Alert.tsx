import { styled } from '@mui/material'
import MUIAlert, { AlertProps } from '@mui/material/Alert'

const CustomAlert = styled(MUIAlert)(({ severity }) => ({
	'& .MuiAlert-icon ': {
		alignItems: 'center',
		marginRight: '4px',
	},
	...(severity === 'info' && {
		background: '#b8dfff',
	}),
	// ...(severity === 'success' && {
	// 	background: '#fff',
	// }),
}))

export default function Alert(props: AlertProps) {
	return <CustomAlert {...props} />
}
