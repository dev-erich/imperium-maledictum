import {
	initCharacterArmour,
	initCharacterSkills,
	initCharacterisitics,
	initCurrentTotal,
	initDetails,
} from '.'

import {
	CharacterDetails,
	Corruption,
	CharacterCriticalWound,
	CurrentTotal,
	CharacterRole,
	Characteristic,
	CharacterArmour,
	CharacterSkill,
	CharacterSpecialisation,
} from 'types/character'

export default class Character {
	name: string
	role: CharacterRole
	details: CharacterDetails
	characteristics: Characteristic[]
	skills: CharacterSkill[]
	specialisations: CharacterSpecialisation[]
	initiative: number
	fate: CurrentTotal
	wounds: CurrentTotal
	warpCharges: CurrentTotal
	corruptions: Corruption[]
	corruption: CurrentTotal
	criticalWounds: CharacterCriticalWound[]
	armourSlots: CharacterArmour[]
	isFated: boolean

	constructor() {
		this.name = ''
		this.role = undefined
		this.details = initDetails()
		this.characteristics = initCharacterisitics()
		this.skills = initCharacterSkills()
		this.specialisations = []
		this.initiative = 0
		this.fate = initCurrentTotal({ total: 3 })
		this.wounds = initCurrentTotal()
		this.warpCharges = initCurrentTotal()
		this.corruptions = []
		this.corruption = initCurrentTotal()
		this.criticalWounds = []
		this.armourSlots = initCharacterArmour()
		this.isFated = false
	}

	getCharacteristic = (_key: string) => {
		return this.characteristics.find(
			(characteristic) => characteristic._key === _key
		)
	}
}
