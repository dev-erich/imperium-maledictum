import {
	CharacterArmour,
	CharacterDetails,
	Characteristic,
	CurrentTotal,
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

export const updateCharacteristic = (
	character: Character,
	key: string,
	type: 'starting' | 'advances',
	value: number
) => {
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
