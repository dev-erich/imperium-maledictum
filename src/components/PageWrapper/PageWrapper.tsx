import { Container } from '@mui/material'

interface PageWrapperProps {
	className?: string
	children?: React.ReactNode
}

export default function PageWrapper(props: PageWrapperProps) {
	return (
		<Container
			maxWidth="lg"
			{...props}
			sx={{ paddingTop: '16px', paddingBottom: '16px' }}
		/>
	)
}
