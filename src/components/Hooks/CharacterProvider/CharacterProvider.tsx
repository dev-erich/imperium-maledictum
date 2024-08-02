import { Character } from '@data'
import { uid } from '@utils'
import React, {
	useState,
	useEffect,
	useCallback,
	createContext,
	useContext,
} from 'react'
import { CorruptionKey } from 'types/character'

interface CharacterProviderProps {
	children?: React.ReactNode
}

export const CharacterContext = createContext<{
	character: Character
	setCharacter: React.Dispatch<React.SetStateAction<Character>>
	resetCharacter: () => void
}>({
	character: new Character(),
	setCharacter: () => {},
	resetCharacter: () => {},
})

export default function CharacterProvider({
	children,
}: CharacterProviderProps) {
	const [character, setCharacter] = useState<Character>(new Character())

	const saveToLocalStorage = useCallback((characterData: Character) => {
		localStorage.setItem('character', JSON.stringify(characterData))
	}, [])

	const resetCharacter = useCallback(() => {
		setCharacter(new Character())
		localStorage.removeItem('character')
		console.log('Reset Character...')
	}, [])

	useEffect(() => {
		const storedCharacterData = localStorage.getItem('character')
		if (storedCharacterData) {
			const character: Character = JSON.parse(storedCharacterData)
			if (character.name) setCharacter(new Character(character))
		} else {
			console.error('Error getting character...')
		}
	}, [])

	useEffect(() => {
		console.log('Saving Character...')

		const timer = setTimeout(() => {
			console.log(character)
			saveToLocalStorage(character)
			console.log('Saved Character!')
		}, 500)

		return () => clearTimeout(timer)
	}, [character, saveToLocalStorage])

	return (
		<CharacterContext.Provider
			value={{ character, setCharacter, resetCharacter }}
		>
			{children}
		</CharacterContext.Provider>
	)
}

export const useCharacter = () => useContext(CharacterContext)

export const useUpdateCharacter = () => {
	const { character, setCharacter } = useCharacter()

	const addCorruptionCount = () => {
		setCharacter((prev) => {
			return {
				...prev,
				corruptionCount: {
					...prev.corruptionCount,
					current: prev.corruptionCount.current + 1,
				},
			}
		})
	}

	const removeCorruptionCount = () => {
		if (character.corruptionCount.current > 0)
			setCharacter((prev) => {
				return {
					...prev,
					corruptionCount: {
						...prev.corruptionCount,
						current: prev.corruptionCount.current - 1,
					},
				}
			})
	}

	const addFateCurrent = () => {
		if (character.fate.current < character.fate.total)
			setCharacter((prev) => {
				return {
					...prev,
					fate: {
						...prev.fate,
						current: prev.fate.current + 1,
					},
				}
			})
	}

	const removeFateCurrent = () => {
		if (character.fate.current > 0)
			setCharacter((prev) => {
				return {
					...prev,
					fate: {
						...prev.fate,
						current: prev.fate.current - 1,
					},
				}
			})
	}

	const setIsFated = (status: boolean) => {
		setCharacter((prev) => {
			return {
				...prev,
				isFated: status,
				fate: {
					...prev.fate,
					total: status ? prev.fate.total + 1 : prev.fate.total - 1,
				},
			}
		})
	}

	const burnFate = () => {
		if (character.fate.total > 0)
			setCharacter((prev) => {
				return {
					...prev,
					fate: {
						...prev.fate,
						total: prev.fate.total - 1,
					},
				}
			})
	}

	const addCorruption = () => {
		const newCorruptions = character.corruptions
		newCorruptions.push({
			_id: uid(),
			_type: 'malignance',
			description: '',
			name: '',
			roll: undefined,
		})

		setCharacter((prev) => {
			return {
				...prev,
				corruptions: newCorruptions,
			}
		})
	}

	const getMutation = (id: string) => {
		const corruption = character.corruptions.find(
			(corruption) => corruption._id === id
		)
		return corruption
	}

	const updateCorruption = (id: string, fieldName: string, value: string) => {
		setCharacter((prev) => {
			const newCorruptions = prev.corruptions.map((corruption) => {
				if (corruption._id === id) {
					return {
						...corruption,
						_type:
							fieldName === 'type'
								? (value as CorruptionKey)
								: corruption._type,
						description:
							fieldName === 'description' ? value : corruption.description,
					}
				}
				return corruption
			})
			return {
				...prev,
				corruptions: newCorruptions,
				// corruptions: newCorruptions,
			}
		})
	}

	const removeCorruption = (id: string) => {
		setCharacter((prev) => {
			const newCorruptions = prev.corruptions.filter(
				(corruption) => corruption._id !== id
			)
			return {
				...prev,
				corruptions: newCorruptions,
			}
		})
	}

	return {
		addCorruptionCount,
		removeCorruptionCount,
		addFateCurrent,
		removeFateCurrent,
		burnFate,
		setIsFated,
		addCorruption,
		updateCorruption,
		removeCorruption,
		getMutation,
	}
}
