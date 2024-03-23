import { Character } from 'types/character'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CharacterContext = createContext<{
	character: Character | null
	setCharacter: React.Dispatch<React.SetStateAction<Character | null>>
}>({
	character: null,
	setCharacter: () => {},
})

interface CharacterProviderProps {
	children?: React.ReactNode
}

export default function CharacterProvider({
	children,
}: CharacterProviderProps) {
	const [character, setCharacter] = useState<Character | null>(null)
	console.log('🚀 \n character:', character)

	const saveToLocalStorage = (characterData: Character | null) => {
		if (characterData) {
			localStorage.setItem('character', JSON.stringify(characterData))
		} else {
			localStorage.removeItem('character')
		}
	}

	useEffect(() => {
		const storedCharacterData = localStorage.getItem('character')
		if (storedCharacterData) {
			setCharacter(JSON.parse(storedCharacterData))
		}
	}, [])

	useEffect(() => {
		saveToLocalStorage(character)
	}, [character])

	return (
		<CharacterContext.Provider value={{ character, setCharacter }}>
			{children}
		</CharacterContext.Provider>
	)
}

export const useCharacter = () => useContext(CharacterContext)
