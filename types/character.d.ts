export interface Character {
	name?: string
	role?: Role
	fate?: {
		current?: number
		total?: number
	}
	corruption?: {
		mutations?: string
		malignancies?: string
		total?: number
	}
	characteristics?: Characteristic[]
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
