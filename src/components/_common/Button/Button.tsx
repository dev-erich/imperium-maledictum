import { styled } from '@mui/material'
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button'

export interface Button extends MUIButtonProps {}

const CustomButton = styled(MUIButton)<Button>(() => ({
	width: '100%',
}))

export default function Button(props: MUIButtonProps) {
	return <CustomButton {...props} />
}
