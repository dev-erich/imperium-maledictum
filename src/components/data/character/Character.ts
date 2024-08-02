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
	corruptionCount: CurrentTotal
	criticalWounds: CharacterCriticalWound[]
	armourSlots: CharacterArmour[]
	isFated: boolean

	//? Possible alternatives?
	// let fieldName: keyof typeof object;
	// for ( fieldName in data)
	// 	{
	// 			this[fieldName] = data[fieldName] ?? getDefaultValueForFieldThatHasThisName(fieldName)

	constructor(data?: Partial<Character>) {
		this.name = data?.name ?? ''
		this.role = data?.role ?? undefined
		this.details = data?.details ?? initDetails()
		this.characteristics = data?.characteristics ?? initCharacterisitics()
		this.skills = data?.skills ?? initCharacterSkills()
		this.specialisations = data?.specialisations ?? []
		this.initiative = data?.initiative ?? 0
		this.fate = data?.fate ?? initCurrentTotal({ total: 3 })
		this.wounds = data?.wounds ?? initCurrentTotal()
		this.warpCharges = data?.warpCharges ?? initCurrentTotal()
		this.corruptions = data?.corruptions ?? []
		this.corruptionCount = data?.corruptionCount ?? initCurrentTotal()
		this.criticalWounds = data?.criticalWounds ?? []
		this.armourSlots = data?.armourSlots ?? initCharacterArmour()
		this.isFated = data?.isFated ?? false
	}

	// getCharacteristic = (_key: string) => {
	// 	return this.characteristics.find(
	// 		(characteristic) => characteristic._key === _key
	// 	)
	// }

	// getCriticalWoundsCount = () => {
	// 	return this.criticalWounds.length
	// }

	// setCorruptionCount = (count: number) => {
	// 	if (count < 0) this.corruptionCount.current = 0
	// 	else this.corruptionCount.current = count
	// }

	// // addCorruptionCount = (count: number) => {
	// // 	// validate if decrementing
	// // 	if (this.corruptionCount.current > 0 && count < 0) {
	// // 		if (this.corruptionCount.current + count < 0) {
	// // 			this.corruptionCount.current = 0
	// // 		} else {
	// // 			this.corruptionCount.current += count
	// // 		}
	// // 	}

	// // 	// validate if incrementing
	// // 	if (count > 0) {
	// // 		this.corruptionCount.current += count
	// // 	}
	// // }

	// setFateTotal = (count: number) => {
	// 	this.fate.total = count
	// }

	// setFateCurrent = (count: number) => {
	// 	if (count < 0) this.fate.current = 0
	// 	else if (count <= this.fate.total) this.fate.current = count
	// }

	// addFate = (count: number) => {
	// 	// validate if decrementing
	// 	if (this.fate.current > 0 && count < 0) {
	// 		if (this.fate.current + count < 0) {
	// 			this.fate.current = 0
	// 		} else {
	// 			this.fate.current += count
	// 		}
	// 	}

	// 	// validate if incrementing
	// 	if (this.fate.current < this.fate.total && count > 0) {
	// 		if (this.fate.current + count > this.fate.total) {
	// 			this.fate.current = this.fate.total
	// 		} else {
	// 			this.fate.current += count
	// 		}
	// 	}
	// }
}
