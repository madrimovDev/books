import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Home, SignUp } from './lazy-pages'
import { Suspense } from 'react'
import RequireAuth from '@/pages/auth/require-auth'
import RootLayout from '@/app/layout/root-layout/root-layout'
import { Loading } from '@/shared/components'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth />,
		children: [
			{
				path: '',
				element: <RootLayout />,
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={<Loading />}>
								<Home />
							</Suspense>
						)
					}
				]
			}
		]
	},
	{
		path: '/auth',
		children: [
			{
				index: true,
				element: (
					<Navigate
						to='signup'
						replace
					/>
				)
			},
			{
				path: 'signup',
				element: (
					<Suspense fallback={<Loading />}>
						<SignUp />
					</Suspense>
				)
			}
		]
	}
])
