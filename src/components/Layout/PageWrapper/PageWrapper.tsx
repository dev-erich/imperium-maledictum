import { Container, styled } from '@mui/material'

interface PageWrapperProps {
	className?: string
	children?: React.ReactNode
}

const CustomContainer = styled(Container)(() => ({
	paddingTop: '16px',
	paddingBottom: '16px',
	height: 'calc(100svh - var(--navbarHeight))',
}))

export default function PageWrapper(props: PageWrapperProps) {
	return <CustomContainer maxWidth="lg" {...props} />
}
