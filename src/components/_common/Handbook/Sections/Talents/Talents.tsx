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
						bullets
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
			summary: 'Exploit Vulnerability',
			details: (
				<>
					<Requirements text="2 Advances in Intuition (People)" />
					<Typography variant="body1">
						You are ruthless in your use of information on your opponents. If
						you spend time to <b>Know Thy Foe</b> before combat, you may choose
						the Hit Location of your first successful attack.
					</Typography>
				</>
			),
		},
		{
			summary: 'Extended Proprioception',
			details: (
				<>
					<Requirements text="3 Advances in Pilot (Specialisation)" />
					<Typography variant="body1">
						Your sense of your body’s spatial movement and location extends to
						encompass the entirety of a vessel when you are piloting it. For
						vessels of your chosen Specialisation you always know their size and
						position in relation to their surroundings, meaning you will always
						know if the vessel will be able to fit through a gap, or feel if
						anything is off with the ship, such as a malfunctioning auspex or
						sabotaged void shield generator. Additionally, you do not suffer
						Disadvantage from being Blinded when you make a Pilot Test with your
						chosen Specialisation, and count as two people for the purposes of
						piloting a vessel that requires multiple crew to operate.
					</Typography>
				</>
			),
		},
		{
			summary: 'Faithful (Imperial Cult)',
			details: (
				<>
					<Requirements text="You must be a member of the Adeptus Ministorum. If not, you must have +2 Ministorum Influence or 2 Advances in Lore (Theology)." />
					<Typography variant="body1">
						You are a true believer of the Imperial Cult, a pious and devout
						member of the state religion of the Imperium and worshipper of the
						God-Emperor. You are capable of manifesting your faith as a light in
						the darkness of the 41st Millennium. This power can be used to
						further His divine will, but if it is misused, the Emperor is sure
						to punish such treachery.
						<br />
						<br />
						Once per session you may add your Willpower Bonus in SL when you are
						making a Test related to your faith. For example:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										When interrogating a suspected heretic, invoke the
										God-Emperor’s judgement to gain SL equal to your Willpower
										Bonus on a Presence (Intimidation) Test.
									</>
								),
							},
							{
								primary: (
									<>
										If you are righteously striking down a foul xenos creature
										or a heretic, you can scream a benediction of the Emperor’s
										fury to gain SL equal to your Willpower Bonus on your next
										attack.
									</>
								),
							},
							{
								primary: (
									<>
										If you are attempting to recall information or locate a
										particular sacred text, you can make a prayer to the Emperor
										for guidance to gain SL equal to your Willpower Bonus on
										your Lore (Theology) Test.
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
			summary: 'False Retreat',
			details: (
				<>
					<Requirements text="3 Advances in Rapport (Deception)" />
					<Typography variant="body1">
						You know how to use the confusion of battle to reposition yourself
						by feigning cowardice. As an Action, you can pretend to Flee. Reduce
						Superiority by 1 and remove yourself from the encounter. At the
						start of your next turn, you can choose any location within Long
						Range of your previous location. You are now in that location and
						hidden from your enemies. When — or indeed, if — you return to the
						Encounter, Superiority increases by 1.
					</Typography>
				</>
			),
		},
		{
			summary: 'Familiar Terrain',
			details: (
				<>
					<Typography variant="body1">
						You are so familiar with the particular environs of your upbringing
						that you can better find cover to protect yourself or disappear
						entirely. Choose an environment from the following list. Within that
						environment you have Advantage on Stealth Tests and gain +1 Armour
						from Cover (page 204) in addition to what that cover typically
						grants. You may take this Talent multiple times, choosing another
						type of terrain each time.
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Agri:</b> Farmed fields, slaughterhouses, and other
										locations dedicated to food or water production.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Feudal:</b> Any Human civilisation that is not a hive
										city, on a Forge world, or on a Shrine World.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Forge:</b> Manufactorums, Omnissian forge-shrines, and
										the streets of Forge Worlds.{' '}
									</>
								),
							},
							{
								primary: (
									<>
										<b>Hive:</b> Anywhere in a hive city, including the toxic
										sumps that often lie beneath.{' '}
									</>
								),
							},
							{
								primary: (
									<>
										<b>Natural:</b> Forests, mountains, grasslands, plains, and
										other natural biomes untouched by civilisation.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Shrine:</b> Churches, cathedrals, tombs, and the streets
										of Shrine Worlds.
									</>
								),
							},
							{
								primary: (
									<>
										<b>War zone:</b> Any location that is or was recently an
										active war zone, as well as military buildings and active
										encampments.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Wasteland:</b> The irradiated wastelands beyond hive
										cities, tundras, deserts.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Voidship:</b> Any void-faring vessel of Imperial design.
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
			summary: 'Fated',
			details: (
				<>
					<Requirements text="Character creation only" />
					<Typography variant="body1">
						You are innately lucky, enjoy the Emperor’s grace, or perhaps have
						been chosen by the ruinous powers themselves for some great and
						terrible purpose. Regardless of the reason, you gain 1 point of
						Fate. You can only take this Talent once.
					</Typography>
				</>
			),
		},
		{
			summary: 'Field Medicae',
			details: (
				<>
					<Requirements text="2 Advances in Medicae" />
					<Typography variant="body1">
						There typically isn’t time to properly treat wounds during a crisis,
						but a savvy healer like yourself knows how to patch up wounds and
						render immediate first aid to save lives under pressure. When you
						make a Medicae Test to heal a character, the Difficulty can not be
						harder than Challenging (+0).
					</Typography>
				</>
			),
		},
		{
			summary: 'Flagellant',
			details: (
				<>
					<Typography variant="body1">
						Your dedication to your faith is such that you have shed many of the
						concerns of your flesh. You are happy to endure as much pain as
						required in service to the Emperor, and may even come to see that
						suffering as a form of worship far more holy than even the most
						sweetly sung hymn or devout prayer.
						<br />
						<br />
						You gain Advantage on any Test to resist the effects of pain or
						interrogation. Additionally, any time you suffer a Critical Wound
						you may make a <b>Challenging (+0) Lore (Theology)</b> Test. If you
						succeed, you may ignore the effects of that Critical Wound for a
						number of rounds equal to your Willpower Bonus. During this time
						your faith sustains your mortified flesh, allowing you to fight on
						where most others would have fallen. Once the duration of this
						effect is over, you suffer the full effects of the Critical Wound as
						normal
					</Typography>
				</>
			),
		},
		{
			summary: 'Flanking Fire',
			details: (
				<>
					<Requirements text="2 Advances in Ranged" />
					<Typography variant="body1">
						Your ally's attacks can open up your enemy's defences, allowing you
						to better place your shots. When you make a ranged attack targeting
						an enemy target in the same Zone as one of your revealed allies,
						your attack can bypass some of their cover. If your target is in
						Cover they reduce the Armour benefit that Cover grants by 2.
					</Typography>
				</>
			),
		},
		{
			summary: 'Flesh is Weak',
			details: (
				<>
					<Requirements text="2 Advances in Tech (Augmetics)" />
					<Typography variant="body1">
						The Cult of the Omnissiah preaches that the flesh is inferior to the
						perfection of the machine, and you have fully internalised that
						teaching. The number of Augmetics you can take is equal to double
						your Toughness Bonus.
					</Typography>
				</>
			),
		},
		{
			summary: 'Forbidden Knowledge',
			details: (
				<>
					<Requirements text="Character creation, or with GM permission (see Forbidden Lore)" />
					<Typography variant="body1">
						Through accident, proscribed research, or by order of your Patron,
						you have gained access to unsanctioned information. Each time you
						take this Talent, you gain access to one of the following
						Specialisations. You may make Tests related to your chosen
						Specialisation and purchase Advances in the Specialisation.
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: <>Linguistics (Forbidden)</>,
							},
							{
								primary: <>Lore (Forbidden)</>,
							},
							{
								primary: <>Medicae (Forbidden)</>,
							},
						]}
						bullets
					/>
				</>
			),
		},
		{
			summary: 'Forger',
			details: (
				<>
					<Requirements text="2 Advances in both Linguistics and Lore" />
					<Typography variant="body1">
						You are capable of forging documentation that allows you to wield
						Influence over a specific Faction. The Faction you are trying to
						gain Influence over determines the type of Test you must make when
						attempting to create the forgery, which takes a full day. Some
						example factions are listed below, though the GM may allow other
						options.
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Adeptus Administratum:</b> Lore (Adeptus Terra)
									</>
								),
							},
							{
								primary: (
									<>
										<b>Adeptus Ministorum:</b> Lore (Theology)
									</>
								),
							},
							{
								primary: (
									<>
										<b>The Inquisition:</b> Linguistics (Cipher)
									</>
								),
							},
							{
								primary: (
									<>
										<b>Rogue Trader Dynasty:</b> Linguistics (High Gothic)
									</>
								),
							},
						]}
						bullets
					/>
					<Typography variant="body1">
						The difficulty of the Test determines how much Influence the forgery
						will give you:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: <>Difficult (−10): +1 Influence</>,
							},
							{
								primary: <>Hard (−20): +2 Influence</>,
							},
							{
								primary: <>Very Hard (−30): +3 Influence</>,
							},
						]}
						bullets
					/>
					<Typography variant="body1">
						When you make the Test to forge the document, keep track of your SL.
						Anyone who inspects the document to discern its veracity makes an
						Opposed Test of their Logic (Evaluation) against the SL of your
						original Test.
					</Typography>
				</>
			),
		},
		{
			summary: 'Full-Auto Fanatic',
			details: (
				<>
					<Requirements text="3 Advances in Ranged" />
					<Typography variant="body1">
						You are a fearsome foe when you wield a weapon with a high rate of
						fire. If your weapon has the Rapid Fire Trait, you can choose to
						spend double the number of ammunition required for its Rapid Fire
						Rating. If you do so the weapon's Spread Trait affects all creatures
						within Close Range of the target rather than Immediate Range.
					</Typography>
				</>
			),
		},
		{
			summary: 'Frenzy',
			details: (
				<>
					<Typography variant="body1">
						You can work yourself into a frothing battle rage. As a Free Action
						you can make a <b>Challenging (+0) Willpower</b> Test to enter a
						frenzied state. While frenzied your Strength Bonus increases by +1
						and you are immune to the Frightened Condition. On your turn, you
						must attempt to engage the nearest enemy in melee combat. You remain
						in this state until all enemies you can currently see have been
						defeated, or until you are affected by the Stunned or Unconscious
						Condition.
						<br />
						<br />
						This Talent can be taken multiple times, each time choose one of the
						following:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Frenzied Control:</b> You can make a{' '}
										<b>Difficult (−10) Discipline (Composure)</b> Test as an
										Action, to halt your Frenzied state.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Frenzied Fearlessness:</b> Whenever you would become
										Frightened, you may immediately become Frenzied instead.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Frenzied Momentum:</b> One per Turn, when you kill an
										enemy whilst Frenzied, you may immediately Move or take
										another Action.
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
			summary: 'Gallows Humour',
			details: (
				<>
					<Requirements text="2 Advances in Rapport (Charm)" />
					<Typography variant="body1">
						You find humour in the darkest of places, and can use it to bolster
						the morale of your allies, keeping them alive in the direst of
						times. As an Action, you can use Charm (Rapport) to make a joke that
						can stabilise someone in a dire situation.
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										If your target is Fatigued or Frightened, you can make a
										<b>Challenging (+0) Rapport (Charm)</b> Test as an Action to
										remove the Condition.
									</>
								),
							},
							{
								primary: (
									<>
										If your target is Stunned, you can make a{' '}
										<b>Challenging (+0) Rapport (Charm)</b> Test as an Action to
										remove the Condition.
									</>
								),
							},
							{
								primary: (
									<>
										If your target is Dying, you can make a{' '}
										<b>Challenging (+0) Rapport (Charm)</b> Test. If you
										succeed, your target does not die at the end of the round,
										and instead can survive for another 1 + SL rounds.
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
			summary: 'Gothic Gibberish',
			details: (
				<>
					<Requirements text="1 Advance in Linguistics" />
					<Typography variant="body1">
						Gothic Gibberish is the appropriately verbose name given to the
						practice of talking rapidly and incessantly to confound a target by
						burying them beneath a deluge of obscure information.
						<br />
						<br />
						You can use Gothic Gibberish by making a Rapport (Charm) Test
						opposed by the target’s Discipline (Composure). Your target must
						share at least one language with you, and neither of you can be in
						combat. If you win the Opposed Test, your target is Stunned for as
						long as you continue to spout nonsense. Creatures Stunned by your
						Gothic Gibberish may do nothing other than stare at you dumbfounded
						as they try to catch up with or understand what you are saying. They
						may attempt another Discipline (Composure) Test opposed by your
						Rapport (Charm) at the end of each of their Turns, or whenever the
						GM deems it fitting — even Gothic Gibberish can’t hold someone’s
						attention if a firefight breaks out nearby!
					</Typography>
				</>
			),
		},
		{
			summary: 'Guardian',
			details: (
				<>
					<Requirements text="3 Advances in Reflexes" />
					<Typography variant="body1">
						You are quick enough to interpose yourself between your allies and
						harm. As a Free Action at the start of combat, choose one allied
						character within Medium Range. You are their guardian and are
						considered to be defending them for the duration of the combat
						(Defend). If the target is attacked and you are within Medium Range,
						you can immediately move to Defend them. If doing so causes you to
						break Engagement, your opponents have Disadvantage on their melee
						attack.
					</Typography>
				</>
			),
		},
		{
			summary: 'Gunslinger',
			details: (
				<>
					<Requirements text="Ambidextrous, 2 Advances in Ranged (Pistols)" />
					<Typography variant="body1">
						You have learned to wield two ranged weapons at once. You do not
						suffer Disadvantage when attacking with two ranged weapons at the
						same time. See Two-weapon Fighting for more information
					</Typography>
				</>
			),
		},
		{
			summary: 'Hatred',
			details: (
				<>
					<Typography variant="body1">
						You wield your fury as a weapon. Choose the object of your hatred —
						for example, xenos, heretics, or gangers.Whenever you come into
						contact with the the subject of your hatred, you must make a
						<b>Difficult (−10) Discipline (Composure)</b> Test. If you fail the
						Test, you have Advantage on any Discipline (Fear) Tests and +1 SL to
						any attack Tests you make against the target of your hatred. Whilst
						overcome by this hate, you must immediately attempt to destroy the
						hated group by the fastest and most deadly means possible. You may
						attempt another <b>Difficult (−10) Discipline (Composure)</b> Test
						at the end of each of your turns to end this effect. Otherwise, the
						effect ends when you fall unconscious or all visible subjects of
						your hatred are dead.
					</Typography>
				</>
			),
		},
		{
			summary: 'Hit and Run',
			details: (
				<>
					<Requirements text="3 Advances in Reflexes (Acrobatics)" />
					<Typography variant="body1">
						When you strike an enemy, you can take advantage of their pain to
						acrobatically reposition yourself. As a Free Action, when you deal
						one or more Wounds or Critical Wounds, you can make a{' '}
						<b>Reflexes (Acrobatics)</b> Test to Disengage and move to an
						adjacent Zone.
					</Typography>
				</>
			),
		},
		{
			summary: 'Holdout Expert',
			details: (
				<>
					<Typography variant="body1">
						You are an expert at hiding small objects about your person —
						perhaps in a small compartment hidden in your clothing, or even in a
						hollow chamber inside an augmetic limb.
						<br />
						<br />
						You can conceal one small item, no bigger than the palm of your
						hand. Anyone searching you must make a{' '}
						<b>Hard (−20) Awareness (Touch)</b>,<b>Dexterity (Pickpocket)</b> or{' '}
						<b>Logic (Investigation)</b> Test to discover the hidden object. If
						the individual searching you employs any technology, such as an
						Auspex or a Cyber-hound, this difficulty is reduced to{' '}
						<b>Challenging (+0)</b>.
					</Typography>
				</>
			),
		},
		{
			summary: 'Hypno-Indoctrination',
			details: (
				<>
					<Requirements text="" />
					<Typography variant="body1">
						Someone spent a great deal of time and effort hypnotically imparting
						you with specific training you could not consciously recall as it
						dwelt in your subconscious. Now it has revealed itself to you. Roll
						twice on the <b>Random Talents</b> Table. You now have those
						Talents. Hypno-Indoctrination can only be taken once.
					</Typography>
				</>
			),
		},
		{
			summary: 'Icon Bearer',
			details: (
				<>
					<Requirements text="1 Advance in Lore (Theology) and 1 Advance in Presence" />
					<Typography variant="body1">
						When you lift a holy icon aloft it sends your companions’ hearts
						soaring. When you are holding a Holy Icon any ally within Medium
						Range that can see you gains the icon's benefit.
					</Typography>
				</>
			),
		},
		{
			summary: 'Ignorance Is My Shield',
			details: (
				<>
					<Requirements text="Less than 30 Intelligence, cannot have Advances in any (Forbidden) Specialisation" />
					<Typography variant="body1">
						The Imperial Cult preaches that ignorance is the best defence
						against the horrors of heretical thought. You are particularly
						ignorant, warding you from the predations of the daemons of the
						warp. You gain +4 SL on all Tests made to resist Corruption, psychic
						powers, and the influence of daemonic forces. However, you also
						suffer a penalty of −4 SL on all Tests related to researching,
						tracking, or recalling information about daemons, psykers, and
						xenos.
					</Typography>
				</>
			),
		},
		{
			summary: 'Inspiring Presence',
			details: (
				<>
					<Requirements text="2 Advances in Presence (Leadership)" />
					<Typography variant="body1">
						Your presence fills your allies with zeal. Allies in your Zone that
						can see you gain Advantage on Discipline Tests.
					</Typography>
				</>
			),
		},
		{
			summary: 'Inheritor',
			details: (
				<>
					<Requirements text="Must be taken at character creation" />
					<Typography variant="body1">
						You are the heir to a lineage of some significance, be that the
						descendant of a Planetary Governor, the scion of a Rogue Trader
						Dynasty, the offspring of an influential Gang Leader, or something
						else entirely (see below). You gain +1 Influence with an appropriate
						Faction, provided you continue to live up to the legacy of your
						forebears. If the GM deems it appropriate to your circumstances, you
						may also be the beneficiary of <b>Inheritance</b>.
						<br />
						<br />
						Also at the GM’s discretion, this Talent may be taken to reflect
						more narratively impactful lineages, for your benefit or hinderance.
						For example, you may be a descendant of one of the vaunted Navis
						Nobilite, and therefore be able to access the Navigation (Warp)
						Specialisation. You may even be a member of one of the xenos-tainted
						bloodlines of the Genestealer Cults rumoured by some to exist in the
						sector.
					</Typography>
				</>
			),
		},
		{
			summary: 'Lawbringer',
			details: (
				<>
					<Requirements text="2 Advances in Lore (Adeptus Terra)" />
					<Typography variant="body1">
						The Lex Imperialis is composed of myriad inscrutable laws that keep
						the Imperium aloft, and you know how to wield them like a weapon —
						or at least have the confidence to threaten others with their
						execution. When you make a Rapport or Presence Test and know the
						target of your Test has broken some kind of law, you can reference
						that law to gain +SL to the Test equal to your Advances in Lore
						(Adeptus Terra).
					</Typography>
				</>
			),
		},
		{
			summary: 'Lickspittle',
			details: (
				<>
					<Typography variant="body1">
						You are a bootlicker, a brown-nose, a grovelling lackey and a
						sycophantic toady — but that almost always gets you what you want.
						You gain Advantage on any Test made to suck up to a superior.{' '}
					</Typography>
				</>
			),
		},
		{
			summary: 'Martyrdom',
			details: (
				<>
					<Requirements text="2 Advances in Fortitude" />
					<Typography variant="body1">
						You are unafraid to die in the God-Emperor’s name. If you have at
						least one untreated Critical Wound received in the Emperor's
						service, you gain +SL to Tests equal to your Willpower Bonus. Only
						Tests made to directly confront your foes may benefit from this
						bonus.
					</Typography>
				</>
			),
		},
		{
			summary: 'Medicae Maverick',
			details: (
				<>
					<Requirements text="1 Advance in any Medicae (Forbidden) Specialisation" />
					<Typography variant="body1">
						You have found forbidden ways of preserving the life and limbs of
						patients you treat, though your radical techniques are far from
						comfortable. As an Action, you may perform a quick procedure on an
						ally within Immediate Range. This operation can either turn a Major
						Break into a Minor Break, or fix a Minor Break instantly. This
						operation does not remove any Critical Wounds, and actually
						decreases the target’s maximum Critical Wounds by 1, but they no
						longer suffer the negative effects of the Major or Minor Break.
					</Typography>
				</>
			),
		},
		{
			summary: 'Mental Fortress',
			details: (
				<>
					<Requirements text="2 Advances in Discipline (Psychic)" />
					<Typography variant="body1">
						An open mind is like a fortress with its gates unbarred and
						unguarded, but the gates of your mind are sealed shut. Your mind
						cannot be read by psychic powers, and you reduce any Damage you
						would suffer from psychic powers by an amount equal to your
						Willpower Bonus.
					</Typography>
				</>
			),
		},
		{
			summary: 'Mimic',
			details: (
				<>
					<Requirements text="2 Advances in both Awareness (Hearing) and Rapport (Deception)" />
					<Typography variant="body1">
						Due to physiology-altering surgeries, inborn talent, or vocal
						training, you have the remarkable ability to mimic another person’s
						speech patterns and voice. You can mimic a person’s voice after you
						listen to them speak for at least one hour. This Talent does not
						allow you to speak a language you don’t know.
					</Typography>
				</>
			),
		},
		{
			summary: 'Overseer',
			details: (
				<>
					<Requirements text="2 Advances in Presence (Leadership)" />
					<Typography variant="body1">
						You’re practiced in instructing others to work just as well as
						yourself. As an Action, you may make a{' '}
						<b>Challenging (+0) (Leadership)</b>
						Test to aid an ally or subordinate. If you succeed, your target may
						use your Skill instead of their own for the next Test they make.
					</Typography>
				</>
			),
		},
		{
			summary: 'Pathologist',
			details: (
				<>
					<Requirements text="2 Advances in Medicae (Human)" />
					<Typography variant="body1">
						You have Advantage when performing autopsies to determine the cause
						and nature of someone’s death, and analyse any medical imbalances in
						their system.
					</Typography>
				</>
			),
		},
		{
			summary: 'Phlebotomist',
			details: (
				<>
					<Requirements text="3 Advances in Medicae" />
					<Typography variant="body1">
						You can perform phlebotomies and bloodletting, and are capable of
						examining an individual’s blood to learn about their health. When
						you make a successful melee attack you can choose to inflict the
						Bleeding Condition instead of dealing Damage.
					</Typography>
				</>
			),
		},
		{
			summary: 'Porter',
			details: (
				<>
					<Requirements text="2 Advances in Fortitude (Endurace)" />
					<Typography variant="body1">
						You’re strong as a grox, capable of carrying far more crucial gear
						than even those of similar strength. Your Maximum Encumbrance is
						equal to double your Strength Bonus, plus your Toughness Bonus.
					</Typography>
				</>
			),
		},
		{
			summary: 'Psychic Castigation',
			details: (
				<>
					<Requirements text="The Psyker Talent" />
					<Typography variant="body1">
						Those who dare intrude upon your mind find only the punishing lash
						of your psychic power when you repel their devious attacks. When you
						win an Opposed Willpower Test to resist a Psychic Power, the psyker
						manifesting the power suffers Wounds equal to the difference in SL
						you achieved on the Opposed Test.
					</Typography>
				</>
			),
		},
		{
			summary: 'Psychic Flood',
			details: (
				<>
					<Requirements text="The Psyker Talent" />
					<Typography variant="body1">
						When you open yourself fully to the empyrean, you can channel a
						flood of its roaring power to amplify your gifts, though such power
						comes at great risk. When you manifest a psychic power, you can
						choose to gain a number of Warp Charge up to your Willpower Bonus.
						If you successfully manifest the power, add +1 SL to the result for
						each Warp Charge you gained using this Talent.
					</Typography>
				</>
			),
		},
		{
			summary: 'Psyker',
			details: (
				<>
					<Requirements text="Cannot have the Blank Talent. This applies even during Character Creation" />
					<Typography variant="body1">
						The immaterium lies just behind reality, outside the perception of
						most creatures in the galaxy, but you are not most creatures. As a
						psyker, you are aware of the warp, though you may not understand it.
						You can access and unleash its tumultuous power into realspace.
						<br />
						<br />
						Channelling such power is fraught with perils, however, and death is
						far from the most frightening possibility one might face. When you
						acquire this Talent, you gain the ability to manifest{' '}
						<b>Psychic Powers</b>. You can also purchase Advances in the Psychic
						Mastery Skill and the Awareness (Psyniscience) Specialisation.
						<br />
						<br />
						When you gain this Talent, you learn one Minor Psychic Power.
						Additionally, select a Psychic Discipline and immediately gain one
						power of your choice from that discipline. You can spend 60 XP to
						purchase additional Minor Psychic Powers or 100 XP to purchase
						Psychic Powers from your chosen Discipline.
						<br />
						<br />
						You can purchase this Talent a number of times up to your Willpower
						Bonus. Each additional time you purchase this Talent, you access a
						new Psychic Discipline and one power of that Discipline.
					</Typography>
				</>
			),
		},
		{
			summary: 'Quickdraw',
			details: (
				<>
					<Requirements text="2 Advances in both Ranged (Pistols) and Reflexes" />
					<Typography variant="body1">
						You’ve trained yourself to ensure you always shoot first. When
						combat begins, you can draw and fire a Pistol before anyone else,
						regardless of Initiative order. If you are Surprised, you must make
						a <b>Hard (−20) Reflexes</b> Test to use this effect.
					</Typography>
				</>
			),
		},
		{
			summary: 'Rapid Reload',
			details: (
				<>
					<Requirements text="2 Advances in both Dexterity and Ranged" />
					<Typography variant="body1">
						You can reload some weapons faster than most. This Talent can be
						taken multiple times. Each time choose a ranged Specialisation. You
						can reload weapons relating to those Specialisations as a Free
						Action.
					</Typography>
				</>
			),
		},
		{
			summary: 'Read Lips',
			details: (
				<>
					<Requirements text="1 Advance in both Awareness (Sight) and Linguistics" />
					<Typography variant="body1">
						You’ve practised analysing the physicality of speech, recognizing
						the sounds people make by visual observation alone. Even if you
						can’t hear someone talk, you can understand what they're saying by
						reading their lips.
					</Typography>
				</>
			),
		},
		{
			summary: 'Registered Trader',
			details: (
				<>
					<Requirements text="2 Advances in Logic (Evaluation) and 2 Advances in Rapport (Haggle)" />
					<Typography variant="body1">
						You are either a licensed member of a chartist captain’s crew within
						the Merchant Fleet, a black market trader operating outside it, or
						are simply confident enough to pass yourself off as one of these.
						The base cost when you sell an item is increased from 50% (rounded
						up) to 100%. Representatives of the Administratum or local
						infractionists may visit you Between Missions to request a tithe to
						allow you to trade in such a way.
					</Typography>
				</>
			),
		},
		{
			summary: 'Sanctioned Psyker',
			details: (
				<>
					<Requirements text="The Psyker Talent. Can only be taken during character creation." />
					<Typography variant="body1">
						From the multitude of Psykers identified within the Imperium each
						day, you were marked as having the potential to be more than a
						sacrifice to fuel the Golden Throne. You have been tested,
						tormented, and subjected to rites and rituals that you shudder to
						recall.
						<br />
						<br />
						The experience was mentally and physically scarring, but it left you
						more resistant to the dangers of the warp and in control of your
						power.
						<br />
						<br />
						Your Warp Threshold is equal to double your Willpower Bonus. You
						also have a symbol to prove your sanctioned status.
					</Typography>
				</>
			),
		},
		{
			summary: 'Secret Identity',
			details: (
				<>
					<Typography variant="body1">
						You maintain a secret identity that allows you to appear to be a
						member of another Faction. With your GM’s permission, choose a
						Faction and a matching Duty in Chapter 3, or another reasonable duty
						in the Imperium. As long as you are dressed and behaving
						appropriately, you have +1 Influence with that Faction. Maintaining
						this masquerade requires Rapport (Deception) Tests when interacting
						with certain members of that faction.
					</Typography>
				</>
			),
		},
		{
			summary: 'Shock Assault',
			details: (
				<>
					<Requirements text="Agility 45, 3 Advances in Stealth" />
					<Typography variant="body1">
						Those who strike first strike hardest. You may take 2 Actions on
						your turn during a Surprise Round.
					</Typography>
				</>
			),
		},
		{
			summary: 'Skulker',
			details: (
				<>
					<Requirements text="1 Advance in Navigation and Stealth" />
					<Typography variant="body1">
						You have a talent for tailing people without being noticed. When you
						are attempting to follow a person or group using Navigation
						(Tracking), you do not need to make Stealth Tests to remain
						undetected by that individual. This loses effect if attention is
						drawn to you in some very obvious, or very foolish, way.
					</Typography>
				</>
			),
		},
		{
			summary: 'Slippery',
			details: (
				<>
					<Requirements text="2 Advances in Reflexes" />
					<Typography variant="body1">
						You’re hard to pin down. When you move out of Engagement and an
						opponent makes an immediate attack against you, they have
						Disadvantage on that attack Test. If you take this Talent twice you
						can Disengage as a Free Action.
					</Typography>
				</>
			),
		},
		{
			summary: 'Superior Commander',
			details: (
				<>
					<Requirements text="4 Advances in Presence (Leadership)" />
					<Typography variant="body1">
						You know how to take advantage of a dominant situation with precise
						commands. You can use your Action to give orders to your allies.
						Choose a number of allies equal to your current Superiority. Each
						ally can immediately Move or take an Action, other than use the
						Superior Commander Talent. No character can gain the benefit of this
						Talent more than once per round.
					</Typography>
				</>
			),
		},
		{
			summary: 'Suppressing Fire',
			details: (
				<>
					<Requirements text="2 Advances in Ranged" />
					<Typography variant="body1">
						You’ve learned how to unleash a hail of fire to pin down your
						enemies. When you Rapid Fire you can choose to deal no damage and
						attempt to suppress them instead. Your target and anyone within
						immediate range of them must make a Discipline (Fear) Test opposed
						by your Ranged Test. If you win, you inflict the Restrained
						Condition on your targets until the start of your next turn.
					</Typography>
				</>
			),
		},
		{
			summary: 'Sure-Footed',
			details: (
				<>
					<Requirements text="1 Advance in each of Athletics, Fortitude, and Reflexes" />
					<Typography variant="body1">
						You’re steady on your feet. If you have at least one point of
						Superiority you become Fast.
						<br />
						<br />
						Additionally, you have Advantage on Tests to resist or end the Prone
						Condition, you can stand up from Prone as a Free Action once per
						Turn if you are not Restrained, and you have Advantage on Tests to
						resist being moved from your position against your will.
					</Typography>
				</>
			),
		},
		{
			summary: 'Tactical Movement',
			details: (
				<>
					<Requirements text="1 Advance in both Athletics and Discipline" />
					<Typography variant="body1">
						You move in a calculated manner ensuring you can get into a safe
						position quickly. You can Take Cover as a Free Action.
					</Typography>
				</>
			),
		},
		{
			summary: 'Tenacious',
			details: (
				<>
					<Typography variant="body1">
						It's tough to keep you down. Whenever you suffer the Stunned
						Condition, you may immediately make a{' '}
						<b>Challenging (+0) Fortitude (Endurance)</b> Test to recover from
						the Condition.
					</Typography>
				</>
			),
		},
		{
			summary: 'Two-Handed Cleave',
			details: (
				<>
					<Requirements text="2 Advances in Melee (Two-handed)" />
					<Typography variant="body1">
						You’ve practised wide swings with formidably large weapons, intent
						on clearing entire swathes of enemies with each broad stroke. When
						you wield a melee weapon with the Two-handed Trait, it also gains
						the Spread Trait. Attacks you make with such a weapon do not strike
						you.
						<br />
						<br />
						This Talent can be taken multiple times. On the second and third
						time, choose one of the following:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Two-handed Brutalist:</b> When you wield a weapon with
										the Two-handed Trait, it also gains the Rend (+1) Trait.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Two-handed Sweep:</b> When you wield a weapon with the
										Two-handed Trait and hit a target in the leg you can choose
										to half the Damage dealt to force the target to make a{' '}
										<b>Hard (−20) Reflexes (Balance)</b> Test or fall Prone.
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
			summary: 'Unflinching Presence',
			details: (
				<>
					<Requirements text="3 Advances in Presence (Leadership)" />
					<Typography variant="body1">
						Your stoic presence fills the hearts of those around you with
						bravery even in the face of disadvantage and imminent defeat.
						Whenever you would lose Superiority, make a{' '}
						<b>Hard (−20) Presence (Leadership)</b> Test. If you succeed, you do
						not lose Superiority
					</Typography>
				</>
			),
		},
		{
			summary: 'Unremarkable',
			details: (
				<>
					<Requirements text="No Advances in Presence or any Presence Specialisation, unless acquired through the Random Talents Table. " />
					<Typography variant="body1">
						Few pay attention to your existence — you appear without status,
						beneath notice, another face in the endless crowds of the Imperium.
						<br />
						<br />
						When you are attired correctly, you can blend into an Imperial
						environment without making a Test, for example merging with a
						bustling throng, polishing a statue in a cathedral, or waiting on
						nobility at an event. Influential people will generally ignore you
						altogether unless attention is drawn to you. Though this Talent
						allows you to remain hidden and listen in on conversations it also
						imposes a Disadvantage on Presence and Rapport Tests targeting such
						high-status individuals. Additionally, the group does not lose
						Superiority when you suffer a Critical Wound or die.
					</Typography>
				</>
			),
		},
		{
			summary: 'Void Legs',
			details: (
				<>
					<Typography variant="body1">
						You are an experienced Void Traveller and are all but immune to any
						void-sickness due to the shifting of a vessel. You do not suffer
						Disadvantage due to environmental effects specific to the void, such
						as a ship rocking or zero gravity.
						<br />
						<br />
						You can take this Talent multiple times. Each time after the first
						choose one:
					</Typography>
					<BulletList
						bulletPoints={[
							{
								primary: (
									<>
										<b>Attitude Control:</b> You have mastered movement in the
										void, capable of quickly pushing yourself from surface to
										surface. You are Fast when moving in zero-gravity
										environments.
									</>
								),
							},
							{
								primary: (
									<>
										<b>Void Brawler:</b> You have experience fighting in the
										void. You have Advantage when making Melee Attacks in
										zero-gravity environments against characters who do not have
										the Void Legs Talent.
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
			summary: 'Well-Prepared',
			details: (
				<>
					<Typography variant="body1">
						You are used to anticipating material needs to complete a mission.
						Once per mission you can find a piece of equipment you need in your
						backpack, pockets, or slings. The piece of equipment must be
						Encumbrance 0 and could feasibly have been acquired recently. This
						could be anything from a set of Photo-visors you need to explore the
						crypts beneath a shrine, or a Combitool to restore a broken
						cogitator containing crucial clues. When you use this Talent, you
						must deduct the cost of the ‘prepared’ equipment from your Solars,
						representing you spending it earlier.
					</Typography>
				</>
			),
		},
	],
}
