import { useEffect } from 'react'
import { useNavbar } from '@layout/Navbar'
import { PageWrapper } from '@components'

export default function CharacterCreation() {
	const { setNavbarTitle } = useNavbar()

	useEffect(() => {
		setNavbarTitle('Character Creation')
	}, [setNavbarTitle])

	return (
		<PageWrapper>
		</PageWrapper>
	)
}
