import { BulletList, Requirements, Span, Typography } from '@common'
import { Section } from 'types/sections'

export const talentsSection: Section = {
	title: 'Talents',
	description: [
		{
			summary: 'REQUIREMENTS',
			details: (
				<>
					<Typography>
						Some Talents have Requirements you need to meet before you can
						purchase them. If you stop meeting the Requirements for a Talent,
						you lose the Talent. Requirements are typically one or more of the
						following:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										Above or below a certain Characteristic, such as ‘Agility
										45’ or ‘Less than 30 Intelligence’
									</>
								),
							},
							{
								primary: (
									<>
										A number of Advances in a Skill, for example ‘2 Advances in
										Melee’
									</>
								),
							},
							{
								primary: (
									<>
										A number of Advances in a Specialisation, for example ‘2
										Advances in Melee (Two-handed)’. This does not require you
										to have 2 Advances in Melee.
									</>
								),
							},
							{
								primary: (
									<>
										A lack of Advances in a Skill or Specialisation, such as ‘No
										Advances in Presence or any Presence Specialisation’
									</>
								),
							},
							{
								primary: (
									<>
										Some Talents can only be taken during character creation,
										and cannot be purchased after you start playing Imperium
										Maledictum.
									</>
								),
							},
							{
								primary: (
									<>
										Some Talents prevent or require you to taking other Talents,
										for example, you cannot be both a{' '}
										<Span fontStyle="italic">Psyker</Span> and a{' '}
										<Span fontStyle="italic">Blank</Span>
									</>
								),
							},
						]}
						bullets
					/>
				</>
			),
		},
		{
			summary: 'Acute Sense',
			details: (
				<>
					<Typography variant="body1">
						One of your primary five senses is highly developed, allowing you to
						spot what others miss. You may make Perception Tests to detect
						normally imperceptible details with the associated sense, as
						dictated by the GM. This could include seeing a lone Servo-Skull at
						an incredible distance, detecting the presence of a nearodourless
						poison, hearing the breath of a motionless ganger hidden in the next
						room, reading printed text by touch, or knowing by taste alone that
						two ration packages come from different manufactorums.
					</Typography>
				</>
			),
		},
		{
			summary: 'Adrenaline Acceleration',
			details: (
				<>
					<Typography variant="body1">
						You are capable of impressive bursts of speed when your life is on
						the line. If you have a Critical Wound your Speed increases by one
						step until the end of the Encounter, and you have Advantage on
						Athletics Tests made during a Pursuit or while Fleeing.
					</Typography>
				</>
			),
		},
		{
			summary: 'Agile Attacks',
			details: (
				<>
					<Requirements text="Agility 45, 2 Advances in Melee" />
					<Typography variant="body1">
						Speed and accuracy make your attacks more potent than powerful
						blows. You may use your Agility Bonus instead of your Strength Bonus
						when calculating damage for melee weapons with the Subtle Trait.
					</Typography>
				</>
			),
		},
		{
			summary: 'Air of Authority',
			details: (
				<>
					<Requirements text="2 Advances in Presence" />
					<Typography variant="body1">
						You exude confidence and command, your mere presence influential to
						many. The first time you meet a group, you can make a{' '}
						<b>Challenging (+0) Presence</b> or <b>Rapport</b> Test. On a
						success, you gain +1 Influence with that group until the end of the
						mission.
					</Typography>
				</>
			),
		},
		{
			summary: 'Ambidextrous',
			details: (
				<>
					<Typography variant="body1">
						You can use both hands equally well, and suffer no penalty for doing
						something with your ‘off’ hand. As a result, you may wield a
						one-handed melee weapon and a pistol at the same time without
						penalty to attacks with either.
					</Typography>
				</>
			),
		},
		{
			summary: 'Applied Anatomy',
			details: (
				<>
					<Requirements text="2 Advances in Presence" />
					<Typography variant="body1">
						Your knowledge of physiology gives you a keen familiarity with
						injuries and how they are caused. Though that usually helps you
						treat them, it also aids your understanding of how to inflict them.
						When you inflict a Critical Hit or Critical Wound, you may increase
						its rolled severity by your Advances in the Medicae Skill.
					</Typography>
				</>
			),
		},
		{
			summary: 'Artistic',
			details: (
				<>
					<Typography variant="body1">
						You have a natural talent for the arts. This Talent can be taken
						multiple times, each time choose one of the following:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Literature:</b> +2 SL to any Test related to reading or
										writing, such as cataloguing a comprehensive and persuasive
										evidential case or recognizing which Imperial sagas are
										being referenced in an ingeniously coded message.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Painting:</b> +2 SL to any Test related to painting or
										drawing, such as creating a sketch of a person of interest
										or identifying the artist of an Imperial fresco and that it
										is a forgery.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Music:</b> +2 to any Test related to singing or
										performing music, such as leading a religious chorus or
										surmising which planet in a particular sub-sector someone is
										from based on the tunes they hum.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Theatre:</b> +2 SL to any Test related to acting or
										performing, such as dramatically depicting a character or
										identifying whether someone is wearing a uniform that was
										not made for them.
									</>
								),
							},
						]}
						bullets
					/>
				</>
			),
		},
		{
			summary: 'Attentive Assistant',
			details: (
				<>
					<Typography variant="body1">
						You are a dutiful assistant, rendering aid with efficiency and
						aplomb even when the activity would normally be outside your
						skillset. You can use the Help Action to assist someone even if you
						do not have Advances in the Skill being Tested. Additionally, if you
						do have an Advance, they gain +1 SL on the Test.
					</Typography>
				</>
			),
		},
		{
			summary: 'Blank',
			details: (
				<>
					<Requirements text="Can only be taken during Character Creation. You can never be a Psyker and a Blank." />
					<Typography variant="body1">
						You are a Psychic Blank, one of the extremely rare Soulless. Psychic
						nulls like you carry the Pariah Gene, which denies you a psychic
						connection to the warp. Without that link, you have no presence
						within the immaterium, rendering you anathema to nearby psykers and
						daemons. You curtail access to the immaterium in your immediate
						area. Ordinary Humans find your presence disturbing, and may even
						suffer headaches or nausea from prolonged exposure to you.
						<br />
						<br />
						This Talent includes the following effects:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										You automatically win any Opposed Test to resist a Psychic
										Power. Your result is always a Success (+1 SL).
									</>
								),
							},
							{
								primary: (
									<>You cannot be detected through Psyniscience alone.</>
								),
							},
							{
								primary: <>You are immune to Daemonic Possession.</>,
							},
							{
								primary: <>You never gain Corruption Points.</>,
							},
							{
								primary: (
									<>
										You make Fellowship Tests when interacting with any creature
										with a connection to the warp with Disadvantage (i.e. all
										non-Blank Humans).
									</>
								),
							},
							{
								primary: (
									<>
										Tests made to Manifest a psychic power that targets your
										Zone, an individual in your Zone, or made within Short Range
										of you suffer from Disadvantage.
									</>
								),
							},
							{
								primary: (
									<>Daemons treat the Zone you are in as a Minor Hazard.</>
								),
							},
							{
								primary: (
									<>
										Individuals connected to a psychic hive mind (such as
										Genestealer Cultists) that enter or start their turn in your
										Zone must make a{' '}
										<b>Challenging (+0) Discipline (Composure)</b> Test or be
										Stunned (Minor).
									</>
								),
							},
						]}
						bullets
					/>
				</>
			),
		},
		{
			summary: 'Bone Breaker',
			details: (
				<>
					<Requirements text="2 Advances in Medicae (Specialisation)" />
					<Typography variant="body1">
						Your medical training allows you to find faults in anatomy and
						exploit them with ease. As an Action, you can break the bone of a
						Restrained target that you have the relevant Medicae Specialisation
						for. Select a Hit Location. That Hit Location now has a Broken Bone
						(Minor). If the Hit Location already has a Broken Bone (Minor), it
						now has a Broken Bone (Major).
					</Typography>
				</>
			),
		},
		{
			summary: 'Briber',
			details: (
				<>
					<Requirements text="2 Advances in Intuition (People)" />
					<Typography variant="body1">
						You have a natural instinct for who can be paid off, and how to
						manipulate them with an appropriate ‘donation’ of Solars. You have
						Advantage on all Intuition (People) Tests to gauge whether someone
						would be amenable to a bribe. Additionally, you decrease the cost of
						any bribe by 10% for every Advance in Rapport (Haggle) you have.
					</Typography>
				</>
			),
		},
		{
			summary: 'Bulwark',
			details: (
				<>
					<Requirements text="3 Advances in Reflexes" />
					<Typography variant="body1">
						You are proficient in using a shield to deflect danger from multiple
						sources. When using a shield and taking the Defend Action, you may
						choose to Defend an additional ally that is within Immediate Range,
						or choose to Defend both an ally within Immediate Range and the Zone
						you currently occupy
					</Typography>
				</>
			),
		},
		{
			summary: 'Burglar',
			details: (
				<>
					<Requirements text="1 Advance in both Athletics and Stealth" />
					<Typography variant="body1">
						Breaking and entering comes naturally to you. You have Advantage on
						Tests related to breaking and entering a location, such as climbing
						the exterior of a building, quietly breaking windows, or unlocking
						doors or lockboxes.
					</Typography>
				</>
			),
		},
		{
			summary: 'Chirurgeon',
			details: (
				<>
					<Requirements text="2 Advances in Medicae" />
					<Typography variant="body1">
						You can use a Chirurgeon’s Kit to perform surgery. You can perform
						Amputations and treat Critical Wounds that are beyond the skills of
						others. Additionally you gain Advantage when treating Critical
						Wounds in combat.
					</Typography>
				</>
			),
		},
		{
			summary: 'Close Quarters Discipline',
			details: (
				<>
					<Requirements text="2 Advances in both Discipline and Ranged" />
					<Typography variant="body1">
						Countless hours of practice, training, and drilling have taught you
						to focus on firing your weapon, even when you are mere inches from
						danger. An enemy within Immediate range of you does not impose
						Disadvantage on your Ranged Attacks.
					</Typography>
				</>
			),
		},
		{
			summary: 'Combat Master',
			details: (
				<>
					<Requirements text="2 Advances in Melee" />
					<Typography variant="body1">
						Your accumulated years of combat experience allow you to keep lesser
						fighters at bay. You count as two people for the purposes of
						determining if one side outnumbers the other in combat.
					</Typography>
				</>
			),
		},
		{
			summary: 'Condemn the Witch',
			details: (
				<>
					<Requirements text="Willpower 40, Psyker Talent" />
					<Typography variant="body1">
						Simply denying a psyker access to the warp isn’t enough for you. You
						twist their power, redirecting it to sear their mind, punishing them
						for their sorcerous transgressions and unforgivable blasphemies.
						<br />
						<br />
						When you successfully use Deny the Witch to prevent a psyker from
						manifesting a psychic power, that psyker suffers Wounds equal to the
						Warp Rating of the power they attempted to manifest.
					</Typography>
				</>
			),
		},
		{
			summary: 'Contortionist',
			details: (
				<>
					<Typography variant="body1">
						You can bend and twist your body to escape restraints and squeeze
						into smaller places. You are capable of fitting into unusually small
						or cramped spaces, such as the narrow pipes of a manufactorum.
						Additionally you have Advantage on Tests to resist or end the
						Restrained Condition or a grapple.
					</Typography>
				</>
			),
		},
		{
			summary: 'Counter Attack',
			details: (
				<>
					<Requirements text="3 Advances in Melee" />
					<Typography variant="body1">
						Conforming to the idiom that 'the best defence is offence', you
						respond to an incoming attack with a lightning-fast counterstrike of
						your own.
						<br />
						<br />
						If you are the target of a melee attack and win the Opposed Melee
						Test (page 211), you can choose to deal Damage to your opponent as
						if you made the attack.
						<br />
						<br />
						You may purchase this Talent multiple times. You may Counter Attack
						once per round for each time you have purchased this Talent.
					</Typography>
				</>
			),
		},
		{
			summary: 'Coup De Grâce',
			details: (
				<>
					<Requirements text="3 Advances in Reflexes" />
					<Typography variant="body1">
						You know how to deliver a crushing final blow when you are
						dominating a situation. If you have 2 or more Superiority, you can
						take 2 turns in a row, sacrificing your turn next round.
					</Typography>
				</>
			),
		},
		{
			summary: 'Data Delver',
			details: (
				<>
					<Requirements text="2 Advances in Logic (Investigation)" />
					<Typography variant="body1">
						You are naturally in tune with the flow of data and recorded
						information, effortlessly able to navigate the often byzantine
						records of the Imperium. You have Advantage on Tests made to find or
						retrieve information from a document or archive (whether analog or
						digital). Additionally, you read text in half the time it would
						normally take.
						<br />
						<br />
						If you take this Talent again, you have Advantage on any Test made
						to determine where, when, how, or by whom a piece of information was
						created.
					</Typography>
				</>
			),
		},
		{
			summary: 'Deadeye',
			details: (
				<>
					<Requirements text="1 Advance in Ranged" />
					<Typography variant="body1">
						When you take the time to line up a shot in a practised manner, the
						benefits of your training flourish.
						<br />
						<br />
						When you <b>Aim</b> and make a Ranged Attack you gain +1 SL. If you
						purchase this Talent again, when you Aim you have Advantage on Tests
						to Target a Location.
					</Typography>
				</>
			),
		},
		{
			summary: 'Dealmaker',
			details: (
				<>
					<Requirements text="1 Advance in both Intuition (People) and Rapport (Haggle)" />
					<Typography variant="body1">
						You are skilled in trading and know how to close a deal. During a
						negotiation you can make an Intuition (People) Test. If you succeed
						you gain the benefit of one of the following effects:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										You learn what the target would accept as a bribe, be it an
										object, specific information, or an amount of Solars. Not
										everyone can be bribed.
									</>
								),
							},
							{
								primary: (
									<>
										You decrease the cost of anything you buy from the target by
										10%.
									</>
								),
							},
							{
								primary: (
									<>
										You increase the cost of anything you sell to the target by
										10%
									</>
								),
							},
						]}
						bullets
					/>
				</>
			),
		},
		{
			summary: 'Demolition Specialist',
			details: (
				<>
					<Requirements text="2 Advances in Ranged (Ordnance) or 2 Advances in Dexterity (Defuse)" />
					<Typography variant="body1">
						Explosives are your area of expertise, and you’ve proved yourself
						able to use them successfully without blowing yourself up. Over the
						course of an hour, you can make a{' '}
						<b>Challenging (+0) Tech (Engineering)</b> Test to remove the
						Unstable Trait from an explosive. The GM determines the Difficulty.
						Additionally, when preparing delayed explosives you may increase the
						Damage of those explosives by your Intelligence Bonus.
						<br />
						<br />
						This Talent can be taken an additional time. If you do, each time
						you make an attack with a weapon with the Blast Trait you can aim it
						in such a way that it ignores one character it would otherwise
						damage or effect.
					</Typography>
				</>
			),
		},
		{
			summary: 'Devoted Servant',
			details: (
				<>
					<Typography variant="body1">
						You are particularly talented at a form of honest toil. Select one
						of the options from the <b>Devoted Servant</b> Table. You gain
						Advantage on Tests related to your area of expertise.
					</Typography>
				</>
			),
		},
		{
			summary: 'Directed Strikes',
			details: (
				<>
					<Requirements text="3 Advances in Melee" />
					<Typography variant="body1">
						You aim your weapons carefully in close combat, directing strikes to
						land where they can do the most harm. You do not have Disadvantage
						when you take the Target Location Action with a melee weapon.
					</Typography>
				</>
			),
		},
		{
			summary: 'Dirty Fighting',
			details: (
				<>
					<Requirements text="2 Advances in Melee (Brawling)" />
					<Typography variant="body1">
						You are proficient in the art of foul play. When you deal damage
						with a melee attack, you can choose to inflict the Blinded or
						Deafened Condition. If you succeed by +3 SL or more, you can choose
						to inflict the Stunned Condition instead.
					</Typography>
				</>
			),
		},
		{
			summary: 'Disarm',
			details: (
				<>
					<Requirements text="2 Advances in Melee" />
					<Typography variant="body1">
						You are able to disarm an opponent with a careful flick of the wrist
						or a well-aimed blow to the hand. When you make a melee attack
						against an opponent who is the same size or smaller than you,
						instead of dealing damage you can choose to disarm them. If you
						succeed, your opponent drops a held object, which flies into a
						random adjacent Zone (with further effects as determined by the GM).
						If you win by +2 SL, you can determine which Zone the object lands
						in; if you win by +4 SL, you can take the object if you have a free
						hand, plucking it from the air with a flourish.
					</Typography>
				</>
			),
		},
		{
			summary: 'Disturbing Voice',
			details: (
				<>
					<Typography variant="body1">
						The way you speak is unsettling, and to some, frightening. You gain
						+2 SL to Presence (Interrogation) and (Intimidation) Tests when
						using your voice. You suffer a −2 SL penalty to Fellowship Tests
						against someone that is disturbed by your voice, as determined by
						the GM.
					</Typography>
				</>
			),
		},
		{
			summary: 'Distracting',
			details: (
				<>
					<Typography variant="body1">
						Regardless of your usual personality, you know how to be
						particularly vexing by interrupting people with disruptive,
						irritating, or offensive outbursts that are extremely effective
						distractions.
						<br />
						<br />
						You can use this Talent once per encounter to interrupt another
						individual making a Test, imposing Disadvantage on their Test. In
						combat, this Talent is used as a Reaction (page 199).
						<br />
						<br />
						If you purchase this Talent again, you can choose to gain one of the
						following:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Centre of Attention:</b> When you are within Immediate
										range of an individual that isn’t your ally, you may choose
										to inflict Disadvantage on Tests that target makes with
										anyone other than you.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Stunning Interjection:</b> Once per encounter when you
										use the Distraction Talent, your target is Stunned (Minor)
										until the end of their next Turn.
									</>
								),
							},
						]}
						bullets
					/>
				</>
			),
		},
		{
			summary: 'Drilled',
			details: (
				<>
					<Requirements text="1 Advance in Discipline" />
					<Typography variant="body1">
						You’ve been trained to face down the innumerable dangers of the
						universe, especially if you are backed up by other trained warriors.
						You have Advantage on Tests to resist the Frightened Condition, and
						you gain +1 SL to Discipline Tests for every ally with the Drilled
						Talent in the same Zone as you.
						<br />
						<br />
						If another member of your group has the Drilled Talent, you can both
						choose to purchase the Drilled Talent again to gain the following:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Kill Team:</b> When you are in the same Zone as another
										member of your party with the Drilled Talent, you can choose
										to act immediately after them in Initiative and gain +1 SL
										to all Tests.
									</>
								),
							},
						]}
						bullets
					/>
				</>
			),
		},
		{
			summary: 'Dual Wielder',
			details: (
				<>
					<Requirements text="Ambidextrous, 2 Advances in Melee (One-handed)" />
					<Typography variant="body1">
						You have learned to wield two melee weapons at once. You do not
						suffer Disadvantage when attacking with two melee weapons at the
						same time. See <b>Two-weapon Fighting</b> for more information.
					</Typography>
				</>
			),
		},
		{
			summary: 'Duellist',
			details: (
				<>
					<Requirements text="2 Advances in Melee (One-handed)" />
					<Typography variant="body1">
						You’re a fantastic fencer when engaging an opponent one-on-one in
						armed melee combat. You treat all Onehanded melee weapons that do
						not have the Subtle Trait as having Defensive Trait.
						<br />
						<br />
						This Talent can be taken multiple times, each time after the first,
						choose to gain one of the following:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Duellist Feint:</b> When you successfully attack with a
										One-handed melee weapon, you can choose to deal no damage
										and instead impose Disadvantage on attacks the target makes
										against you until the end of your next Turn.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Duelist Guard:</b> When you make an attack with a
										One-handed melee weapon, you can choose to make that attack
										with Disadvantage to simultaneously make the Dodge Action.{' '}
									</>
								),
							},
						]}
					/>
				</>
			),
		},
		{
			summary: 'Eidetic Memory',
			details: (
				<>
					<Typography variant="body1">
						You can recall things you’ve seen with incredible clarity and
						fidelity for much longer than most people. Once you see something,
						even briefly, you can recall an image of what you saw with virtually
						perfect accuracy. You do not need to make Tests to recall visual
						details about images you saw.
					</Typography>
				</>
			),
		},
		{
			summary: 'Ever Vigilant',
			details: (
				<>
					<Requirements text="2 Advances in Awareness" />
					<Typography variant="body1">
						Your senses are permanently engaged in a hunt for the enemies of the
						Emperor, to the extent that you sleep with one eye open. You gain +1
						SL to Tests to detect hidden enemies, and you suffer no penalties
						from the Unconsciousor Blinded Conditions while sleeping.
						<br />
						<br />
						Additionally, whenever you leave a location that has an object of
						interest or clue that the group did not find or closely examine, the
						GM may make a secret Awareness Test on your behalf with a Difficulty
						they determine. If the Test is successful, the GM may reveal this
						clue to you.
					</Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
		{
			summary: '',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1"></Typography>
				</>
			),
		},
	],
}
