import {
	CharacterArmour,
	CharacterDetails,
	CharacterSkill,
	CharacterSpecialisation,
	Characteristic,
	CurrentTotal,
	SkillKey,
	StartingAdvances,
} from 'types/character'
import { Character } from '.'

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

export const initCurrentTotal = (): CurrentTotal => {
	return {
		current: 0,
		total: 0,
	}
}

export const initStartingAdvances = (): StartingAdvances => {
	return {
		advances: 0,
		starting: 0,
	}
}

export const getCharacteristic = (
	character: Character,
	key: string
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

export const updateCharacteristic = (
	character: Character,
	key: string,
	type: 'starting' | 'advances',
	value: number
): Characteristic[] => {
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
	return newCharacteristics
}

export const getSkill = (character: Character, key: string): CharacterSkill => {
	const skill = character.skills.find((char) => char._key === key)
	if (skill) return skill
	return {
		_key: 'athletics',
		name: 'Not Found',
		advances: 0,
		characteristicKey: 'agility',
	}
}

export const updateSkill = (
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

export const updateSpecialisationAdvances = (
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

export const updateSpecialisationName = (
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

export const updateSpecialisationReqSkill = (
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
	console.log('🚀 \n newSpecialisation:', newSpecialisation)
	return newSpecialisation
}
