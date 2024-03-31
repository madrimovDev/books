import { useMutation } from '@tanstack/react-query'
import { signIn } from '../../api/services'

export const useSignIn = () => {
	return useMutation({
		mutationFn: async (body: Parameters<typeof signIn>[number]) =>
			(await signIn(body)).data
	})
}
