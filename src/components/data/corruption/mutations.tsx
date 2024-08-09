import { Corruption } from 'types/character'

export const mutations: Corruption[] = [
	{
		_id: 'witch-mark',
		_type: 'mutation',
		roll: {
			start: 1,
			end: 5,
		},
		name: 'Witch-mark',
		description: (
			<>
				A small brand or mark of a specific chaos god or the eight pointed star
				forms upon your flesh. Roll on the Hit Location table (see page 211) to
				determine where it appears.
			</>
		),
	},
	{
		_id: 'wasted-frame',
		_type: 'mutation',
		roll: {
			start: 6,
			end: 10,
		},
		name: 'Wasted Frame',
		description: (
			<>
				Your pallor becomes corpse-like and your muscles waste away. Your
				Toughness is permanently reduced by 10 and Advances in Athletics or
				Fortitude now cost you double the XP.
			</>
		),
	},
	{
		_id: 'lashing-tentacle',
		_type: 'mutation',
		roll: {
			start: 11,
			end: 15,
		},
		name: 'Lashing Tentacle',
		description: (
			<>
				A tentacle sprouts from your body. Roll on the Hit Location table (page
				211) to determine where it appears. If it appears on a limb, it replaces
				it. Unarmed attacks made with the Tentacle gain the Reach and Inflict
				(Restrained) Traits.
			</>
		),
	},
	{
		_id: 'inhuman-beauty',
		_type: 'mutation',
		roll: {
			start: 16,
			end: 20,
		},
		name: 'Inhuman Beauty',
		description: (
			<>
				Your skin becomes uncannily flawless and people cannot help but stare.
				You gain +10 Fellowship whenever people can see your face, and your skin
				never blemishes or scars.
			</>
		),
	},
	{
		_id: 'iron-skin',
		_type: 'mutation',
		roll: {
			start: 21,
			end: 25,
		},
		name: 'Iron Skin',
		description: (
			<>
				Metal scales or ore deposits spread across your body. You gain +2 Armour
				on all locations, but your Agility is permanently reduced by 10.
			</>
		),
	},
	{
		_id: 'extra-mouth',
		_type: 'mutation',
		roll: {
			start: 26,
			end: 30,
		},
		name: 'Extra Mouth',
		description: (
			<>
				You grow an extra mouth. Roll on the Hit Location table to determine
				where it appears. The mouth seems to act of its own accord, whispering
				and infrequently screaming in a language you don’t know.
			</>
		),
	},
	{
		_id: 'searing-blood',
		_type: 'mutation',
		roll: {
			start: 31,
			end: 35,
		},
		name: 'Searing Blood',
		description: (
			<>
				Your veins carry searing acids or boiling tar in place of blood, though
				somehow the corrosive effects do not burn your own flesh. Whenever you
				take Wounds or suffer the Bleeding Condition, all creatures within
				Immediate Range suffer Damage equal to the Wounds lost.
			</>
		),
	},
	{
		_id: 'living-shadow',
		_type: 'mutation',
		roll: {
			start: 36,
			end: 40,
		},
		name: 'Living Shadow',
		description: (
			<>
				Your shadow does not match your own movements, and it looms large and
				visible regardless of the light. Whenever you are in darkness and cannot
				see it, you have the unshakeable feeling it is doing something terrible.
			</>
		),
	},
	{
		_id: 'swollen-brute',
		_type: 'mutation',
		roll: {
			start: 41,
			end: 45,
		},
		name: 'Swollen Brute',
		description: (
			<>
				You become bloated, your muscles expanding and your form becoming
				excessively corpulent or disturbingly muscular (or perhaps both). You
				have Advantage on Opposed Athletics Tests.
			</>
		),
	},
	{
		_id: 'extra-eye',
		_type: 'mutation',
		roll: {
			start: 46,
			end: 50,
		},
		name: 'Extra Eye',
		description: (
			<>
				An eye appears somewhere on your body. Roll on the Hit Location table to
				determine where it appears. The eye sees things you cannot. When you
				look through it, you count as using a Photo-Visors.
			</>
		),
	},
	{
		_id: 'twisted-horns',
		_type: 'mutation',
		roll: {
			start: 51,
			end: 55,
		},
		name: 'Twisted Horns',
		description: (
			<>
				Bony growths sprout from your head. Unnamed attacks made with your horns
				do not have the Ineffective Trait.
			</>
		),
	},
	{
		_id: 'daemonic-visage',
		_type: 'mutation',
		roll: {
			start: 56,
			end: 60,
		},
		name: 'Daemonic Visage',
		description: (
			<>
				Your appearance twists into something bestial or abhorrent. You suffer
				−2 SL on Fellowship Tests whenever people can see your face, with the
				exception of Rapport (Intimidation) Tests, which instead gain +2 SL.
			</>
		),
	},
	{
		_id: 'digitigrade-legs',
		_type: 'mutation',
		roll: {
			start: 61,
			end: 65,
		},
		name: 'Digitigrade Legs',
		description: (
			<>
				Your legs twist into a muscular form that greatly enhances your agility.
				You have Advantage on Athletics Tests to run, leap, or otherwise use
				your legs.
			</>
		),
	},
	{
		_id: 'feathers',
		_type: 'mutation',
		roll: {
			start: 66,
			end: 70,
		},
		name: 'Feathers',
		description: (
			<>
				Feathers grow from your body in a spotty fashion. Roll on the Hit
				Location table twice to determine where they appear. They may be of any
				colour, or multiple colours.
			</>
		),
	},
	{
		_id: 'warp-claws',
		_type: 'mutation',
		roll: {
			start: 71,
			end: 75,
		},
		name: 'Warp Claws',
		description: (
			<>
				Your fingers sprout and sharpen into horrific dark talons. Your Unarmed
				attacks lose the Ineffective Trait and gain Rend (1).
			</>
		),
	},
	{
		_id: 'photonic-irregularity',
		_type: 'mutation',
		roll: {
			start: 76,
			end: 80,
		},
		name: 'Photonic Irregularity',
		description: (
			<>
				You do not appear in mirrors or other reflective surfaces, or in video
				recordings that use the visual light spectrum.
			</>
		),
	},
	{
		_id: 'festering-wound',
		_type: 'mutation',
		roll: {
			start: 81,
			end: 85,
		},
		name: 'Festering Wound',
		description: (
			<>
				One of your old wounds returns and refuses to heal, no matter what you
				do. A Critical Wound you received some time in the past returns and
				cannot be healed. You are considered to always have one untreated
				Critical Wound.
			</>
		),
	},
	{
		_id: 'lolling-tongue',
		_type: 'mutation',
		roll: {
			start: 86,
			end: 90,
		},
		name: 'Lolling Tongue',
		description: (
			<>
				Your tongue becomes unwieldy and spasms erratically. You suffer −10 to
				all Tests that require speech.
			</>
		),
	},
	{
		_id: 'fleshmetal',
		_type: 'mutation',
		roll: {
			start: 91,
			end: 95,
		},
		name: 'Fleshmetal',
		description: (
			<>
				Your armour and cybernetic implants fuse with your flesh and can even
				regenerate. You can repair items merged with you using your Fortitude
				Skill. Tests to repair these items using Tech or other conventional
				methods have Disadvantage. You cannot change your armour or don
				additional armour.
			</>
		),
	},
	{
		_id: 'warp-regeneration',
		_type: 'mutation',
		roll: {
			start: 96,
			end: 100,
		},
		name: 'Warp Regeneration',
		description: (
			<>
				Corruption seethes through your flesh, sewing your body back together
				time and time again whether you will it or not. Your Fate is reduced to
				0 and you cannot regain Fate. However, you always regenerate 1 Wound at
				the beginning of your turn. In addition, any lost limbs regrow after 1
				day.
			</>
		),
	},
]