import { Typography } from '@common'

type CriticalWoundLocation = 'head' | 'arm' | 'leg' | 'body'

export type CriticalWound = {
	location: CriticalWoundLocation
	locationName: string
	roll: string
	description: string
	effects: React.ReactNode
	treatment: React.ReactNode
}

export const criticalWounds: CriticalWound[] = [
	{
		location: 'head',
		locationName: 'Head',
		roll: '1',
		description: 'Black Eye',
		effects: (
			<Typography variant="body1">
				You are struck in the eye. You have Disadvantage on Awareness (Sight)
				and Ranged Tests for 1 hour.
			</Typography>
		),
		treatment: <Typography variant="body1">None required</Typography>,
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '2',
		description: 'Rattling Blow',
		effects: (
			<Typography variant="body1">
				The blow floods your vision with flashing lights. You are Stunned until
				the end of your next turn'
			</Typography>
		),
		treatment: <Typography variant="body1">None required</Typography>,
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '3',
		description: 'Laceration',
		effects: (
			<Typography variant="body1">
				You suffer a laceration to the cheek. You are Bleeding
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Routine (+20) Medicae</b> Test to stop the Bleeding; application of
				bandages; or the laceration will close naturally after 1 hour.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '4',
		description: 'Sliced Ear',
		effects: (
			<Typography variant="body1">
				The attack slices your ear, leaving your ears ringing. You are Deafened
				until the end of your next turn, and are Bleeding
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to stop the Bleeding; application
				of bandages; or the laceration will close naturally after 1 hour.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '5',
		description: 'Dislocated Jaw',
		effects: (
			<Typography variant="body1">
				The blow strikes you in the face, dislocating your jaw. You are Stunned
				until the end of your next turn, and have Disadvantage on Rapport Tests
				and Tests that rely on speech.
				<br />
				<b>Injury:</b> Your jaw is cracked. You suffer a Broken Bone (Minor)
				Injury to your jaw.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to relocate the jaw.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '6',
		description: 'Struck Forehead',
		effects: (
			<Typography variant="body1">
				You are struck in the head, causing blood to run down your face and
				impair your vision. You are Blinded and Bleeding.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to stop the Bleeding; application
				of bandages; or the laceration will close naturally after 1 hour.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '7',
		description: 'Major Eye Wound',
		effects: (
			<Typography variant="body1">
				You are hit in the eye, causing serious damage. You are Bleeding, and
				have Disadvantage on Awareness (Sight) Tests. If you only have one eye,
				you are Blinded.
				<br />
				<b>Injury:</b> Your orbital bone is shattered. You suffer a Broken Bone
				(Major) Injury to your eye.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test to treat the eye and stop the
				Bleeding.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '8',
		description: 'Major Ear Wound',
		effects: (
			<Typography variant="body1">
				The blow strikes you in the ear or otherwise damages your ear drums. You
				are Deafened. If you suffer this result again, your hearing is
				permanently lost.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test, usually using drugs to reduce
				swelling and inflammation in the ear.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '9',
		description: 'Smashed Mouth',
		effects: (
			<Typography variant="body1">
				The blow smashes out several teeth. You are Bleeding and must make a
				<b>Challenging (+0) Fortitude (Pain)</b> Test or also fall Prone.
				<br />
				<b>Injury:</b> You lose 1d10 teeth. You suffer the Amputation (Teeth)
				Injury
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test performed by someone with the
				Chirurgeon Talent or similar expertise.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '10',
		description: 'Broken Nose',
		effects: (
			<Typography variant="body1">
				You are struck in the nose, shattering the bone and filling your eyes
				with tears. You also gain the Bleeding (Major) Condition. Additionally,
				you are Blinded until the end of your next turn, and must make a{' '}
				<b>Challenging (+0) Fortitude (Pain)</b> Test or become Stunned until
				the end of your next turn.
				<br />
				<b>Injury:</b> Your nose is shattered. You suffer a Broken Bone (Major)
				Injury to your nose.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test using a chirurgeon’s kit to stop the
				Bleeding
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '11',
		description: 'Mangled Ear',
		effects: (
			<Typography variant="body1">
				The blow tears your ear apart. You are Deafened and Bleeding (Major).
				You must make a <b>Challenging (+0) Fortitude (Pain)</b> Test or also
				gain the Stunned Condition until the end of your next turn.
				<br />
				<b>Injury:</b> Your ear is torn off. You suffer the Amputation (Ear)
				Injury
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test performed by someone with the
				Chirurgeon Talent or similar expertise.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '12',
		description: 'Concussive Blow',
		effects: (
			<Typography variant="body1">
				You take a concussive blow to the head. You are Deafened and Stunned for
				1 minute, and are Bleeding.
				<br />
				<b>Injury:</b> You are concussed, and are Fatigued for 1d10 days
				regardless of how much rest you take.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test using a chirurgeon’s kit to stop the
				Bleeding and restore hearing.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '13',
		description: 'Devastated Eye',
		effects: (
			<Typography variant="body1">
				A strike to your eye causes it to burst. You are Bleeding (Major), and
				have Disadvantage on Awareness (Sight) Tests. If you only have one eye,
				you are Blinded.
				<br />
				<b>Injury:</b> You lose your eye. You suffer the Amputation (Eye)
				Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Very Hard (−30) Medicae</b> Test performed by someone with the
				Chirurgeon Talent or similar expertise.
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '14',
		description: 'Mangled Jaw',
		effects: (
			<Typography variant="body1">
				The blow shatters your jaw and destroys your tongue, sending teeth
				flying. You are Bleeding (Major). You must make a{' '}
				<b>Challenging (+0) Fortitude (Pain)</b> Test. On a success you are
				Stunned until the end of your next turn; on a failure you are
				Incapacitated until the end of your next turn and fall Prone.
				<b>Injury:</b> You lose 1d10 teeth, and suffer the Amputation (Teeth)
				Injury. Additionally, your jaw is shattered, and you suffer the Broken
				Bone (Major) Injury to your jaw.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Very Hard (−30) Medicae</b> Test performed by someone with the
				Chirurgeon Talent or similar expertise
			</Typography>
		),
	},
	{
		location: 'head',
		locationName: 'Head',
		roll: '15+',
		description: 'Shattered Skull',
		effects: (
			<Typography variant="body1">
				Your head is caved in or erupts in a shower of bone and gore. You are
				dead.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				In the immutable shadow of the beyond, there is no return from death's
				embrace.
			</Typography>
		),
	},
]
