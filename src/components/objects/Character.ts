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
	CriticalWound,
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
	criticalWounds: CriticalWound[]
	armourSlots: CharacterArmour[]

	constructor() {
		this.name = ''
		this.role = undefined
		this.details = initDetails()
		this.characteristics = initCharacterisitics()
		this.skills = initCharacterSkills()
		this.specialisations = []
		this.initiative = 0
		this.fate = initCurrentTotal()
		this.wounds = initCurrentTotal()
		this.warpCharges = initCurrentTotal()
		this.corruptions = []
		this.criticalWounds = []
		this.armourSlots = initCharacterArmour()
	}

	getCharacteristic = (_key: string) => {
		return this.characteristics.find(
			(characteristic) => characteristic._key === _key
		)
	}
}
