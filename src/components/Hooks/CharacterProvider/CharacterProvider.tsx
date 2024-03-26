import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react'
import { Character } from 'src/components/objects'

const CharacterContext = createContext<{
	character: Character
	setCharacter: React.Dispatch<React.SetStateAction<Character>>
	resetCharacter: () => void
}>({
	character: new Character(),
	setCharacter: () => {},
	resetCharacter: () => {},
})

interface CharacterProviderProps {
	children?: React.ReactNode
}

export default function CharacterProvider({
	children,
}: CharacterProviderProps) {
	const [character, setCharacter] = useState<Character>(new Character())
	console.log('🚀 \n character:', character)

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
			if (character.name) setCharacter(character)
		} else {
			console.error('Error getting character...')
		}
	}, [])

	useEffect(() => {
		saveToLocalStorage(character)
		console.log('Saved Character...')
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
