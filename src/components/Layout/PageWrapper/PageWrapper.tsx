import { Container, ContainerProps, styled } from '@mui/material'

interface PageWrapperProps extends ContainerProps {}

const CustomContainer = styled(Container)(() => ({
	paddingTop: '16px',
	paddingBottom: '16px',
	height: 'calc(100svh - var(--navbarHeight))',
	display: 'flex',
	flexDirection: 'column',
}))

export default function PageWrapper(props: PageWrapperProps) {
	return <CustomContainer maxWidth="lg" {...props} />
}
