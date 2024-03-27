import { getStatBonus } from '@utils'
import { Character } from '.'
import {
	CharacterArmour,
	CharacterDetails,
	CharacterSkill,
	CharacterSpecialisation,
	Characteristic,
	CharacteristicKey,
	CurrentTotal,
	SkillKey,
	StartingAdvances,
} from 'types/character'

export const initDetails = (): CharacterDetails => {
	return {
		origin: '',
		faction: '',
		patron: '',
		age: 0,
		eyes: '',
		hair: '',
		height: '',
		weight: '',
		handedness: '',
		distinguishingFeatures: '',
	}
}

export const initCharacterisitics = (): Characteristic[] => {
	return [
		{
			_key: 'weaponSkill',
			name: 'Weapon Skill',
			code: 'WS',
			values: initStartingAdvances(),
		},
		{
			_key: 'ballisticSkill',
			name: 'Ballistics Skill',
			code: 'BS',
			values: initStartingAdvances(),
		},
		{
			_key: 'strength',
			name: 'Strength',
			code: 'STR',
			values: initStartingAdvances(),
		},
		{
			_key: 'toughness',
			name: 'Toughness',
			code: 'TGH',
			values: initStartingAdvances(),
		},
		{
			_key: 'agility',
			name: 'Agility',
			code: 'AG',
			values: initStartingAdvances(),
		},
		{
			_key: 'intelligence',
			name: 'Intelligence',
			code: 'INT',
			values: initStartingAdvances(),
		},
		{
			_key: 'perception',
			name: 'Perception',
			code: 'PER',
			values: initStartingAdvances(),
		},
		{
			_key: 'willpower',
			name: 'Willpower',
			code: 'WIL',
			values: initStartingAdvances(),
		},
		{
			_key: 'fellowship',
			name: 'Fellowship',
			code: 'FEL',
			values: initStartingAdvances(),
		},
	]
}

export const initCharacterSkills = (): CharacterSkill[] => {
	return [
		{
			_key: 'athletics',
			name: 'Athletics',
			advances: 0,
			characteristicKey: 'strength',
		},
		{
			_key: 'awareness',
			name: 'Awareness',
			advances: 0,
			characteristicKey: 'perception',
		},
		{
			_key: 'dexterity',
			name: 'Dexterity',
			advances: 0,
			characteristicKey: 'agility',
		},
		{
			_key: 'discipline',
			name: 'Discipline',
			advances: 0,
			characteristicKey: 'willpower',
		},
		{
			_key: 'fortitude',
			name: 'Fortitude',
			advances: 0,
			characteristicKey: 'toughness',
		},
		{
			_key: 'intuition',
			name: 'Intuition',
			advances: 0,
			characteristicKey: 'perception',
		},
		{
			_key: 'linguistics',
			name: 'Linguistics',
			advances: 0,
			characteristicKey: 'intelligence',
		},
		{
			_key: 'logic',
			name: 'Logic',
			advances: 0,
			characteristicKey: 'intelligence',
		},
		{
			_key: 'lore',
			name: 'Lore',
			advances: 0,
			characteristicKey: 'intelligence',
		},
		{
			_key: 'medicae',
			name: 'Medicae',
			advances: 0,
			characteristicKey: 'intelligence',
		},
		{
			_key: 'melee',
			name: 'Melee',
			advances: 0,
			characteristicKey: 'weaponSkill',
		},
		{
			_key: 'navigation',
			name: 'Navigation',
			advances: 0,
			characteristicKey: 'intelligence',
		},
		{
			_key: 'presence',
			name: 'Presence',
			advances: 0,
			characteristicKey: 'willpower',
		},
		{
			_key: 'piloting',
			name: 'Piloting',
			advances: 0,
			characteristicKey: 'agility',
		},
		{
			_key: 'psychicMastery',
			name: 'Psychic\nMastery',
			advances: 0,
			characteristicKey: 'willpower',
		},
		{
			_key: 'ranged',
			name: 'Ranged',
			advances: 0,
			characteristicKey: 'ballisticSkill',
		},
		{
			_key: 'rapport',
			name: 'Rapport',
			advances: 0,
			characteristicKey: 'fellowship',
		},
		{
			_key: 'reflexes',
			name: 'Reflexes',
			advances: 0,
			characteristicKey: 'agility',
		},
		{
			_key: 'stealth',
			name: 'Stealth',
			advances: 0,
			characteristicKey: 'agility',
		},
		{
			_key: 'tech',
			name: 'Tech',
			advances: 0,
			characteristicKey: 'intelligence',
		},
	]
}

export const initCharacterArmour = (): CharacterArmour[] => {
	return [
		{
			_key: 'head',
			name: 'Head',
			hitDie: [1],
			value: 0,
		},
		{
			_key: 'leftArm',
			name: 'Left Arm',
			hitDie: [2],
			value: 0,
		},
		{
			_key: 'rightArm',
			name: 'Right Arm',
			hitDie: [3],
			value: 0,
		},
		{
			_key: 'leftLeg',
			name: 'Left Leg',
			hitDie: [4],
			value: 0,
		},
		{
			_key: 'rightLeg',
			name: 'Right Leg',
			hitDie: [5],
			value: 0,
		},
		{
			_key: 'body',
			name: 'Body',
			hitDie: [6, 7, 8, 9, 0],
			value: 0,
		},
	]
}

