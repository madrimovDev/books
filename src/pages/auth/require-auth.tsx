import { localStorage } from '@/shared/utils'
import { Navigate, Outlet } from 'react-router-dom'

export default function RequireAuth() {
	const data = localStorage.getItem<Auth.SignUpResponse['data']>('data')
	if (!data) {
		return (
			<Navigate
				to='auth/signup'
				replace
			/>
		)
	}
	return <Outlet />
}
