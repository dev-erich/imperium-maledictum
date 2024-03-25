import {
	initCharacterArmour,
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
} from 'types/character'

export default class Character {
	name: string
	role: CharacterRole
	details: CharacterDetails
	characteristics: Characteristic[]
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
