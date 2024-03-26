export type CharacterRole =
	| undefined
	| 'Interlocutor'
	| 'Mystic'
	| 'Penumbra'
	| 'Savant'
	| 'Warrior'
	| 'Zealot'

export type CharacteristicKey =
	| 'weaponSkill'
	| 'ballisticSkill'
	| 'strength'
	| 'toughness'
	| 'agility'
	| 'intelligence'
	| 'perception'
	| 'willpower'
	| 'fellowship'

export type Characteristic = {
	_key: CharacteristicKey
	name: string
	code: string
	values: StartingAdvances
}

export type SkillKey =
	| 'athletics'
	| 'awareness'
	| 'dexterity'
	| 'discipline'
	| 'fortitude'
	| 'intuition'
	| 'linguistics'
	| 'logic'
	| 'lore'
	| 'medicae'
	| 'melee'
	| 'navigation'
	| 'presence'
	| 'piloting'
	| 'psychicMastery'
	| 'ranged'
	| 'rapport'
	| 'reflexes'
	| 'stealth'
	| 'tech'

export type CharacterSkill = {
	_key: SkillKey
	name: string
	characteristicKey: CharacteristicKey
	advances: number
}

export type CharacterSpecialisation = {
	_key: string
	name: string
	skillkey: SkillKey
	advances: number
}

export type CharacterDetails = {
	origin: string
	faction: string
	patron: string
	age: number
	eyes: string
	hair: string
	height: string
	weight: string
	handedness: string
	distinguishingFeatures: string
}

export type ArmourKey =
	| 'head'
	| 'leftArm'
	| 'rightArm'
	| 'leftLeg'
	| 'rightLeg'
	| 'body'

export type CharacterArmour = {
	_key: ArmourKey
	name: string
	hitDie: number[]
	value: number
}

export type CorruptionKey = 'mutation' | 'malignance'

export type Corruption = {
	_type: CorruptionKey
	name: string
	description: string
}

export type StartingAdvances = {
	starting: number
	advances: number
}

export type CriticalWound = {
	location: string
	description: string
	_key: string
}

export type CurrentTotal = {
	current: number
	total: number
}
