import MuiProvider from './mui-provider'
import QueryProvider from './query-provider'
import RouterProvider from './router-provider'
export default function RootProvider() {
	return (
		<>
			<MuiProvider>
				<QueryProvider>
					<RouterProvider />
				</QueryProvider>
			</MuiProvider>
		</>
	)
}
