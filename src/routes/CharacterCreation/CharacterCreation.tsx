import { useEffect } from 'react'
import { useNavbar } from '@layout/Navbar'
import { PageWrapper, Typography } from '@components'

export default function CharacterCreation() {
	const { setNavbarTitle } = useNavbar()

	useEffect(() => {
		setNavbarTitle('Character Creation')
	}, [setNavbarTitle])

	return (
		<PageWrapper>
			<Typography variant="h2">Under Contruction</Typography>
			<Typography variant="body1">
				In the darkness of the far future, we forge our destiny with the hammer
				of perseverance and the anvil of hope. Stand firm, for even now, the
				foundation of greatness is being laid.
			</Typography>
		</PageWrapper>
	)
}
