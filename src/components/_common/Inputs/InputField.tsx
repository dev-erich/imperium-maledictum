import { styled } from '@mui/material/styles'
import MUITextField from '@mui/material/TextField'
import React from 'react'

export type ButtonProps = {
	condensed?: boolean
} & React.ComponentProps<typeof MUITextField>

const CustomTextField = styled(MUITextField, {
	shouldForwardProp: (prop) => prop !== 'condensed',
})<ButtonProps>(({ condensed }) => ({
	...(condensed
		? {
				'& .MuiInputBase-input': {
					padding: '4px',
					fontSize: '14px',
					textAlign: 'center',
				},
		  }
		: {}),
}))

export default function InputField(props: ButtonProps) {
	return <CustomTextField {...props} fullWidth />
}
