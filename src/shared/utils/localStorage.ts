/* eslint-disable @typescript-eslint/no-explicit-any */
interface LocalStorageItem {
	key: string
	value: any
}
export const localStorage = {
	setItem(key: string, value: any): void {
		try {
			const item: LocalStorageItem = { key, value }
			const serializedItem = JSON.stringify(item)
			window.localStorage.setItem(key, serializedItem)
		} catch (error) {
			console.error('Error saving to localStorage:', error)
		}
	},

	getItem<T>(key: string): T | null {
		try {
			const serializedItem = window.localStorage.getItem(key)
			if (serializedItem === null) {
				return null
			}
			const item: LocalStorageItem = JSON.parse(serializedItem)
			return item.value as T
		} catch (error) {
			console.error('Error retrieving from localStorage:', error)
			return null
		}
	},

	removeItem(key: string): void {
		try {
			window.localStorage.removeItem(key)
		} catch (error) {
			console.error('Error removing item from localStorage:', error)
		}
	},

	clear(): void {
		try {
			window.localStorage.clear()
		} catch (error) {
			console.error('Error clearing localStorage:', error)
		}
	}
}
