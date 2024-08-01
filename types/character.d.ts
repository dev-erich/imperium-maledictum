export type CharacterRole =
	| 'Interlocutor'
	| 'Mystic'
	| 'Penumbra'
	| 'Savant'
	| 'Warrior'
	| 'Zealot'
	| undefined

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

export type BodyPart =
	| 'head'
	| 'leftLeg'
	| 'rightLeg'
	| 'leftArm'
	| 'rightArm'
	| 'body'

export type CharacterCriticalWound = {
	_id: string
	location: string
	description: string
}

export type CharacterArmour = {
	_key: BodyPart
	name: string
	hitDie: string
	value: number
}

export type CorruptionKey = 'mutation' | 'malignance'

export type Corruption = {
	_type: CorruptionKey
	roll: {
		start: number
		end: number
	}
	name: string
	description: React.ReactNode
}

export type StartingAdvances = {
	starting: number
	advances: number
}

export type CurrentTotal = {
	current: number
	total: number
}
