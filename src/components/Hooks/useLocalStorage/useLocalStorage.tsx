import { useState } from 'react'

// Define the hook's main function, specifying the key for local storage and the initial state.
function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
	// Initialize the state with the value from local storage or the provided initial value.
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error('Error accessing local storage', error)
			return initialValue
		}
	})

	// A wrapped version of setState that updates local storage whenever the state changes.
	const setValue = (value: T | ((val: T) => T)) => {
		try {
			// Allow value to be a function so we have the same API as useState.
			const valueToStore =
				value instanceof Function ? value(storedValue) : value
			// Save state
			setStoredValue(valueToStore)
			// Save to local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error('Error setting local storage', error)
		}
	}

	return [storedValue, setValue]
}

export default useLocalStorage
