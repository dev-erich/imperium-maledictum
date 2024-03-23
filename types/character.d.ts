export interface Character {
	name?: string
	role?: Role
	initiative?: number
	fate?: CurrentTotal
	wounds?: CurrentTotal
	warp?: CurrentTotal
	corruption?: {
		mutations?: string
		malignancies?: string
	}
	criticalWounds?: CriticalWound[]
	characteristics?: Characteristic[]
	armour?: {
		head?: CurrentTotal
		leftArm?: CurrentTotal
		rightArm?: CurrentTotal
		leftLeg?: CurrentTotal
		rightLeg?: CurrentTotal
		body?: CurrentTotal
	}
}

export type Role =
	| 'Interlocutor'
	| 'Mystic'
	| 'Penumbra'
	| 'Savant'
	| 'Warrior'
	| 'Zealot'

export type Characteristic = {
	name: string
	shortName: string
}

export type CriticalWound = {
	location?: string
	effect?: string
}

export type CurrentTotal = {
	current?: string
	total?: string
}

export const CharacteristicsObj: Characteristic[] = [
	{
		name: 'Weapon Skill',
		shortName: 'WS',
	},
	{
		name: 'Ballistic Skill',
		shortName: 'BS',
	},
	{
		name: 'Strength',
		shortName: 'STR',
	},
	{
		name: 'Toughness',
		shortName: 'TGH',
	},
	{
		name: 'Agility',
		shortName: 'AG',
	},
	{
		name: 'Intelligence',
		shortName: 'INT',
	},
	{
		name: 'Perception',
		shortName: 'PER',
		count: 0,
	},
	{
		name: 'Willpower',
		shortName: 'WIL',
	},
	{
		name: 'Fellowship',
		shortName: 'FEL',
	},
] as const
