import { Typography } from '@common'
import { useCharacter, useNavbar } from '@hooks'
import { PageWrapper } from '@layout'
import {
	useEffect,
	// useState
} from 'react'

export interface SessionTracker {}

export default function SessionTracker() {
	const { setNavbarTitle } = useNavbar()
	const { character } = useCharacter()

	useEffect(() => {
		setNavbarTitle('Session Tracker')
	}, [setNavbarTitle])

	if (character)
		return (
			<PageWrapper>
				<Typography>{character.name}</Typography>
			</PageWrapper>
		)
	else
		return (
			<PageWrapper>
				<Typography>Oops! Missig character details!</Typography>
			</PageWrapper>
		)
}
