import { BulletList, Typography, Span, Accordion } from '@common'
import { coverBulletPoints, surpriseBulletPoints } from './data'

export default function Combat() {
	return (
		<>
			<Accordion
				data={[
					{
						summary: 'Actions',
						details: (
							<>
								<Typography variant="body1">
									This section provides a number of Actions you can take in
									combat. You may also gain new Actions from{' '}
									<Span fontStyle="italic">Talents</Span>,{' '}
									<Span fontStyle="italic">gear</Span>, or{' '}
									<Span fontStyle="italic">Psychic Powers</Span>.
								</Typography>
							</>
						),
					},
					{
						summary: 'Reactions',
						details: (
							<>
								<Typography variant="body1">
									A Reaction is something you do on someone else's turn. The
									most common form of Reaction is attempting to{' '}
									<Span fontStyle="italic">dodge a ranged attack</Span>, but
									Psykers may also use their Reaction to{' '}
									<Span fontStyle="italic">Deny the Witch</Span>. Unless a rule
									such as a Talent or item of gear specifies otherwise, you may
									only take one Reaction until the beginning of your next turn.
								</Typography>
							</>
						),
					},
					{
						summary: 'Free Actions',
						details: (
							<>
								<Typography variant="body1">
									Some of the things you’ll do during combat do not require an
									Action. This includes drawing your weapon, opening a door, or
									moving anywhere within your Zone. The GM determines if what
									you are doing is an Action or a Free Action. As a rule of
									thumb, if something requires you to make a Test, it is an
									Action.
								</Typography>
							</>
						),
					},
					{
						summary: 'Cover',
						details: (
							<>
								<Typography variant="body1">
									There are three types of cover: Light Cover, Medium Cover and
									Heavy Cover. A target can only benefit from one type of cover
									at a time.
								</Typography>
								<BulletList bulletPoints={coverBulletPoints} bullets />
							</>
						),
					},
					{
						summary: 'Surprise',
						details: (
							<>
								<Typography>
									If you have the element of surprise, you get a special
									surprise round where only you can act.
									<br />
									When you have surprise, you gain the following benefits:
								</Typography>
								<BulletList bulletPoints={surpriseBulletPoints} bullets />
							</>
						),
					},
				]}
			/>
		</>
	)
}
