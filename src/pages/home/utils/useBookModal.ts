import { create } from 'zustand'

interface State {
	open: boolean
}

interface Actions {
	onOpen: VoidFunction
	onClose: VoidFunction
}

export const useBookModal = create<State & Actions>()(set => {
	return {
		open: false,
		onOpen: () => set(() => ({ open: true })),
		onClose: () => set(() => ({ open: false }))
	}
})
