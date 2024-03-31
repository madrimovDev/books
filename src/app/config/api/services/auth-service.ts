import { api } from '..'

export const signUp = async (body: Omit<Auth.SignUpRequest, 'secret'>) => {
	return api.post<Auth.SignUpResponse>('/signup', {
		...body,
		secret: '12345'
	})
}

export const signIn = async (
	body: Omit<Auth.SignUpRequest, 'secret' | 'name'>
) => {
	return api.post<Auth.SignUpResponse>('/login', {
		...body,
		secret: '12345'
	})
}
