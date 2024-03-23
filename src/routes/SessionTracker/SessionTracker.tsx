import { PageWrapper, useNavbar } from '@layout'
import {
	useEffect,
	// useState
} from 'react'

export interface SessionTracker {}

export default function SessionTracker() {
	const { setNavbarTitle } = useNavbar()
	useEffect(() => {
		setNavbarTitle('Session Tracker')
	}, [setNavbarTitle])

	// const [sessionTracker, setSessionTracker] = useState<SessionTracker>({})

	return (
		<PageWrapper>
			<></>
		</PageWrapper>
	)
}
