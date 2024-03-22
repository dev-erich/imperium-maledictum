import { ListItemTextProps } from '@mui/material'
import { BulletList, Typography, Span, ContentDivider } from '@components'

export default function Combat() {
	return (
		<>
			<Typography variant="h2" align="center">
				Combat
			</Typography>

			<Typography variant="h3">Surprise</Typography>
			<Typography>
				If you have the element of surprise, you get a special surprise round
				where only you can act.
				<br />
				When you have surprise, you gain the following benefits:
			</Typography>
			<BulletList bulletPoints={surpriseBulletPoints} showBullet />

			<ContentDivider />

			<Typography variant="h3">Actions</Typography>
			<Typography variant="body1">
				This section provides a number of Actions you can take in combat. You
				may also gain new Actions from <Span fontStyle="italic">Talents</Span>,{' '}
				<Span fontStyle="italic">gear</Span>, or{' '}
				<Span fontStyle="italic">Psychic Powers</Span>.
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Reactions</Typography>
			<Typography variant="body1">
				A Reaction is something you do on someone else's turn. The most common
				form of Reaction is attempting to{' '}
				<Span fontStyle="italic">dodge a ranged attack</Span>, but Psykers may
				also use their Reaction to{' '}
				<Span fontStyle="italic">Deny the Witch</Span>. Unless a rule such as a
				Talent or item of gear specifies otherwise, you may only take one
				Reaction until the beginning of your next turn.
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Free Actions</Typography>
			<Typography variant="body1">
				Some of the things you’ll do during combat do not require an Action.
				This includes drawing your weapon, opening a door, or moving anywhere
				within your Zone. The GM determines if what you are doing is an Action
				or a Free Action. As a rule of thumb, if something requires you to make
				a Test, it is an Action.
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Cover</Typography>
			<Typography variant="body1">
				There are three types of cover: Light Cover, Medium Cover and Heavy
				Cover. A target can only benefit from one type of cover at a time.
			</Typography>
			<BulletList bulletPoints={coverBulletPoints} showBullet />
		</>
	)
}

const surpriseBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<Typography variant="body1">
				You can use your Move and take an Action
			</Typography>
		),
	},
	{
		primary: (
			<Typography variant="body1">
				You have Advantage on Melee Tests, and the target can’t oppose your
				attack.
			</Typography>
		),
	},
	{
		primary: (
			<Typography variant="body1">
				When the surprise round ends, the party gains{' '}
				<Span fontStyle="italic">+1 Superiority</Span>.
			</Typography>
		),
	},
]

const coverBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<Typography variant="body1">
				Light Cover is usually about chest-high, and is large enough for a
				character to crouch behind to cover most of their body. Light Cover
				grants +2 Armour to <Span fontStyle="italic">all Hit Locations</Span>{' '}
				for ranged attacks.
			</Typography>
		),
	},
	{
		primary: (
			<Typography variant="body1">
				You have Advantage on Melee Tests, and the target can’t oppose your
				attack.
			</Typography>
		),
	},
	{
		primary: (
			<Typography variant="body1">
				When the surprise round ends, the party gains
				<Span fontStyle="italic">+1 Superiority</Span>.
			</Typography>
		),
	},
]
