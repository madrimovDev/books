import { QueryClientProvider } from '@tanstack/react-query'
import { client } from '../config/query'
import { PropsWithChildren } from 'react'

export default function QueryProvider({ children }: PropsWithChildren) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
