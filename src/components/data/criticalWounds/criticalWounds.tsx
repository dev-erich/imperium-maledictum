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

export const headCriticalWounds: CriticalWound[] = [
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

export const armCriticalWounds: CriticalWound[] = [
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '1',
		description: 'Jolted Wrist',
		effects: (
			<Typography variant="body1">
				You are struck in the wrist, jarring your hand. Drop any item held in
				the hand
			</Typography>
		),
		treatment: <Typography variant="body1">None Required</Typography>,
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '2',
		description: 'Dead Arm',
		effects: (
			<Typography variant="body1">
				You are struck by a rattling blow in your arm, causing it to temporarily
				go numb. You have Disadvantage on all Tests using the arm for 1 minute.
			</Typography>
		),
		treatment: <Typography variant="body1">None Required</Typography>,
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '3',
		description: 'Laceration',
		effects: (
			<Typography variant="body1">
				Your hand is sliced open, sending jolts of pain through your arm. You
				are Bleeding and drop any item held in the hand.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to stop the Bleeding; application
				of bandages; or the laceration will close naturally after 1 hour
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '4',
		description: 'Sliced Hand',
		effects: (
			<Typography variant="body1">
				Your hand is sliced open, sending jolts of pain through your arm. You
				are Bleeding and drop any item held in the hand.
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
		location: 'arm',
		locationName: 'Arm',
		roll: '5',
		description: 'Dislocated Shoulder',
		effects: (
			<Typography variant="body1">
				The strike dislocates your shoulder from the socket. The arm is useless
				until popped back into place. At the start of each turn while you have a
				dislocated shoulder you must make a{' '}
				<b>Challenging (+0) Fortitude (Pain)</b>
				Test. On a failure, you are Stunned until the start of your next turn.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to pop the shoulder back into
				place
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '6',
		description: 'Severed Finger',
		effects: (
			<Typography variant="body1">
				The attack tears off one of your fingers. You are Bleeding (Major).
				<br />
				<b>Injury:</b> One of your fingers is torn off. You suffer the
				Amputation (Finger) Injury
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test performed by someone with the
				Chirurgeon Talent
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '7',
		description: 'Clean Break',
		effects: (
			<Typography variant="body1">
				The attack fractures a bone in your arm. Your arm is completely useless,
				and you drop any item held. You must make a{' '}
				<b>Challenging (+0) Fortitude (Pain)</b> Test or be Stunned for one
				minute.
				<br />
				<b>Injury:</b> Your arm is broken. You suffer the Broken Bone (Minor)
				Injury to your arm.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				<b>A Difficult (−10) Medicae</b> Test to treat shock. This Test does not
				treat the break.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '8',
		description: 'Deep Cut',
		effects: (
			<Typography variant="body1">
				You suffer a deep gash on your arm, reducing your effectiveness. You are
				Bleeding (Major) and have Disadvantage on all Tests using the arm.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test using a chirurgeon’s kit to stop
				the Bleeding.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '9',
		description: 'Mangled Hand',
		effects: (
			<Typography variant="body1">
				The blow devesates your hand, breaking bones and potentially severing
				fingers. You are Bleeding (Major) and immediately drop any item held.
				<br />
				<b>Injury:</b> Your hand is crushed. You suffer the Broken Bone (Major)
				Injury to your hand. Additionally, you lose 1d10 − 5 fingers. If your
				result is 0, you manage to keep all of your digits. Otherwise, you
				suffer the Amputation (Fingers) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test performed by someone with the
				Chirurgeon Talent.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '10',
		description: 'Shattered Elbow',
		effects: (
			<Typography variant="body1">
				The attack shatters the bones in your elbow. Your arm is completely
				useless, and you immediately drop any item held in the hand.
				Additionally, you must make a <b>Difficult (−10) Fortitude (Pain)</b>{' '}
				Test or be Stunned for one minute.
				<br />
				<b>Injury:</b> Your arm is broken. You suffer the Broken Bone (Major)
				Injury to your arm.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test to treat shock. This Test does not
				count as treating the broken bone.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '11-12',
		description: 'Cleft Hand',
		effects: (
			<Typography variant="body1">
				Your hand is splayed apart, causing a major injury and severing fingers.
				You are Bleeding (Major) and immediately drop any item held in the hand.
				Additionally, you must make a<b>Difficult (−10) Fortitude (Pain)</b>{' '}
				Test or be Stunned for one minute.
				<br />
				<b>Injury:</b> You lose a finger. You suffer the Amputation (Finger)
				Injury. For each minute the Critical Wound is untreated, you lose an
				additional finger. If you lose all fingers on the hand, you instead gain
				the Amputation (Hand) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20)</b> Medicae Test performed by someone with the
				Chirurgeon Talent or similar expertise.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '13-14',
		description: 'Sliced Artery',
		effects: (
			<Typography variant="body1">
				You suffer a serious wound to a major artery. You are Bleeding (Major),
				Fatigued from blood loss, your arm is completely useless, and you
				immediately drop any item held in the hand.
				<br />
				<b>Injury:</b> Due to blood loss, you are Fatigued for 1d10 days
				regardless of how much rest you take.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test using a chirurgeon’s kit to stop the
				Bleeding.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '15-16',
		description: 'Severed Hand',
		effects: (
			<Typography variant="body1">
				Your hand is taken clean off. You are Bleeding (Major) and Stunned for 1
				hour.
				<br />
				<b>Injury:</b> You lose a hand. You suffer the Amputation (Hand) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Very Hard (−30) Medicae</b>
				Test performed by someone with the Chirurgeon Talent or similar
				expertise.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '17-19',
		description: 'Ruined Arm',
		effects: (
			<Typography variant="body1">
				Your arm is mangled and torn apart, with only the barest piece of flesh
				attaching it to your body. Your arm is completely useless, and you
				immediately drop any item held in the hand. You are Bleeding (Major) and
				Stunned for 1 hour. If you suffer any further Damage to the arm, you
				automatically suffer the Brutal Dismemberment Critical Wound and die.
				<br />
				<b>Injury:</b> Your arm is hanging on by a thread and must be amputated.
				You suffer the Amputation (Arm) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Very Hard (−30) Medicae</b>
				Test performed by someone with the Chirurgeon Talent or similar
				expertise to fully remove the arm.
			</Typography>
		),
	},
	{
		location: 'arm',
		locationName: 'Arm',
		roll: '20+',
		description: 'Brutal Dismemberment',
		effects: (
			<Typography variant="body1">
				Your arm is completely destroyed and torn from your body, causing shock
				and catastrophic blood loss. You are dead.
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

export const legCriticalWounds: CriticalWound[] = [
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '1',
		description: 'Twisted Ankle',
		effects: (
			<Typography variant="body1">
				You twist your ankle, causing you to stumble. You fall Prone.
			</Typography>
		),
		treatment: <Typography variant="body1">None required.</Typography>,
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '2',
		description: 'Dead Leg',
		effects: (
			<Typography variant="body1">
				You are struck by a rattling blow in your leg, causing it to temporarily
				go numb. Your Speed is reduced one step for 1 minute.
			</Typography>
		),
		treatment: <Typography variant="body1">None required.</Typography>,
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '3',
		description: 'Laceration',
		effects: (
			<Typography variant="body1">
				You suffer a laceration to the leg. You are Bleeding.
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
		location: 'leg',
		locationName: 'Leg',
		roll: '4',
		description: 'Sliced Calf',
		effects: (
			<Typography variant="body1">
				Your calf is sliced open, sending jolts of pain through your leg. You
				are Bleeding and fall Prone.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to stop the Bleeding; apply
				bandages; or wait 1 hour.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '5',
		description: 'Dislocated Knee',
		effects: (
			<Typography variant="body1">
				The strike dislocates your knee. You have Disadvantage on Tests that
				rely on mobility, and your Move is reduced one step. At the start of
				each turn while you have a dislocated knee you must make a{' '}
				<b>Challenging (+0) Fortitude (Pain)</b> Test. On a failure, you are
				Stunned until the start of your next turn.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to pop the knee back into place.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '6',
		description: 'Severed Toe',
		effects: (
			<Typography variant="body1">
				The attack tears off one of your toes. You are Bleeding (Major).
				<br />
				<b>Injury:</b> One of your toes is torn off. You suffer the Amputation
				(Toe) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test performed by someone with the
				Chirurgeon Talent.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '7',
		description: 'Clean Break',
		effects: (
			<Typography variant="body1">
				The attack fractures a bone in your leg. Your leg is completely useless,
				you immediately fall Prone, you have Disadvantage on Tests that rely on
				mobility, and your Move is reduced one step. Additionally, you must make
				a <b>Challenging (+0) Fortitude (Pain)</b> Test or be Stunned for one
				minute.
				<br />
				<b>Injury:</b> Your leg is broken. You suffer the Broken Bone (Minor)
				Injury to your leg.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test to treat shock. This Test does not
				count as treating the broken bone.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '8',
		description: 'Deep Cut',
		effects: (
			<Typography variant="body1">
				You suffer a deep gash on your leg, reducing your effectiveness. You are
				Bleeding (Major) and have Disadvantage on all Tests using the leg, such
				as jumping or climbing.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test using a chirurgeon’s kit to stop
				the Bleeding.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '9',
		description: 'Mangled Foot',
		effects: (
			<Typography variant="body1">
				The blow devastates your foot, breaking bones and potentially severing
				toes. You are Bleeding (Major), immediately fall Prone, and your Move is
				reduced one step.
				<br />
				<b>Injury:</b> Your foot is crushed. You suffer the Broken Bone (Major)
				Injury to your foot. Additionally, you lose 1d10 − 5 toes. If your
				result is 0, you manage to keep all of your digits. Otherwise, you
				suffer the Amputation (Toes) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test performed by someone with the
				Chirurgeon Talent.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '10',
		description: 'Shattered Knee',
		effects: (
			<Typography variant="body1">
				The attack shatters the bones in your knee. Your leg is completely
				useless, you immediately fall Prone, your Move is reduced one step, you
				have Disadvantage on Tests that rely on mobility. You must make a{' '}
				<b>Difficult (−10) Fortitude (Pain)</b> Test or be Stunned for one
				minute.
				<br />
				<b>Injury:</b> Your leg is broken. You suffer the Broken Bone (Major)
				Injury to your leg.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test to treat shock. This Test does not
				count as treating the broken bone.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '11-12',
		description: 'Cleft Foot',
		effects: (
			<Typography variant="body1">
				Your foot is splayed apart, causing a major injury and severing toes.
				You are Bleeding (Major) and immediately fall Prone. Additionally, you
				must make a <b>Difficult (−10) Fortitude (Pain)</b> Test or be Stunned
				for one minute.
				<br />
				<b>Injury:</b> You lose a toe. You suffer the Amputation (Toe) Injury.
				For each minute the Critical Wound is untreated, you lose an additional
				toe. If you lose all toes on the foot, you instead gain the Amputation
				(Foot) Injury.
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
		location: 'leg',
		locationName: 'Leg',
		roll: '13-14',
		description: 'Sliced Artery',
		effects: (
			<Typography variant="body1">
				You suffer a serious wound to a major artery. You are Bleeding (Major),
				Fatigued from blood loss, have Disadvantage on Tests that rely on
				mobility, your Move is reduced one step, and you fall Prone.
				<br />
				<b>Injury:</b> Due to blood loss, you are Fatigued for 1d10 days
				regardless of how much rest you take.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test using a chirurgeon’s kit to stop the
				Bleeding.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '15-16',
		description: 'Severed Foot',
		effects: (
			<Typography variant="body1">
				Your foot is taken clean off. You are Bleeding (Major) and Prone.
				Additionally, you are Stunned for 1 hour.
				<b>Injury:</b> You lose a foot. You suffer the Amputation (Foot) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Very Hard (−30) Medicae</b> Test performed by someone with the
				Chirurgeon Talent.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '17-19',
		description: 'Ruined Leg',
		effects: (
			<Typography variant="body1">
				Your leg is mangled and torn apart, with only the barest piece of flesh
				attaching it to your body. Your leg is completely useless, you fall
				Prone, your Move is reduced one step, and have Disadvantage on Tests
				that rely on mobility. You are Bleeding (Major) and Stunned for 1 hour.
				If you suffer any further Damage to the leg, you automatically suffer
				the Brutal Dismemberment Critical Wound and die.
				<br />
				<b>Injury:</b> Your leg is hanging on by a thread and must be amputated.
				You suffer the Amputation (Leg) Injury.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Very Hard (−30) Medicae</b> Test performed by someone with the
				Chirurgeon Talent or similar expertise to fully remove the leg.
			</Typography>
		),
	},
	{
		location: 'leg',
		locationName: 'Leg',
		roll: '20+',
		description: 'Brutal Dismemberment',
		effects: (
			<Typography variant="body1">
				Your leg is completely destroyed and torn from your body, causing shock
				and catastrophic blood loss. You are dead.
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

export const bodyCriticalWounds: CriticalWound[] = [
	{
		location: 'body',
		locationName: 'Body',
		roll: '1',
		description: 'Winded',
		effects: (
			<Typography variant="body1">
				The blow knocks the wind out of you. You are Stunned until the end of
				your next turn.
			</Typography>
		),
		treatment: <Typography variant="body1">None required.</Typography>,
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '2',
		description: 'Low Blow',
		effects: (
			<Typography variant="body1">
				You are struck in a sensitive area. You must make a{' '}
				<b>Challenging (+0) Fortitude (Pain)</b> Test or fall Prone.
			</Typography>
		),
		treatment: <Typography variant="body1">None required.</Typography>,
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '3',
		description: 'Laceration',
		effects: (
			<Typography variant="body1">
				You suffer a laceration to the body. You are Bleeding.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				An <b>Routine (+20) Medicae</b> Test to stop the bleeding; application
				of bandages; or the laceration will close naturally after 1 hour.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '4',
		description: 'Gut Shot',
		effects: (
			<Typography variant="body1">
				You are hit hard in the stomach. You are Bleeding and knocked Prone.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test to stop the bleeding; application
				of bandages; or the laceration will close naturally after 1 hour.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '5',
		description: 'Cracked Rib',
		effects: (
			<Typography variant="body1">
				The attack cracks one of your ribs. You have Disadvantage on Strength
				and Agility Tests, and your Move is reduced one step.
				<br />
				<b>Injury:</b> You have a cracked rib. You suffer the Broken Bone
				(Minor) Injury to your torso.
			</Typography>
		),
		treatment: <Typography variant="body1">None required.</Typography>,
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '6',
		description: 'Hammering Blow',
		effects: (
			<Typography variant="body1">
				You are thrown back by the force of the blow. You are Stunned for 1
				minute and are Bleeding.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Challenging (+0) Medicae</b> Test performed by someone with the
				Chirurgeon Talent.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '7',
		description: 'Broken Collarbone',
		effects: (
			<Typography variant="body1">
				You suffer a crunching blow to your collarbone — determine randomly if
				this is on your left or right. You drop any item held in the hand on
				that side and have Disadvantage on all Tests using the arm.
				Additionally, you must make a <b>Challenging (+0) Fortitude</b> (Pain)
				Test or be Stunned for one minute.
				<b>Injury:</b> Your collarbone is broken. You suffer the Broken Bone
				(Minor) Injury to your collarbone, which is treated as a broken arm.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test to treat shock. This Test does not
				count as treating the broken bone.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '8',
		description: 'Deep Cut',
		effects: (
			<Typography variant="body1">
				You suffer a deep cut on your lower abdomen, which makes it difficult to
				move. You are Bleeding (Major), and your Speed is reduced one step.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test using a chirurgeon’s kit to stop
				the bleeding.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '9',
		description: 'Fractured Hip',
		effects: (
			<Typography variant="body1">
				You are hit in the hip, causing the bone to fracture. You are knocked
				Prone, have Disadvantage on Tests that rely on mobility, and your Move
				is reduced one step. Additionally, you must make a{' '}
				<b>Challenging (+0) Fortitude</b> (Pain) Test or be Stunned for one
				minute.
				<b>Injury:</b> Your hip is fractured. You suffer the Broken Bone (Minor)
				Injury to your hip, which is treated as a broken leg.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test to treat shock. This Test does not
				count as treating the broken bone.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '10',
		description: 'Shattered Ribs',
		effects: (
			<Typography variant="body1">
				The attack shatters multiple ribs, leaving shards of bone peppered
				throughout your flesh. You have Disadvantage on any physical Test, and
				your Move is reduced two steps to a minimum of Slow.
				<br />
				<b>Injury:</b> You suffer a Broken Bone (Major) Injury to your torso
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test to treat shock. This Test does not
				count as treating the broken bone.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '11',
		description: 'Punctured Lung',
		effects: (
			<Typography variant="body1">
				The attack punctures your lung, perhaps embedding shrapnel, a bullet, or
				a fragment of your own bone. You gain a Fatigued Condition and a
				Bleeding (Minor) Condition.
				<br />
				<b>Injury:</b> Your lung is badly damaged and partially filled with
				fluids. A <b>Difficult (−10) Medicae</b> Test performed by someone with
				the Chirurgeon Talent is required to repair the damaged tissue and
				remove the Fatigued Condition.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Difficult (−10) Medicae</b> Test to patch up the wound and remove
				the Bleeding Condition.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '12-13',
		description: 'Sliced Artery',
		effects: (
			<Typography variant="body1">
				You suffer a serious wound to a major artery. You are Bleeding (Major),
				Fatigued from blood loss, have Disadvantage on Tests that rely on
				mobility, your Move is reduced one step, and you fall Prone.
				<br />
				<b>Injury:</b> Due to blood loss, you are Fatigued for 1d10 days
				regardless of how much rest you take.
			</Typography>
		),
		treatment: (
			<Typography variant="body1">
				A <b>Hard (−20) Medicae</b> Test using a chirurgeon’s kit to stop the
				bleeding.
			</Typography>
		),
	},
	{
		location: 'body',
		locationName: 'Body',
		roll: '14-15',
		description: 'Flayed Flesh',
		effects: (
			<Typography variant="body1">
				A chunk of the flesh of your torso is blasted away, leaving an ugly,
				open wound that exposes the bones and organs beneath. You are Bleeding
				(Major) and Prone. Additionally, you are Stunned for 1 hour.
				<br />
				<b>Injury:</b> A <b>Difficult (−10) Medicae</b> Test performed by
				someone with the Chirurgeon Talent is required to repair the damaged
				tissue.
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
		location: 'body',
		locationName: 'Body',
		roll: '16-17',
		description: 'Injured Spine',
		effects: (
			<Typography variant="body1">
				You suffer a substantial injury to your spine, making it difficult to
				stand and leaves you in terrible pain. You are Bleeding (Major) and
				Prone.
				<b>Injury:</b> Your spine is cracked or broken. You suffer the Broken
				Bone (Major) Injury to your torso.
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
		location: 'body',
		locationName: 'Body',
		roll: '18+',
		description: 'Torn Apart',
		effects: (
			<Typography variant="body1">
				You are split in two or otherwise torn apart. Creatures within Short
				Range are showered in blood and gore. You are dead.
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
