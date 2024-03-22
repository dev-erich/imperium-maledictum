import { Span } from '@components'
import { ListItemTextProps } from '@mui/material'

export const introductionBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<>
				On your Turn you may Move or take an Action, but not both. This effect
				lasts until you heal at least 1 Wound.
			</>
		),
	},
	{
		primary: (
			<>
				You must make a{' '}
				<Span fontStyle="italic">Challenging (+0) Fortitude (Pain) Test</Span>{' '}
				or fall <Span fontStyle="italic">Unconscious</Span>. Repeat this Test
				each time you receive further Wounds. You don't regain consciousness
				until you heal at least 1 Wound.
			</>
		),
		secondary: (
			<>You don't regain consciousness until you heal at least 1 Wound.</>
		),
	},
]

export const criticalWoundsBulletPoints: ListItemTextProps[] = [
	{
		primary: <>When you accrue enough Wounds to exceed your Maximum Wounds.</>,
	},
	{
		primary: (
			<>
				When an enemy scores a <Span fontStyle="italic">Critical Hit</Span>{' '}
				against you.
			</>
		),
	},
]

export const dyingBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<>
				If your <Span fontStyle="italic">untreated</Span> Critical Wounds
				exceeds your Toughness Bonus, you succumb to your injuries and die at
				the end of the round.
			</>
		),
	},
	{
		primary: (
			<>
				If you are <Span fontStyle="italic">Unconscious</Span>, anyone within
				Immediate Range with a weapon that does not have the Ineffective Trait
				can use an Action to kill you without making a Test.
			</>
		),
	},
	{
		primary: (
			<>Certain results on the Critical Wounds Tables cause immediate death.</>
		),
	},
]

export const minorBrokenBonesBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<>
				<b>Head (Eye):</b> Disadvantage on Awareness (Sight) Tests
			</>
		),
	},
	{
		primary: (
			<>
				<b>Head (Jaw):</b> Disadvantage on Rapport Tests and Tests that rely on
				speech.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Head (Nose):</b> Disadvantage on Awareness (Smell) Tests.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Torso:</b> Disadvantage on Strength and Agility Tests, and your Speed
				is reduced one step, to a minimum of Slow.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Arms:</b> Disadvantage on all Tests using the arm, such as swinging a
				weapon, steadying a rifle, or climbing.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Legs:</b> Disadvantage on Tests that rely on mobility, such as
				Reflexes and Athletics Tests, and your Speed is reduced one step, to a
				minimum of Slow.
			</>
		),
	},
]

export const majorBrokenBonesBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<>
				<b>Head (Eye):</b> You have Disadvantage on Awareness (Sight) Tests and
				can’t see out of the injured eye.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Head (Jaw):</b> You can not speak and will need to survive on a
				liquid diet for a few weeks.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Head (Nose):</b> Your nose is completely shattered. You have no sense
				of smell.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Torso:</b> You must make a <b>Challenging (+0) Endurance (Pain)</b>{' '}
				Test when attempting any physical activity. On a failure, you are
				<Span fontStyle="italic">Incapacitated</Span>. You can’t attempt any
				other physical activity until the next day, or until you are treated
				with a <b>Challenging (+0) Medicae</b> Test. On a success, you can
				attempt the activity, but have Disadvantage on the Test.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Arms:</b> Disadvantage on all Tests using the arm, such as swinging a
				weapon, steadying a rifle, or climbing.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Legs:</b> Disadvantage on Tests that rely on mobility, such as
				Reflexes and Athletics Tests, and your Speed is reduced one step, to a
				minimum of Slow.
			</>
		),
	},
]

export const healingBrokenBonesBulletPoints: ListItemTextProps[] = [
	{
		primary: (
			<>
				<b>Head (Eye):</b> −5 to Awareness (Sight) Tests.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Head (Jaw):</b> −5 to Rapport Tests and Tests that rely on speech.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Head (Nose):</b> −5 to Awareness (Smell) Tests
			</>
		),
	},
	{
		primary: (
			<>
				<b>Torso:</b> −5 to Strength and Agility Tests.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Arms:</b> −5 on all Tests using the arm.
			</>
		),
	},
	{
		primary: (
			<>
				<b>Legs:</b> −5 on Tests that rely on mobility, such as Reflexes and
				Athletics Tests
			</>
		),
	},
]
