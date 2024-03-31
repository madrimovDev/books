import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeBook } from '../../api/services'

export const useRemoveBook = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: async (id: number) => removeBook(id),
		onSuccess() {
			client.invalidateQueries({
				queryKey: ['books/get_all']
			})
		}
	})
}
