import { BulletList, ContentDivider, Span, Typography } from '@components'
import {
	criticalWoundsBulletPoints,
	dyingBulletPoints,
	healingBrokenBonesBulletPoints,
	introductionBulletPoints,
	majorBrokenBonesBulletPoints,
	minorBrokenBonesBulletPoints,
} from './data'

export default function DamageAndWounds() {
	return (
		<>
			<Typography variant="h2" align="center">
				Wounds and Damage
			</Typography>

			<Typography variant="h3">Wounds</Typography>
			<Typography variant="body1">
				Each time you suffer a point of Damage, you gain 1 Wound. If your Wounds
				equal your Maximum Wounds, your injuries get the better of you. You
				suffer the following effects:
			</Typography>
			<BulletList bulletPoints={introductionBulletPoints} bullets />

			<Typography variant="body1">
				You never accumulate Wounds greater than your Maximum Wounds. Beware, as
				once you reach this threshold, every attack that would Wound you causes
				a Critical Wound!
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Critical Wounds</Typography>
			<Typography variant="body1">
				There are two ways to suffer Critical Wounds:
			</Typography>
			<BulletList bulletPoints={criticalWoundsBulletPoints} bullets />

			<ContentDivider />

			<Typography variant="h3">Exceeding Maximum Wounds</Typography>
			<Typography variant="body1">
				If you suffer Wounds that would exceed your Maximum Wounds, you suffer a
				Critical Wound. Determine the Hit Location and make a Severity Roll. To
				do so, roll 1d10 + the <Span fontStyle="italic">excess Damage</Span> and
				consult the appropriate <Span fontStyle="italic">Critical Wound</Span>{' '}
				Table for the Hit Location to determine the Critical Wound.
				<br />
				<br />
				The location of the Critical Wound, and therefore the applicable table,
				is determined by the attack that caused the Critical Wound. You suffer
				the additional effects listed.
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Critical Hit</Typography>
			<Typography variant="body1">
				If you roll a <Span fontStyle="italic">Critical</Span> on your attack
				Test, or successfully{' '}
				<Span fontStyle="italic">attack whilst hidden</Span>, the attack deals a
				Critical Hit. The target suffers a Critical Wound, even if they haven't
				exceeded their <Span fontStyle="italic">Maximum Wounds</Span>.
				<br />
				<br />
				After taking a Critical Hit, roll 1d10 to determine the{' '}
				<Span fontStyle="italic">Hit Location</Span>, then deal Damage from the
				attack as normal. After dealing Damage, make a Severity Roll, as above,
				but there is no need to add to the 1d10 roll unless the Damage exceeded
				the target's Maximum Wounds. They suffer the effects listed. Critical
				Wounds caused in this way are usually less severe than those caused by
				exceeding Maximum Wounds.
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Injuries</Typography>
			<Typography variant="body1">
				These take effect immediately upon receiving the Critical Wound, but
				linger long after it has been treated. Injuries inflict long-term
				penalties and may require medical care or{' '}
				<Span fontStyle="italic">surgery</Span> to fully heal.
			</Typography>

			<Typography variant="h4">Broken Bones</Typography>
			<Typography variant="body1" indented={1}>
				If you suffer a Broken Bone, it is marked as{' '}
				<Span fontStyle="italic">Minor</Span> or{' '}
				<Span fontStyle="italic">Major</Span>
			</Typography>

			<Typography variant="h5">Minor</Typography>
			<Typography variant="body1" indented={2}>
				The effects of a minor break vary depending on the Hit Location, but
				typically inflict Disadvantage on Tests using that body part.
			</Typography>
			<BulletList
				bulletPoints={minorBrokenBonesBulletPoints}
				bullets
				indented={2}
			/>

			<Typography variant="h5">Major</Typography>
			<Typography variant="body1" indented={2}>
				It will not heal properly without medical attention. The effects of a
				major break are more severe, and make the body part almost unusable.
			</Typography>
			<BulletList
				bulletPoints={majorBrokenBonesBulletPoints}
				bullets
				indented={2}
			/>

			<Typography variant="h5">Healing</Typography>
			<Typography variant="body1" indented={2}>
				A Minor Broken Bone will heal naturally after 30 + 1d10 days. After this
				time, you must make a <b>Routine (+20) Fortitude</b> Test to see if the
				bone has set correctly. If you fail, you suffer the following permanent
				effects:
			</Typography>
			<BulletList
				bulletPoints={healingBrokenBonesBulletPoints}
				bullets
				indented={2}
			/>

			<Typography variant="body1" indented={2}>
				A <b>Routine (+20) Medicae</b> Test within one week of suffering a break
				negates the need for the Fortitude Test, but the affected area must
				remain bound and held in place for the duration (it is effectively
				Amputated, see below). If the binding is undone, another{' '}
				<b>Routine (+20) Medicae</b> Test must be enacted within one day to
				rebind the bone and avoid the Fortitude Test.
				<br />
				<br />A Major Broken Bone takes 40 + 2d10 days to heal. Otherwise, it
				follows the same rules for a Minor break, but the penalties increase to
				−10, and the associated Tests are
				<b>Challenging (+0)</b>.
			</Typography>

			<ContentDivider />

			<Typography variant="h3">Amputation</Typography>
			<Typography variant="body1">
				These injuries will heal with time and care, but they cause a permanent
				impediment. <Span fontStyle="italic">Augmetic replacements</Span> exist
				for most missing body parts, and can return any lost function.
				<br />
				<br />
				All amputations require surgery to heal properly. Until you{' '}
				<Span fontStyle="italic">visit a medicae practitioner</Span> or are
				operated on by someone with the{' '}
				<Span fontStyle="italic">Chirurgeon Talent</Span>, you cannot heal
				Critical Wounds of this type.
			</Typography>

			<Typography variant="h4">Arm</Typography>
			<Typography variant="body1" indented={1}>
				You have Disadvantage on all Tests that require the use of two hands,
				and can’t wield weapons with the{' '}
				<Span fontStyle="italic">Two-handed Trait</Span>.
			</Typography>

			<Typography variant="h4">Ear</Typography>
			<Typography variant="body1" indented={1}>
				If you are unfortunate enough to lose both ears, you suffer Disadvantage
				on Awareness (Hearing) Tests.
			</Typography>

			<Typography variant="h4">Eye</Typography>
			<Typography variant="body1" indented={1}>
				Disadvantage on Awareness (Sight) Tests until you adjust to the loss,
				which takes 5d10 weeks.
				<br />
				<br />
				If you lose both eyes, you are permanently{' '}
				<Span fontStyle="italic">Blinded</Span>.
			</Typography>

			<Typography variant="h4">Finger</Typography>
			<Typography variant="body1" indented={1}>
				For the first finger lost, any failed Test using that hand that results
				in a 1 on the units die counts as a Fumble. For the second finger, any
				failed Test with a 1 or 2 on the units die counts as a Fumble, and so
				on.
				<br />
				<br />
				When you lose 4 or more fingers on one hand, use the rules for an
				amputated hand.
			</Typography>

			<Typography variant="h4">Foot</Typography>
			<Typography variant="body1" indented={1}>
				Your <Span fontStyle="italic">Speed</Span> is reduced one step, to a
				minimum of Slow. Additionally, you have Disadvantage on Tests that rely
				on mobility, such as Reflexes and Athletics Tests.
				<Span fontStyle="italic">Blinded</Span>.
			</Typography>

			{/* 
			// TODO - Continue working here... Doing HAND next 
			*/}

			<ContentDivider />

			<Typography variant="h3">Dying</Typography>
			<Typography variant="body1">
				There are a number of ways you can die in Imperium Maledictum.
			</Typography>
			<BulletList bulletPoints={dyingBulletPoints} bullets />
		</>
	)
}

{
	/* <Typography variant="h3"></Typography>
<Typography variant="body1"></Typography> */
}
