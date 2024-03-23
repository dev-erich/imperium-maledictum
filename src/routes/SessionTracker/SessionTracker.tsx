import { PageWrapper, Typography } from '@components'
import { useNavbar } from '@layout/Navbar'
import { useEffect, useState } from 'react'

export interface SessionTracker {}

export default function SessionTracker() {
	const { setNavbarTitle } = useNavbar()
	useEffect(() => {
		setNavbarTitle('Session Tracker')
	}, [setNavbarTitle])
	const [sessionTracker, setSessionTracker] = useState<SessionTracker>({})

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
