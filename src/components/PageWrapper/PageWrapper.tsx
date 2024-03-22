import { Container } from '@mui/material'

interface PageWrapperProps {
	className?: string
	children: JSX.Element[]
}

export default function PageWrapper(props: PageWrapperProps) {
	return <Container maxWidth="lg" {...props} />
}
