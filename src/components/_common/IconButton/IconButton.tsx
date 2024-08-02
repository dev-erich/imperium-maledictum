import { styled } from '@mui/material'
import MUIButton, {
	IconButtonProps as MUIButtonProps,
} from '@mui/material/IconButton'

export interface IconButton extends MUIButtonProps {}

const CustomIconButton = styled(MUIButton)<IconButton>(() => ({
	minWidth: '30px',
	minHeight: '30px',
	fontSize: '20px',
	color: 'black',
}))

export default function Button(props: MUIButtonProps) {
	return <CustomIconButton {...props} />
}