export const initCurrentTotal = (args?: {
	current?: number
	total?: number
}): CurrentTotal => {
	const { current, total } = args ?? {}
	return {
		current: current ? current : 0,
		total: total ? total : 0,
	}
}

export const initStartingAdvances = (args?: {
	advances?: number
	starting?: number
}): StartingAdvances => {
	const { advances, starting } = args ?? {}
	return {
		advances: advances ? advances : 0,
		starting: starting ? starting : 0,
	}
}

export const getCharacteristic = (
	character: Character,
	key: CharacteristicKey
): Characteristic => {
	const characteristic = character.characteristics.find(
		(char) => char._key === key
	)
	if (characteristic) return characteristic
	return {
		_key: 'agility',
		code: 'notFound',
		name: 'Not Found',
		values: {
			advances: 0,
			starting: 0,
		},
	}
}

export const setCharacteristic = (
	character: Character,
	key: string,
	type: 'starting' | 'advances',
	value: number
): Character => {
	const newCharacteristics = character.characteristics.map((char) => {
		if (char._key === key) {
			return {
				...char,
				values: {
					...char.values,
					[type]: value,
				},
			}
		}
		return char
	})

	const totalWounds = setCharacterWounds({
		...character,
		characteristics: newCharacteristics,
	})

	const totalCorruption = setCharacterCorruption({
		...character,
		characteristics: newCharacteristics,
	})

	return {
		...character,
		wounds: { ...character.wounds, total: totalWounds },
		corruption: { ...character.corruption, total: totalCorruption },
		characteristics: newCharacteristics,
	}
}

export const getSkill = (
	character: Character,
	key: SkillKey
): CharacterSkill => {
	const skill = character.skills.find((char) => char._key === key)
	if (skill) return skill
	return {
		_key: 'athletics',
		name: 'Not Found',
		advances: 0,
		characteristicKey: 'agility',
	}
}

export const setSkill = (
	character: Character,
	key: string,
	value: number
): CharacterSkill[] => {
	const newCharacteristics = character.skills.map((skill) => {
		if (skill._key === key) {
			return {
				...skill,
				advances: value,
			}
		}
		return skill
	})
	return newCharacteristics
}

export const getSpecialisation = (
	character: Character,
	key: string
): CharacterSpecialisation | undefined => {
	const specialisation = character.specialisations.find(
		(spec) => spec._key === key
	)
	if (specialisation) return specialisation
	return undefined
}

export const setSpecialisationAdvances = (
	character: Character,
	key: string,
	value: number
): CharacterSpecialisation[] => {
	const newSpecialisation = character.specialisations.map((spec) => {
		if (spec._key === key) {
			return {
				...spec,
				advances: value,
			}
		}
		return spec
	})
	return newSpecialisation
}

export const setSpecialisationName = (
	character: Character,
	key: string,
	value: string
): CharacterSpecialisation[] => {
	const newSpecialisation = character.specialisations.map((spec) => {
		if (spec._key === key) {
			return {
				...spec,
				name: value,
			}
		}
		return spec
	})
	return newSpecialisation
}

export const setSpecialisationReqSkill = (
	character: Character,
	key: string,
	value: string
): CharacterSpecialisation[] => {
	const skillKey = value.toLowerCase()
	const newSpecialisation = character.specialisations.map((spec) => {
		if (spec._key === key) {
			return {
				...spec,
				skillkey: skillKey as SkillKey,
			}
		}
		return spec
	})
	return newSpecialisation
}

export const setFate = (
	character: Character,
	current?: number,
	total?: number
): CurrentTotal => {
	const { fate } = character
	const newFate: CurrentTotal = {
		current: current ? current : fate.current,
		total: total ? total : fate.total,
	}
	return newFate
}

export const setCharacterWounds = (character: Character): number => {
	const strCharacteristic = getCharacteristic(character, 'strength')
	const tghCharacteristic = getCharacteristic(character, 'toughness')
	const wilCharacteristic = getCharacteristic(character, 'willpower')
	
	const strBonus = getStatBonus(
		strCharacteristic.values.advances,
		strCharacteristic.values.starting
	)
	const tghBonus = getStatBonus(
		tghCharacteristic.values.advances,
		tghCharacteristic.values.starting
	)
	const wilBonus = getStatBonus(
		wilCharacteristic.values.advances,
		wilCharacteristic.values.starting
	)

	return strBonus + 2 * tghBonus + wilBonus
}

export const setCharacterCorruption = (character: Character): number => {
	const tghCharacteristic = getCharacteristic(character, 'toughness')
	const wilCharacteristic = getCharacteristic(character, 'willpower')

	const tghBonus = getStatBonus(
		tghCharacteristic.values.advances,
		tghCharacteristic.values.starting
	)
	const wilBonus = getStatBonus(
		wilCharacteristic.values.advances,
		wilCharacteristic.values.starting
	)

	return tghBonus + wilBonus
}
