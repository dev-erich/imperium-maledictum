import { styled } from '@mui/material'
import MUITypography, {
	TypographyProps as MUITypographyProps,
} from '@mui/material/Typography'

interface TypographyProps extends MUITypographyProps {
	indented?: number
}

const CustomTypography = styled(MUITypography)<TypographyProps>(
	({ indented }) => ({
		...(indented && {
			marginLeft: `${(indented + 1) * 12}px`,
		}),
	})
)

export default function Typography(props: TypographyProps) {
	return <CustomTypography {...props}></CustomTypography>
}
