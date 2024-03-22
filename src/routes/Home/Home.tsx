import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavbar } from '@layout/Navbar'
import { PageWrapper } from '@components'

export default function Home() {
	const { setNavbarTitle } = useNavbar()

	useEffect(() => {
		setNavbarTitle('Imperium Maledictum')
	}, [setNavbarTitle])

	return (
		<PageWrapper>
			<Link to={'/player-handbook'}>Player Handbook</Link>
			<Link to={'/character-creation'}>Character Creation</Link>
		</PageWrapper>
	)
}
