import { Corruption } from 'types/character'

export const malignancies: Corruption[] = [
	{
		_id: 'dark-hearted',
		_type: 'malignance',
		roll: {
			start: 1,
			end: 5,
		},
		name: 'Dark-hearted',
		description: (
			<>
				You grow increasingly cruel, callous, and vindictive. Whenever you gain
				Corruption, you gain 1 additional Corruption.
			</>
		),
	},
	{
		_id: 'awful-cravings',
		_type: 'malignance',
		roll: {
			start: 6,
			end: 10,
		},
		name: 'Awful Cravings',
		description: (
			<>
				You develop an overwhelming desire to consume an inedible or socially
				unacceptable substance. If you go longer than one week without sating
				your craving, you become Fatigued until you do so.
			</>
		),
	},
	{
		_id: 'overwhelming-obsession',
		_type: 'malignance',
		roll: {
			start: 11,
			end: 15,
		},
		name: 'Overwhelming Obsession',
		description: (
			<>
				You become obsessed with whatever caused this mutation, and struggle to
				focus on anything else when left alone. During downtime, you must make a
				<b>Difficult (−10) Willpower (Discipline)</b> Test to take an Endeavour.
			</>
		),
	},
	{
		_id: 'ill-fortuned',
		_type: 'malignance',
		roll: {
			start: 16,
			end: 20,
		},
		name: 'Ill-fortuned',
		description: (
			<>
				Chance seems to mock you at the most crucial of opportunities. Whenever
				you Spend Fate, roll 1d10. On a result of 7–10, the Fate point has no
				effect but is spent anyway.
			</>
		),
	},
	{
		_id: 'irrational-nausea',
		_type: 'malignance',
		roll: {
			start: 21,
			end: 25,
		},
		name: 'Irrational Nausea',
		description: (
			<>
				You feel sick at the sight, sound, or smell of something otherwise
				innocuous, such as prayer books and holy items, cherubs, Human laughter,
				or fresh food. When you encounter an object of your revulsion, you are
				Stunned until the end of your next turn.
			</>
		),
	},
	{
		_id: 'unshakable-paranoia',
		_type: 'malignance',
		roll: {
			start: 26,
			end: 30,
		},
		name: 'Unshakable Paranoia',
		description: (
			<>
				You grow increasingly distrustful, expecting betrayal at any moment from
				even your closest allies. You can no longer use or gain the benefits of
				the Help action.
			</>
		),
	},
	{
		_id: 'dark-whispers',
		_type: 'malignance',
		roll: {
			start: 31,
			end: 35,
		},
		name: 'Dark Whispers',
		description: (
			<>
				Unintelligible alien and unnatural voices constantly mutter in your
				ears. You suffer Disadvantage on Awareness (Sound) Tests.
			</>
		),
	},
	{
		_id: 'phantom-memories',
		_type: 'malignance',
		roll: {
			start: 36,
			end: 40,
		},
		name: 'Phantom Memories',
		description: (
			<>
				You have memories of events that — according to everyone else — never
				happened. It is impossible for you to tell which of your memories are
				true and which are false.
			</>
		),
	},
	{
		_id: 'irrational-fear',
		_type: 'malignance',
		roll: {
			start: 41,
			end: 45,
		},
		name: 'Irrational Fear',
		description: (
			<>
				Your character feels horror and revulsion at some innocuous, even good,
				thing. Work with your GM to choose the object of your fear. When you
				encounter it, you must succeed at a{' '}
				<b>Challenging (+0) Discipline (Fear)</b>
				Test or become Frightened.
			</>
		),
	},
	{
		_id: 'blackouts',
		_type: 'malignance',
		roll: {
			start: 46,
			end: 50,
		},
		name: 'Blackouts',
		description: (
			<>
				You suffer from inexplicable blackouts. Whenever roll a Fumble on a
				Test, you must make a <b>Challenging (+0) Fortitude (Endurance)</b> Test
				or become Incapacitated for 1d10 rounds.
			</>
		),
	},
	{
		_id: 'morbid-fascination',
		_type: 'malignance',
		roll: {
			start: 51,
			end: 55,
		},
		name: 'Morbid Fascination',
		description: (
			<>
				You become obsessed with the sight of blood and bodily harm. If a
				character within your Zone, including yourself, suffers a Critical
				Wound, you must make a <b>Challenging (+0) Discipline</b> Test or be
				Stunned until the end of your next turn.
			</>
		),
	},
	{
		_id: 'wheels-within-wheels',
		_type: 'malignance',
		roll: {
			start: 56,
			end: 60,
		},
		name: 'Wheels Within Wheels',
		description: (
			<>
				You become hyper aware of all the subtle tics and tells that give away
				mortal desires. You have Advantage on all Intuition (People) Tests.
			</>
		),
	},
	{
		_id: 'inescapable-itch',
		_type: 'malignance',
		roll: {
			start: 61,
			end: 65,
		},
		name: 'Inescapable Itch',
		description: (
			<>
				You constantly feel like something revolting is crawling beneath your
				skin.
			</>
		),
	},
	{
		_id: 'warp-sense',
		_type: 'malignance',
		roll: {
			start: 66,
			end: 70,
		},
		name: 'Warp Sense',
		description: (
			<>
				If you close your eyes, you can see the faint skein of the immaterium
				simmering beneath reality. You gain 1 Advance in Awareness
				(Psyniscience), even if you do not have the Psyker Talent.
			</>
		),
	},
	{
		_id: 'the-eyes',
		_type: 'malignance',
		roll: {
			start: 71,
			end: 75,
		},
		name: 'The Eyes',
		description: (
			<>
				Every shadow you see appears to crawl with shimmering eyes that watch
				you. You must make a <b>Difficult (−10) Discipline (Fear)</b> Test to
				enter shadows or complete darkness, or become Frightened.
			</>
		),
	},
	{
		_id: 'void-gaze',
		_type: 'malignance',
		roll: {
			start: 76,
			end: 80,
		},
		name: 'Void Gaze',
		description: (
			<>
				The unspeakable horrors of the void shimmer across your eyes. Creatures
				who meet your unobstructed gaze must make a{' '}
				<b>Challenging (+0) Willpower (Fear)</b> Test or become Frightened of
				you.
			</>
		),
	},
	{
		_id: 'ashen-taste',
		_type: 'malignance',
		roll: {
			start: 81,
			end: 85,
		},
		name: 'Ashen Taste',
		description: <>Everything you eat tastes like ash, blood, or bones.</>,
	},
	{
		_id: 'dark-prophecies',
		_type: 'malignance',
		roll: {
			start: 86,
			end: 90,
		},
		name: 'Dark Prophecies',
		description: (
			<>
				You are granted brief flashes of agonies yet to come. Once per day, when
				you would suffer a Critical Wound as the result of an attack, you may
				claim that you foresaw this moment. You automatically avoid the attack
				and take no damage, but gain 1 Corruption as you steer closer towards a
				twisted fate.
			</>
		),
	},
	{
		_id: 'warp-patron',
		_type: 'malignance',
		roll: {
			start: 91,
			end: 95,
		},
		name: 'Warp Patron',
		description: (
			<>
				You have gained the attention of a daemonic entity that seeks to
				manipulate your fate to their own unknowable end. You gain an additional
				Fate point, but whenever you Spend or Burn Fate, you count as
				experiencing Minor Exposure to Corruption
			</>
		),
	},
	{
		_id: 'psychic-awakening',
		_type: 'malignance',
		roll: {
			start: 96,
			end: 100,
		},
		name: 'Psychic Awakening',
		description: (
			<>
				Your connection to the Warp is violently wrenched open. You gain the
				Psyker Talent and one random Minor Psychic Power. Whenever you roll on
				the Perils of the Warp table you gain 1 additional Corruption.
			</>
		),
	},
]
