import { Span } from '@common'
import { ListItemTextProps } from '@mui/material'

export const surpriseBulletPoints: ListItemTextProps[] = [
	{
		primary: <>You can use your Move and take an Action</>,
	},
	{
		primary: (
			<>
				You have Advantage on Melee Tests, and the target can’t oppose your
				attack.
			</>
		),
	},
	{
		primary: (
			<>
				When the surprise round ends, the party gains{' '}
				<Span fontStyle="italic">+1 Superiority</Span>.
			</>
		),
	},
]

export const coverBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<>
				Light Cover grants +2 Armour to{' '}
				<Span fontStyle="italic">all Hit Locations</Span> for ranged attacks.
			</>
		),
	},
	{
		primary: (
			<>
				Medium Cover grants +4 Armour to{' '}
				<Span fontStyle="italic">all Hit Locations</Span> for ranged attacks.
			</>
		),
	},
	{
		primary: (
			<>
				Heavy Cover grants +6 Armour to{' '}
				<Span fontStyle="italic">all Hit Locations</Span> for ranged attacks.
			</>
		),
	},
]
