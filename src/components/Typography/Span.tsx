import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// Extend TypographyProps to ensure fontStyle can be recognized explicitly
interface CustomTypographyProps extends TypographyProps {
	fontStyle?: 'normal' | 'italic'
}

const CustomTypography = styled(Typography)<CustomTypographyProps>(
	({ theme, fontStyle }) => ({
		margin: 0,
		...(fontStyle === 'italic' && {
			color: theme.palette.secondary.main,
		}),
	})
)

// Adjust SpanProps to include the new fontStyle property
interface SpanProps extends CustomTypographyProps {}

export default function Span(props: SpanProps) {
	return <CustomTypography component="span" {...props} />
}
