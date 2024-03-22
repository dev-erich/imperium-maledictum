import { BulletList, ContentDivider, Span, Typography } from '@components'
import { ListItemTextProps } from '@mui/material'

export default function DamageAndWounds() {
	return (
		<>
			<Typography variant="h2" align="center">
				Wounds and Damage
			</Typography>

			<Typography variant="h3">Wounds</Typography>
			<Typography variant="body1">
				Wounds are gained by suffering Damage. Each time you suffer a point of
				Damage, you gain 1 Wound. If your Wounds equal your Maximum Wounds, your
				injuries get the better of you. You suffer the following effects:
			</Typography>
			<BulletList bulletPoints={introductionBulletPoints} showBullet />
			<Typography variant="body1">
				You never accumulate Wounds greater than your Maximum Wounds. Beware, as
				once you reach this threshold, every attack that would Wound you causes
				a Critical Wound!
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Critical Wounds</Typography>
			<Typography variant="body1">
				There are two ways to suffer Critical Wounds: when you accrue enough
				Wounds to exceed your Maximum Wounds, or when an enemy scores a{' '}
				<Span fontStyle="italic">Critical Hit</Span> against you.
			</Typography>
		</>
	)
}

const introductionBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<Typography variant="body1">
				On your Turn you may Move or take an Action, but not both. This effect
				lasts until you heal at least 1 Wound.
			</Typography>
		),
	},
	{
		primary: (
			<Typography variant="body1">
				You must make a{' '}
				<Span fontStyle="italic">Challenging (+0) Fortitude (Pain) Test</Span>{' '}
				or fall <Span fontStyle="italic">Unconscious</Span> (page 357 of the
				Players Handbook). Repeat this Test each time you receive further
				Wounds. You don't regain consciousness until you heal at least 1 Wound.
			</Typography>
		),
	},
]
