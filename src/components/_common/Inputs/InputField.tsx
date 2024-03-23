import { styled } from '@mui/material'
import MUITextField, {
	TextFieldProps as MUITextFieldProps,
} from '@mui/material/TextField'

export type ButtonProps = MUITextFieldProps

const CustomTextField = styled(MUITextField)<ButtonProps>(() => ({}))

export default function InputField(props: ButtonProps) {
	return <CustomTextField {...props} fullWidth />
}
