import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBook } from '../../api/services'

export const useCreateBook = () => {
	const client = useQueryClient()
	return useMutation({
		mutationFn: async (params: Parameters<typeof createBook>[number]) =>
			createBook(params),
		onSuccess() {
			client.invalidateQueries({
				queryKey: ['books/get_all']
			})
		}
	})
}
