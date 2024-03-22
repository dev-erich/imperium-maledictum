import { PageWrapper } from '@components'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<PageWrapper>
			<Typography variant="h1">Home</Typography>
			<Link to={'/player-handbook'}>Player Handbook</Link>
			<Link to={'/character-creation'}>Character Creation</Link>
		</PageWrapper>
	)
}
