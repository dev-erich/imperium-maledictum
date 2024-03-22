import { styled } from '@mui/material'
import MUITypography, {
	TypographyProps as MUITypographyProps,
} from '@mui/material/Typography'

interface TypographyProps extends MUITypographyProps {}

const CustomTypography = styled(MUITypography)(({ theme }) => ({
	margin: theme.spacing(0),
}))

export default function Typography(props: TypographyProps) {
	return <CustomTypography {...props}></CustomTypography>
}
