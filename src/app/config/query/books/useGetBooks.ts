import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../../api/services'

export const useGetBooks = () => {
	return useQuery({
		queryKey: ['books/get_all'],
		queryFn: async () => (await getBooks()).data
	})
}
