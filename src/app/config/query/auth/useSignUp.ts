import { useMutation } from '@tanstack/react-query'
import { signUp } from '../../api/services'
import { localStorage } from '@/shared/utils'

export const useSignUp = () => {
	return useMutation({
		mutationFn: async (body: Parameters<typeof signUp>[number]) =>
			(await signUp(body)).data,
		onSuccess(data) {
			localStorage.setItem('data', data.data)
		}
	})
}
