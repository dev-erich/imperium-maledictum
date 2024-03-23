import { Divider, styled } from '@mui/material'

const CustomDivider = styled(Divider)(() => ({
	padding: '5px',
	margin: '10px',
}))

export default function ContentDivider() {
	return <CustomDivider />
}
